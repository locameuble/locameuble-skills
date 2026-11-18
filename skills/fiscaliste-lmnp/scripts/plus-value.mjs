#!/usr/bin/env node
// @generated : script compilé depuis le moteur de Locameublé (https://locameuble.fr). Licence MIT.
import process from "node:process";
// src/lib/fiscal/prelevements-sociaux.ts
/** impots.gouv, « Je suis non-résident, suis-je redevable des contributions sociales ? », modifiée le 19/07/2023. */
const FAQ_PRELEVEMENTS_NON_RESIDENTS = "https://www.impots.gouv.fr/international-particulier/questions/je-suis-non-resident-suis-je-redevable-des-contributions";
// src/lib/fiscal/plus-value.ts
/** Plus-value à la vente d'un bien meublé : estimation LMNP au régime des particuliers, ventilation LMP court et long terme. Centimes, dates ISO. */
/** CGI art. 200 B. */
const TAUX_IMPOT_PLUS_VALUE = 1900;
/** CSG 9,2 % + CRDS 0,5 % + solidarité 7,5 %. La hausse à 10,6 % de la LFSS 2026 épargne les plus-values immobilières (CSS art. L136-8, IV, 2°). */
const TAUX_PRELEVEMENTS_PLUS_VALUE = 1720;
const FORFAIT_TRAVAUX = 1500;
const LEGIFRANCE_150_VB = "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051202577";
const LEGIFRANCE_LF2025_84 = "https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000051168884";
const BOFIP_MAJORATION = "https://bofip.impots.gouv.fr/doctrine/BOI-RFPI-PVI-20-10-20-20";
const BOFIP_ABATTEMENT = "https://bofip.impots.gouv.fr/doctrine/BOI-RFPI-PVI-20-20";
const BOFIP_IMPOT = "https://bofip.impots.gouv.fr/doctrine/BOI-RFPI-PVI-30-10";
const LEGIFRANCE_L136_8 = "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053278668";
const LEGIFRANCE_1609_NONIES_G = "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048806252";
const BOFIP_SURTAXE = "https://bofip.impots.gouv.fr/doctrine/BOI-RFPI-TPVIE-20";
const ISO$1 = /^\d{4}-\d{2}-\d{2}$/;
function exigerDate(valeur, champ) {
	if (!ISO$1.test(valeur)) throw new RangeError(`Plus-value : ${champ} doit être une date ISO, reçu ${valeur}.`);
}
function exigerCentimes(valeur, champ) {
	if (!Number.isSafeInteger(valeur) || valeur < 0) throw new RangeError(`Plus-value : ${champ} doit être un montant entier positif en centimes, reçu ${valeur}.`);
}
/** Même jour, `n` ans plus tard. Un 29 février donne une date inexistante qui se compare quand même bien en texte. */
function ajouterAns(date, n) {
	return `${Number(date.slice(0, 4)) + n}${date.slice(4)}`;
}
/** Périodes de douze mois révolues : du 10 mars 2014 au 9 mars 2026, 11 ans. */
function anneesPleines(debut, fin) {
	const n = Number(fin.slice(0, 4)) - Number(debut.slice(0, 4));
	return ajouterAns(debut, n) <= fin ? n : n - 1;
}
/** CGI art. 150 VC, I, premier alinéa : 6 % par an de la 6e à la 21e année, 4 % la 22e. */
function abattementImpotPointsDeBase(annees) {
	if (annees >= 22) return 1e4;
	return Math.max(0, annees - 5) * 600;
}
/** CGI art. 150 VC, I, second alinéa : 1,65 % de la 6e à la 21e, 1,60 % la 22e, 9 % de la 23e à la 30e. */
function abattementPrelevementsPointsDeBase(annees) {
	if (annees >= 30) return 1e4;
	if (annees >= 22) return 2800 + (annees - 22) * 900;
	return Math.max(0, annees - 5) * 165;
}
const part = (montant, pointsDeBase) => Math.round(montant * pointsDeBase / 1e4);
/** Plafond de tranche en centimes, taux en %, et le lissage `(plafond moins PV) × num / den` en entrée de tranche. */
const TRANCHES_SURTAXE = [
	[
		6e6,
		2,
		1,
		20
	],
	[
		1e7,
		2,
		0,
		1
	],
	[
		11e6,
		3,
		1,
		10
	],
	[
		15e6,
		3,
		0,
		1
	],
	[
		16e6,
		4,
		15,
		100
	],
	[
		2e7,
		4,
		0,
		1
	],
	[
		21e6,
		5,
		20,
		100
	],
	[
		25e6,
		5,
		0,
		1
	],
	[
		26e6,
		6,
		25,
		100
	]
];
/** CGI art. 1609 nonies G : la taxe sur une plus-value nette imposable de plus de 50 000 €, lissée à chaque entrée de tranche. */
function surtaxePlusValue(baseImpot) {
	if (baseImpot <= 5e6) return 0;
	for (const [plafond, taux, num, den] of TRANCHES_SURTAXE) if (baseImpot <= plafond) return Math.round(baseImpot * taux / 100 - (plafond - baseImpot) * num / den);
	return Math.round(baseImpot * 6 / 100);
}
const trace = (regle, ref, sources) => ({
	regle,
	ref,
	sources
});
const tracé = (valeur, regle, ref, sources) => ({
	valeur,
	trace: trace(regle, ref, sources)
});
/** Estimation indicative : le notaire dépose la 2048-IMM et paie l'impôt sur le prix de vente. */
function estimerPlusValueLmnp(c) {
	exigerDate(c.dateAcquisition, "dateAcquisition");
	exigerDate(c.dateCession, "dateCession");
	if (c.dateCession <= c.dateAcquisition) throw new RangeError("Plus-value : la cession doit suivre l'acquisition.");
	exigerCentimes(c.prixAcquisition, "prixAcquisition");
	if (c.fraisAcquisition !== null) exigerCentimes(c.fraisAcquisition, "fraisAcquisition");
	if (c.travaux !== null) exigerCentimes(c.travaux, "travaux");
	exigerCentimes(c.prixCession, "prixCession");
	exigerCentimes(c.fraisCession, "fraisCession");
	exigerCentimes(c.amortissementsDeduits, "amortissementsDeduits");
	const annees = anneesPleines(c.dateAcquisition, c.dateCession);
	const fraisAcquisition = c.fraisAcquisition === null ? tracé(part(c.prixAcquisition, 750), "CGI art. 150 VB, II, 3° : sans justificatif, les frais d'acquisition valent 7,5 % du prix.", BOFIP_MAJORATION, ["prixAcquisition"]) : tracé(c.fraisAcquisition, "CGI art. 150 VB, II, 3° : frais d'acquisition réels justifiés.", BOFIP_MAJORATION, ["fraisAcquisition"]);
	const forfaitOuvert = c.dateCession > ajouterAns(c.dateAcquisition, 5);
	const travaux = c.travaux !== null ? tracé(c.travaux, "CGI art. 150 VB, II, 4° : travaux réalisés par une entreprise, jamais déduits ni amortis.", BOFIP_MAJORATION, ["travaux"]) : c.forfaitTravaux && forfaitOuvert ? tracé(part(c.prixAcquisition, FORFAIT_TRAVAUX), "CGI art. 150 VB, II, 4° : forfait de 15 % du prix pour un immeuble bâti cédé plus de cinq ans après l'acquisition.", BOFIP_MAJORATION, ["prixAcquisition", "forfaitTravaux"]) : tracé(0, c.forfaitTravaux ? "CGI art. 150 VB, II, 4° : le forfait de 15 % n'est ouvert qu'au-delà de cinq ans de détention." : "Aucuns travaux retenus.", BOFIP_MAJORATION, ["forfaitTravaux"]);
	const prixAcquisitionMajore = tracé(c.prixAcquisition + fraisAcquisition.valeur + travaux.valeur, "Prix d'acquisition majoré des frais et des travaux (CGI art. 150 VB, I et II).", LEGIFRANCE_150_VB, [
		"prixAcquisition",
		"fraisAcquisition",
		"travaux"
	]);
	const reintegrationApplicable = c.dateCession >= "2025-02-15" && !c.residenceExclueDeLaReintegration;
	const reintegration = tracé(reintegrationApplicable ? c.amortissementsDeduits : 0, c.residenceExclueDeLaReintegration ? "CGI art. 150 VB, III, 1° à 3° : les résidences étudiantes, seniors et médico-sociales échappent à la minoration." : c.dateCession < "2025-02-15" ? "Loi n° 2025-127, art. 84, II : pas de minoration pour une cession avant le 15 février 2025." : "CGI art. 150 VB, III : le prix est minoré des amortissements admis en déduction (art. 39 C).", reintegrationApplicable ? LEGIFRANCE_150_VB : LEGIFRANCE_LF2025_84, [
		"amortissementsDeduits",
		"dateCession",
		"residenceExclueDeLaReintegration"
	]);
	const prixAcquisitionRetenu = tracé(prixAcquisitionMajore.valeur - reintegration.valeur, "Prix d'acquisition majoré, moins les amortissements réintégrés.", LEGIFRANCE_150_VB, ["prixAcquisitionMajore", "reintegration"]);
	const prixCessionNet = tracé(c.prixCession - c.fraisCession, "CGI art. 150 VA : prix de cession diminué des frais supportés par le vendeur.", BOFIP_MAJORATION, ["prixCession", "fraisCession"]);
	const ecart = prixCessionNet.valeur - prixAcquisitionRetenu.valeur;
	const exoneration = c.prixCession <= 15e5 ? "prix-inferieur-15000" : annees >= 30 ? "detention-30-ans" : null;
	const plusValueBrute = tracé(Math.max(0, ecart), "CGI art. 150 V : prix de cession net moins prix d'acquisition retenu.", LEGIFRANCE_150_VB, ["prixCessionNet", "prixAcquisitionRetenu"]);
	const pbImpot = abattementImpotPointsDeBase(annees);
	const pbPrelevements = abattementPrelevementsPointsDeBase(annees);
	const pv = exoneration ? 0 : plusValueBrute.valeur;
	const sourcesAbattement = [
		"plusValueBrute",
		"dateAcquisition",
		"dateCession"
	];
	const abattementImpot = tracé(part(pv, pbImpot), `CGI art. 150 VC, I : abattement de ${pbImpot / 100} % pour ${annees} ans de détention, au titre de l'impôt.`, BOFIP_ABATTEMENT, sourcesAbattement);
	const abattementPrelevements = tracé(part(pv, pbPrelevements), `CGI art. 150 VC, I : abattement de ${pbPrelevements / 100} % pour ${annees} ans de détention, au titre des prélèvements sociaux.`, BOFIP_ABATTEMENT, sourcesAbattement);
	const baseImpot = tracé(pv - abattementImpot.valeur, "Plus-value nette imposable à l'impôt sur le revenu.", BOFIP_ABATTEMENT, ["plusValueBrute", "abattementImpot"]);
	const basePrelevements = tracé(pv - abattementPrelevements.valeur, "Plus-value nette soumise aux prélèvements sociaux.", BOFIP_ABATTEMENT, ["plusValueBrute", "abattementPrelevements"]);
	const impot = tracé(part(baseImpot.valeur, TAUX_IMPOT_PLUS_VALUE), "CGI art. 200 B : impôt proportionnel de 19 %.", BOFIP_IMPOT, ["baseImpot"]);
	const pbPrelevementsSociaux = c.vendeurAssureEee ? 750 : TAUX_PRELEVEMENTS_PLUS_VALUE;
	const prelevementsSociaux = c.vendeurAssureEee ? tracé(part(basePrelevements.valeur, pbPrelevementsSociaux), "Vendeur non résident assuré dans l'EEE, au Royaume-Uni ou en Suisse : ni CSG ni CRDS, seul le prélèvement de solidarité de 7,5 % (CGI art. 235 ter ; LFSS 2019, art. 26).", FAQ_PRELEVEMENTS_NON_RESIDENTS, ["basePrelevements", "vendeurAssureEee"]) : tracé(part(basePrelevements.valeur, pbPrelevementsSociaux), "Prélèvements sociaux de 17,2 % : CSG maintenue à 9,2 % par CSS art. L136-8, IV, 2° (LFSS 2026, art. 12).", LEGIFRANCE_L136_8, ["basePrelevements"]);
	const surtaxe = tracé(surtaxePlusValue(baseImpot.valeur), "CGI art. 1609 nonies G : taxe de 2 à 6 % au-delà de 50 000 € de plus-value nette imposable, avec lissage.", LEGIFRANCE_1609_NONIES_G, ["baseImpot"]);
	const total = tracé(impot.valeur + prelevementsSociaux.valeur + surtaxe.valeur, "Impôt, prélèvements sociaux et surtaxe.", BOFIP_SURTAXE, [
		"impot",
		"prelevementsSociaux",
		"surtaxe"
	]);
	const netVendeur = tracé(c.prixCession - c.fraisCession - total.valeur, "Prix de cession moins frais de cession et impôts prélevés par le notaire.", BOFIP_IMPOT, [
		"prixCession",
		"fraisCession",
		"total"
	]);
	return {
		dureeDetention: annees,
		exoneration,
		fraisAcquisition,
		travaux,
		prixAcquisitionMajore,
		reintegration,
		prixAcquisitionRetenu,
		prixCessionNet,
		plusValueBrute,
		moinsValue: Math.max(0, -ecart),
		tauxAbattementImpot: pbImpot / 1e4,
		tauxAbattementPrelevements: pbPrelevements / 1e4,
		tauxPrelevements: pbPrelevementsSociaux / 1e4,
		abattementImpot,
		abattementPrelevements,
		baseImpot,
		basePrelevements,
		impot,
		prelevementsSociaux,
		surtaxe,
		total,
		netVendeur
	};
}
// src/lib/site/tools/calcul-plus-value-lmnp/plus-value.ts
/**
* Le calculateur public de plus-value LMNP, branché sur le moteur de l'app (`#lib/fiscal/plus-value`).
* Montants en centimes, taux en points de base (600 pour 6 %).
*/
const calcul$1 = (e) => ({
	prixAchatMajore: e.prixAcquisitionMajore.valeur,
	reprise: e.reintegration.valeur,
	plusValueBrute: e.plusValueBrute.valeur,
	baseImpot: e.baseImpot.valeur,
	basePrelevements: e.basePrelevements.valeur,
	impot: e.impot.valeur,
	prelevements: e.prelevementsSociaux.valeur,
	surtaxe: e.surtaxe.valeur,
	total: e.total.valeur
});
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const montant = (n) => Number.isSafeInteger(n) && n >= 0;
function plusValue(e) {
	if (!ISO.test(e.dateAchat) || !ISO.test(e.dateVente) || e.prixVente <= 0 || e.prixAchat <= 0) return { etat: "incomplet" };
	if (![
		e.prixVente,
		e.fraisVente,
		e.prixAchat,
		e.fraisAchat ?? 0,
		e.travaux ?? 0,
		e.amortissements
	].every(montant)) return { etat: "incomplet" };
	if (e.dateVente <= e.dateAchat) return {
		etat: "dates",
		message: "La date de vente doit venir après la date d'achat."
	};
	const annees = anneesPleines(e.dateAchat, e.dateVente);
	const bareme = {
		annees,
		impot: abattementImpotPointsDeBase(annees),
		prelevements: abattementPrelevementsPointsDeBase(annees)
	};
	const estimer = (amortissementsDeduits) => estimerPlusValueLmnp({
		dateAcquisition: e.dateAchat,
		dateCession: e.dateVente,
		prixAcquisition: e.prixAchat,
		fraisAcquisition: e.fraisAchat,
		travaux: e.travaux,
		forfaitTravaux: e.travaux === null,
		prixCession: e.prixVente,
		fraisCession: e.fraisVente,
		amortissementsDeduits,
		residenceExclueDeLaReintegration: e.exception
	});
	const avec = estimer(e.amortissements);
	if (avec.exoneration === "prix-inferieur-15000") return {
		etat: "exoneree",
		raison: "seuil",
		bareme
	};
	if (avec.exoneration === "detention-30-ans") return {
		etat: "exoneree",
		raison: "duree",
		bareme
	};
	return {
		etat: "calcule",
		bareme,
		fraisAchat: avec.fraisAcquisition.valeur,
		travaux: avec.travaux.valeur,
		prixVenteNet: avec.prixCessionNet.valeur,
		repriseApplicable: !e.exception && e.dateVente >= "2025-02-15",
		calcul: calcul$1(avec),
		sansReprise: calcul$1(estimer(0))
	};
}
// src/lib/skills/cli.ts
const AVERTISSEMENT = "Information générale calculée avec les règles citées, pas un conseil fiscal ou juridique personnalisé.";
/** A wrong input: the script prints the message in French and exits with code 2. */
var SaisieInvalide = class extends Error {};
/** Cents to euros, exact to the cent. */
const euros = (centimes) => Math.round(centimes) / 100;
function lu(e, cle, garde, type) {
	const v = e[cle];
	if (!garde(v)) throw new Error(`Le champ ${cle} n'est pas ${type}.`);
	return v;
}
const estNombre = (v) => typeof v === "number";
const nombre = (e, cle) => lu(e, cle, estNombre, "un nombre");
/** An amount field, read in euros, handed to the engine in cents. */
const centimes = (e, cle) => Math.round(nombre(e, cle) * 100);
const centimesOuNull = (e, cle) => e[cle] === null ? null : centimes(e, cle);
const texte = (e, cle) => lu(e, cle, (v) => typeof v === "string", "un texte");
const booleen = (e, cle) => lu(e, cle, (v) => typeof v === "boolean", "oui ou non");
const camel = (nom) => nom.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const kebab = (nom) => nom.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
function lireNombre(champ, brut) {
	const n = typeof brut === "number" ? brut : typeof brut === "string" && brut.trim() !== "" ? Number(brut.replace(/[\s  €%]/g, "").replace(",", ".")) : NaN;
	if (!Number.isFinite(n)) throw new SaisieInvalide(`--${kebab(champ.nom)} attend un nombre, reçu « ${String(brut)} ».`);
	const min = champ.min ?? (champ.type === "euros" ? 0 : void 0);
	if (min !== void 0 && n < min) throw new SaisieInvalide(`--${kebab(champ.nom)} doit valoir au moins ${min}, reçu ${n}.`);
	if (champ.max !== void 0 && n > champ.max) throw new SaisieInvalide(`--${kebab(champ.nom)} doit valoir au plus ${champ.max}, reçu ${n}.`);
	return n;
}
function lireValeur(champ, brut) {
	if (brut === null) return null;
	const nom = `--${kebab(champ.nom)}`;
	switch (champ.type) {
		case "euros": return Math.round(lireNombre(champ, brut) * 100) / 100;
		case "nombre": return lireNombre(champ, brut);
		case "booleen":
			if (brut === true || brut === "true" || brut === "oui" || brut === "") return true;
			if (brut === false || brut === "false" || brut === "non") return false;
			throw new SaisieInvalide(`${nom} attend oui ou non (true ou false), reçu « ${String(brut)} ».`);
		case "date": {
			const texte = String(brut);
			const d = /* @__PURE__ */ new Date(`${texte}T00:00:00Z`);
			if (!/^\d{4}-\d{2}-\d{2}$/.test(texte) || d.toISOString().slice(0, 10) !== texte) throw new SaisieInvalide(`${nom} attend une date AAAA-MM-JJ, reçu « ${texte} ».`);
			return texte;
		}
		case "liste": {
			const liste = Array.isArray(brut) ? brut.map(String) : String(brut).split(",").map((s) => s.trim()).filter(Boolean);
			const hors = champ.choix ? liste.filter((x) => !champ.choix?.includes(x)) : [];
			if (hors.length > 0) throw new SaisieInvalide(`${nom} : ${hors.join(", ")} inconnu. Valeurs possibles : ${champ.choix?.join(", ")}.`);
			return liste;
		}
		case "texte": {
			const texte = String(brut).trim();
			if (champ.choix && !champ.choix.includes(texte)) throw new SaisieInvalide(`${nom} attend ${champ.choix.join(", ")}, reçu « ${texte} ».`);
			return texte;
		}
	}
}
/** Flags (`--prix 200000`, `--prix=200000`, a bare `--exception`) and `--json '{...}'` into one checked input. */
function lireArguments(outil, argv) {
	const brut = {};
	for (let i = 0; i < argv.length; i++) {
		const arg = argv[i];
		if (!arg.startsWith("--")) throw new SaisieInvalide(`Argument inattendu « ${arg} ». Lancez --help pour la liste.`);
		const [tete, ...reste] = arg.slice(2).split("=");
		const enLigne = reste.length > 0 ? reste.join("=") : void 0;
		const suivant = argv[i + 1];
		const prendSuivant = enLigne === void 0 && suivant !== void 0 && !suivant.startsWith("--");
		const valeur = enLigne ?? (prendSuivant ? suivant : "");
		if (prendSuivant) i++;
		if (tete === "json") {
			let objet;
			try {
				objet = JSON.parse(valeur);
			} catch {
				throw new SaisieInvalide("--json attend un objet JSON valide, entre apostrophes.");
			}
			if (typeof objet !== "object" || objet === null || Array.isArray(objet)) throw new SaisieInvalide("--json attend un objet JSON, par exemple '{\"prix\": 200000}'.");
			for (const [cle, v] of Object.entries(objet)) brut[camel(cle)] = v;
		} else brut[camel(tete)] = valeur;
	}
	const connus = new Set(outil.champs.map((c) => c.nom));
	const inconnus = Object.keys(brut).filter((k) => !connus.has(k));
	if (inconnus.length > 0) throw new SaisieInvalide(`Champ inconnu : ${inconnus.map((k) => `--${kebab(k)}`).join(", ")}. Lancez --help pour la liste.`);
	const entree = {};
	for (const champ of outil.champs) if (brut[champ.nom] === void 0) {
		if (champ.defaut === void 0) throw new SaisieInvalide(`--${kebab(champ.nom)} manque : ${champ.aide}`);
		entree[champ.nom] = champ.defaut;
	} else entree[champ.nom] = lireValeur(champ, brut[champ.nom]);
	return entree;
}
function aide(outil) {
	const lignes = outil.champs.map((c) => {
		const unite = c.unite ? ` (${c.unite})` : "";
		const choix = c.choix ? ` Valeurs : ${c.choix.join(", ")}.` : "";
		const defaut = c.defaut === void 0 ? " Obligatoire." : c.defaut === null ? " Facultatif." : ` Par défaut : ${Array.isArray(c.defaut) ? c.defaut.join(",") || "aucun" : String(c.defaut)}.`;
		return `  --${kebab(c.nom)}${unite}\n      ${c.aide}${choix}${defaut}`;
	});
	return [
		`${outil.nom}.mjs : ${outil.resume}`,
		"",
		`Usage : node ${outil.nom}.mjs [--champ valeur ...] | --json '{"champ": valeur}'`,
		"Montants en euros, en entrée comme en sortie. Sortie : JSON sur la sortie standard.",
		"",
		"Champs :",
		...lignes,
		"",
		"Exemple :",
		`  node ${outil.nom}.mjs ${outil.exemple}`,
		"",
		AVERTISSEMENT
	].join("\n");
}
/** The whole run, `--help` included. Returns the exit code instead of exiting, so a test can call it. */
function executer(outil, argv, ecrire, erreur) {
	if (argv.includes("--help") || argv.includes("-h")) {
		ecrire(aide(outil));
		return 0;
	}
	try {
		const entree = lireArguments(outil, argv);
		const { resultat, regles } = outil.calculer(entree);
		const sortie = {
			entree,
			resultat,
			regles: {
				...regles,
				sources: [...new Set(regles.sources)]
			},
			avertissement: AVERTISSEMENT
		};
		ecrire(JSON.stringify(sortie, null, 2));
		return 0;
	} catch (e) {
		if (e instanceof SaisieInvalide) {
			erreur(`Erreur : ${e.message}`);
			return 2;
		}
		erreur(`Erreur de calcul : ${e instanceof Error ? e.message : String(e)}`);
		return 1;
	}
}
/** The entry point of a bundled script. */
function lancer(outil) {
	process.exitCode = executer(outil, process.argv.slice(2), (t) => process.stdout.write(`${t}\n`), (t) => process.stderr.write(`${t}\n`));
}
/** Every `ref` string an engine result carries, deduplicated, in order of appearance. */
function refs(valeur, acc = /* @__PURE__ */ new Set()) {
	if (Array.isArray(valeur)) for (const v of valeur) refs(v, acc);
	else if (valeur && typeof valeur === "object") for (const [cle, v] of Object.entries(valeur)) if (cle === "ref" && typeof v === "string") acc.add(v);
	else refs(v, acc);
	return [...acc];
}
// src/lib/skills/plus-value.ts
const calcul = (c) => ({
	prixAchatMajore: euros(c.prixAchatMajore),
	repriseAmortissements: euros(c.reprise),
	plusValueBrute: euros(c.plusValueBrute),
	baseImpot: euros(c.baseImpot),
	basePrelevements: euros(c.basePrelevements),
	impot: euros(c.impot),
	prelevements: euros(c.prelevements),
	surtaxe: euros(c.surtaxe),
	total: euros(c.total)
});
lancer({
	nom: "plus-value",
	resume: "plus-value à la vente d'un logement LMNP (régime des particuliers, reprise des amortissements comprise).",
	champs: [
		{
			nom: "prixVente",
			type: "euros",
			unite: "€",
			aide: "Prix de vente inscrit dans l'acte."
		},
		{
			nom: "fraisVente",
			type: "euros",
			unite: "€",
			defaut: 0,
			aide: "Frais payés par le vendeur : agence, diagnostics."
		},
		{
			nom: "prixAchat",
			type: "euros",
			unite: "€",
			aide: "Prix d'achat inscrit dans l'acte."
		},
		{
			nom: "fraisAchat",
			type: "euros",
			unite: "€",
			defaut: null,
			aide: "Frais d'achat réels justifiés. Absent : le forfait de 7,5 % du prix d'achat."
		},
		{
			nom: "travaux",
			type: "euros",
			unite: "€",
			defaut: null,
			aide: "Travaux par une entreprise, jamais déduits ni amortis. Absent : le forfait de 15 % après 5 ans."
		},
		{
			nom: "amortissements",
			type: "euros",
			unite: "€",
			defaut: 0,
			aide: "Amortissements du logement déduits, hors mobilier et hors travaux."
		},
		{
			nom: "exception",
			type: "booleen",
			defaut: false,
			aide: "Résidence étudiante, seniors, de services ou EHPAD : pas de reprise des amortissements."
		},
		{
			nom: "dateAchat",
			type: "date",
			aide: "Date de l'acte d'achat, AAAA-MM-JJ."
		},
		{
			nom: "dateVente",
			type: "date",
			aide: "Date de l'acte de vente, AAAA-MM-JJ."
		}
	],
	exemple: "--prix-vente 260000 --prix-achat 180000 --amortissements 28000 --date-achat 2016-05-12 --date-vente 2026-09-30",
	calculer(e) {
		const entree = {
			prixVente: centimes(e, "prixVente"),
			fraisVente: centimes(e, "fraisVente"),
			prixAchat: centimes(e, "prixAchat"),
			fraisAchat: centimesOuNull(e, "fraisAchat"),
			travaux: centimesOuNull(e, "travaux"),
			amortissements: centimes(e, "amortissements"),
			exception: booleen(e, "exception"),
			dateAchat: texte(e, "dateAchat"),
			dateVente: texte(e, "dateVente")
		};
		const r = plusValue(entree);
		if (r.etat === "incomplet") throw new SaisieInvalide("Les prix de vente et d'achat doivent être supérieurs à zéro.");
		if (r.etat === "dates") throw new SaisieInvalide(r.message);
		const trace = estimerPlusValueLmnp({
			dateAcquisition: entree.dateAchat,
			dateCession: entree.dateVente,
			prixAcquisition: entree.prixAchat,
			fraisAcquisition: entree.fraisAchat,
			travaux: entree.travaux,
			forfaitTravaux: entree.travaux === null,
			prixCession: entree.prixVente,
			fraisCession: entree.fraisVente,
			amortissementsDeduits: entree.amortissements,
			residenceExclueDeLaReintegration: entree.exception
		});
		const bareme = {
			anneesDetention: r.bareme.annees,
			abattementImpot: r.bareme.impot / 100,
			abattementPrelevements: r.bareme.prelevements / 100,
			unite: "%"
		};
		return {
			resultat: r.etat === "exoneree" ? {
				etat: "exoneree",
				raison: r.raison === "seuil" ? "Prix de vente de 15 000 € ou moins : exonérée (CGI art. 150 U, II, 6°)." : "Plus de 30 ans de détention : exonérée d'impôt et de prélèvements sociaux.",
				bareme
			} : {
				etat: "imposable",
				bareme,
				fraisAchatRetenus: euros(r.fraisAchat),
				travauxRetenus: euros(r.travaux),
				prixVenteNet: euros(r.prixVenteNet),
				repriseAmortissementsApplicable: r.repriseApplicable,
				calcul: calcul(r.calcul),
				sansRepriseAmortissements: calcul(r.sansReprise)
			},
			regles: {
				annee: Number(entree.dateVente.slice(0, 4)),
				sources: refs(trace)
			}
		};
	}
});
export {};
