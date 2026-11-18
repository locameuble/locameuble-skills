#!/usr/bin/env node
// @generated : script compilé depuis le moteur de Locameublé (https://locameuble.fr). Licence MIT.
import process from "node:process";
// src/lib/site/tools/calcul-frais-de-notaire/departements.ts
const A = 5e4;
const B = 45e3;
const DEPARTEMENTS = [
	{
		code: "01",
		nom: "Ain",
		taux: A
	},
	{
		code: "02",
		nom: "Aisne",
		taux: A
	},
	{
		code: "03",
		nom: "Allier",
		taux: A
	},
	{
		code: "04",
		nom: "Alpes-de-Haute-Provence",
		taux: A
	},
	{
		code: "05",
		nom: "Hautes-Alpes",
		taux: B
	},
	{
		code: "06",
		nom: "Alpes-Maritimes",
		taux: B
	},
	{
		code: "07",
		nom: "Ardèche",
		taux: B
	},
	{
		code: "08",
		nom: "Ardennes",
		taux: A
	},
	{
		code: "09",
		nom: "Ariège",
		taux: A
	},
	{
		code: "10",
		nom: "Aube",
		taux: A
	},
	{
		code: "11",
		nom: "Aude",
		taux: A
	},
	{
		code: "12",
		nom: "Aveyron",
		taux: A
	},
	{
		code: "13",
		nom: "Bouches-du-Rhône",
		taux: A
	},
	{
		code: "14",
		nom: "Calvados",
		taux: A
	},
	{
		code: "15",
		nom: "Cantal",
		taux: A
	},
	{
		code: "16",
		nom: "Charente",
		taux: B
	},
	{
		code: "17",
		nom: "Charente-Maritime",
		taux: A
	},
	{
		code: "18",
		nom: "Cher",
		taux: A
	},
	{
		code: "19",
		nom: "Corrèze",
		taux: A
	},
	{
		code: "20",
		nom: "Corse",
		taux: A
	},
	{
		code: "21",
		nom: "Côte-d'Or",
		taux: A
	},
	{
		code: "22",
		nom: "Côtes-d'Armor",
		taux: A
	},
	{
		code: "23",
		nom: "Creuse",
		taux: A
	},
	{
		code: "24",
		nom: "Dordogne",
		taux: A
	},
	{
		code: "25",
		nom: "Doubs",
		taux: A
	},
	{
		code: "26",
		nom: "Drôme",
		taux: B
	},
	{
		code: "27",
		nom: "Eure",
		taux: A
	},
	{
		code: "28",
		nom: "Eure-et-Loir",
		taux: A
	},
	{
		code: "29",
		nom: "Finistère",
		taux: A
	},
	{
		code: "30",
		nom: "Gard",
		taux: A
	},
	{
		code: "31",
		nom: "Haute-Garonne",
		taux: A
	},
	{
		code: "32",
		nom: "Gers",
		taux: A
	},
	{
		code: "33",
		nom: "Gironde",
		taux: A
	},
	{
		code: "34",
		nom: "Hérault",
		taux: A
	},
	{
		code: "35",
		nom: "Ille-et-Vilaine",
		taux: A
	},
	{
		code: "36",
		nom: "Indre",
		taux: 38e3
	},
	{
		code: "37",
		nom: "Indre-et-Loire",
		taux: A
	},
	{
		code: "38",
		nom: "Isère",
		taux: A
	},
	{
		code: "39",
		nom: "Jura",
		taux: A
	},
	{
		code: "40",
		nom: "Landes",
		taux: A
	},
	{
		code: "41",
		nom: "Loir-et-Cher",
		taux: A
	},
	{
		code: "42",
		nom: "Loire",
		taux: A
	},
	{
		code: "43",
		nom: "Haute-Loire",
		taux: A
	},
	{
		code: "44",
		nom: "Loire-Atlantique",
		taux: A
	},
	{
		code: "45",
		nom: "Loiret",
		taux: A
	},
	{
		code: "46",
		nom: "Lot",
		taux: A
	},
	{
		code: "47",
		nom: "Lot-et-Garonne",
		taux: A
	},
	{
		code: "48",
		nom: "Lozère",
		taux: B
	},
	{
		code: "49",
		nom: "Maine-et-Loire",
		taux: A
	},
	{
		code: "50",
		nom: "Manche",
		taux: A
	},
	{
		code: "51",
		nom: "Marne",
		taux: A
	},
	{
		code: "52",
		nom: "Haute-Marne",
		taux: A
	},
	{
		code: "53",
		nom: "Mayenne",
		taux: A
	},
	{
		code: "54",
		nom: "Meurthe-et-Moselle",
		taux: A
	},
	{
		code: "55",
		nom: "Meuse",
		taux: A
	},
	{
		code: "56",
		nom: "Morbihan",
		taux: A
	},
	{
		code: "57",
		nom: "Moselle",
		taux: A
	},
	{
		code: "58",
		nom: "Nièvre",
		taux: A
	},
	{
		code: "59",
		nom: "Nord",
		taux: A
	},
	{
		code: "60",
		nom: "Oise",
		taux: B
	},
	{
		code: "61",
		nom: "Orne",
		taux: A
	},
	{
		code: "62",
		nom: "Pas-de-Calais",
		taux: A
	},
	{
		code: "63",
		nom: "Puy-de-Dôme",
		taux: A
	},
	{
		code: "64",
		nom: "Pyrénées-Atlantiques",
		taux: A
	},
	{
		code: "65",
		nom: "Hautes-Pyrénées",
		taux: B
	},
	{
		code: "66",
		nom: "Pyrénées-Orientales",
		taux: A
	},
	{
		code: "67",
		nom: "Bas-Rhin",
		taux: A
	},
	{
		code: "68",
		nom: "Haut-Rhin",
		taux: A
	},
	{
		code: "69",
		nom: "Rhône et Métropole de Lyon",
		taux: A
	},
	{
		code: "70",
		nom: "Haute-Saône",
		taux: A
	},
	{
		code: "71",
		nom: "Saône-et-Loire",
		taux: B
	},
	{
		code: "72",
		nom: "Sarthe",
		taux: A
	},
	{
		code: "73",
		nom: "Savoie",
		taux: A,
		primo: 4e4
	},
	{
		code: "74",
		nom: "Haute-Savoie",
		taux: A
	},
	{
		code: "75",
		nom: "Paris",
		taux: A
	},
	{
		code: "76",
		nom: "Seine-Maritime",
		taux: A
	},
	{
		code: "77",
		nom: "Seine-et-Marne",
		taux: A
	},
	{
		code: "78",
		nom: "Yvelines",
		taux: A
	},
	{
		code: "79",
		nom: "Deux-Sèvres",
		taux: A
	},
	{
		code: "80",
		nom: "Somme",
		taux: A
	},
	{
		code: "81",
		nom: "Tarn",
		taux: A
	},
	{
		code: "82",
		nom: "Tarn-et-Garonne",
		taux: A
	},
	{
		code: "83",
		nom: "Var",
		taux: A
	},
	{
		code: "84",
		nom: "Vaucluse",
		taux: A
	},
	{
		code: "85",
		nom: "Vendée",
		taux: A
	},
	{
		code: "86",
		nom: "Vienne",
		taux: A
	},
	{
		code: "87",
		nom: "Haute-Vienne",
		taux: A
	},
	{
		code: "88",
		nom: "Vosges",
		taux: A
	},
	{
		code: "89",
		nom: "Yonne",
		taux: A
	},
	{
		code: "90",
		nom: "Territoire de Belfort",
		taux: A
	},
	{
		code: "91",
		nom: "Essonne",
		taux: A
	},
	{
		code: "92",
		nom: "Hauts-de-Seine",
		taux: A
	},
	{
		code: "93",
		nom: "Seine-Saint-Denis",
		taux: A
	},
	{
		code: "94",
		nom: "Val-de-Marne",
		taux: A
	},
	{
		code: "95",
		nom: "Val-d'Oise",
		taux: A
	},
	{
		code: "971",
		nom: "Guadeloupe",
		taux: B
	},
	{
		code: "972",
		nom: "Martinique",
		taux: A
	},
	{
		code: "973",
		nom: "Guyane",
		taux: A
	},
	{
		code: "974",
		nom: "La Réunion",
		taux: A
	},
	{
		code: "976",
		nom: "Mayotte",
		taux: B
	}
];
// src/lib/site/tools/calcul-frais-de-notaire/frais.ts
/**
* Frais d'un achat immobilier chez le notaire, ventes signées en 2026. Montants en centimes,
* taux en millionièmes (45 000 pour 4,5 %) pour garder les 2,37 % de frais d'assiette exacts.
*/
/** Les textes que ce calcul applique, pour qui affiche ou rend le résultat. */
const SOURCES = [
	"CGI art. 1594 F septies (taux du premier achat d'une résidence principale)",
	"CGI art. 1584 (taxe communale additionnelle)",
	"CGI art. 1647, V (frais d'assiette et de recouvrement)",
	"CGI art. 1594 F quinquies (logement neuf soumis à la TVA)",
	"CGI art. 879 (contribution de sécurité immobilière)",
	"LF 2025, art. 116, II, B",
	"service-public.gouv.fr F17701 (émoluments du notaire)",
	"https://www.impots.gouv.fr/sites/default/files/media/1_metier/3_partenaire/notaires/dmto/dmto_2026-06.pdf"
];
/** Taxe communale additionnelle, CGI art. 1584. */
const TAUX_COMMUNAL = 12e3;
/** Frais d'assiette et de recouvrement sur la part départementale, CGI art. 1647, V. */
const FRAIS_ASSIETTE = 23700;
/** Taxe de publicité foncière d'un logement neuf soumis à la TVA (CGI art. 1594 F quinquies), et ses frais d'assiette de 2,14 %. */
const TAUX_NEUF = 7e3;
const FRAIS_ASSIETTE_NEUF = 21400;
/** Contribution de sécurité immobilière, CGI art. 879 : 0,10 %, 15 € au moins. */
const TAUX_CSI = 1e3;
const CSI_MINIMUM = 1500;
/** Émoluments proportionnels de vente en métropole, inchangés depuis le 1er janvier 2021 (service-public F17701). */
const TRANCHES_EMOLUMENTS = [
	[65e4, 38700],
	[17e5, 15960],
	[6e6, 10640],
	[Number.POSITIVE_INFINITY, 7990]
];
const TVA = 2e5;
/** Ordre de grandeur des formalités et des débours, posé comme estimation. */
const ESTIMATION_FORMALITES = 1e5;
const ESTIMATION_DEBOURS = 8e4;
const part = (montant, millioniemes) => Math.round(montant * millioniemes / 1e6);
function emoluments(prix) {
	let reste = prix;
	let plancher = 0;
	let total = 0;
	for (const [plafond, taux] of TRANCHES_EMOLUMENTS) {
		const tranche = Math.min(reste, plafond - plancher);
		if (tranche <= 0) break;
		total += tranche * taux / 1e6;
		reste -= tranche;
		plancher = plafond;
	}
	return Math.round(total);
}
function frais(e) {
	const departement = DEPARTEMENTS.find((d) => d.code === e.departement);
	if (!departement || e.prix <= 0) return null;
	const base = Math.max(0, e.prix - e.mobilier);
	const neuf = e.nature === "neuf";
	const tauxPrimo = departement.primo ?? 45e3;
	const primoApplique = !neuf && e.primoAccedant && departement.taux > tauxPrimo;
	const tauxDepartemental = neuf ? TAUX_NEUF : primoApplique ? tauxPrimo : departement.taux;
	const assiette = neuf ? FRAIS_ASSIETTE_NEUF : FRAIS_ASSIETTE;
	const communal = neuf ? 0 : TAUX_COMMUNAL;
	const tauxDroits = tauxDepartemental * (1e6 + assiette) / 1e6 + communal;
	const droits = Math.round(base * tauxDroits / 1e6 / 100) * 100;
	const emolumentsHT = emoluments(e.prix);
	const emolumentsTTC = emolumentsHT + part(emolumentsHT, TVA);
	const csi = Math.max(CSI_MINIMUM, part(e.prix, TAUX_CSI));
	const formalites = ESTIMATION_FORMALITES + part(ESTIMATION_FORMALITES, TVA);
	const debours = ESTIMATION_DEBOURS;
	return {
		departement,
		base,
		tauxDroits,
		tauxDepartemental,
		primoApplique,
		droits,
		emolumentsHT,
		emolumentsTTC,
		csi,
		formalites,
		debours,
		total: droits + emolumentsTTC + csi + formalites + debours
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
const texte = (e, cle) => lu(e, cle, (v) => typeof v === "string", "un texte");
const booleen = (e, cle) => lu(e, cle, (v) => typeof v === "boolean", "oui ou non");
/** A choice field narrowed to its declared values. */
function choix(e, cle, valeurs) {
	const v = texte(e, cle);
	const trouve = valeurs.find((x) => x === v);
	if (trouve === void 0) throw new SaisieInvalide(`--${kebab(cle)} attend ${valeurs.join(", ")}.`);
	return trouve;
}
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
// src/lib/skills/frais-notaire.ts
const NATURES = ["ancien", "neuf"];
const millioniemes = (taux) => Math.round(taux / 10) / 1e3;
lancer({
	nom: "frais-notaire",
	resume: "frais de notaire d'un achat immobilier signé en 2026 : droits, émoluments, CSI, débours.",
	champs: [
		{
			nom: "prix",
			type: "euros",
			unite: "€",
			aide: "Prix de vente inscrit dans l'acte, mobilier compris."
		},
		{
			nom: "mobilier",
			type: "euros",
			unite: "€",
			defaut: 0,
			aide: "Mobilier chiffré dans l'acte : il sort de l'assiette des droits."
		},
		{
			nom: "nature",
			type: "texte",
			choix: NATURES,
			defaut: "ancien",
			aide: "Logement ancien ou neuf soumis à la TVA."
		},
		{
			nom: "departement",
			type: "texte",
			aide: "Code du département du bien : 69, 974, ou 20 pour la Corse."
		},
		{
			nom: "primoAccedant",
			type: "booleen",
			defaut: false,
			aide: "Premier achat d'une résidence principale (taux réduit dans certains départements)."
		}
	],
	exemple: "--prix 200000 --mobilier 8000 --departement 69",
	calculer(e) {
		const saisi = texte(e, "departement").toUpperCase().padStart(2, "0");
		const code = saisi === "2A" || saisi === "2B" ? "20" : saisi;
		const f = frais({
			prix: centimes(e, "prix"),
			mobilier: centimes(e, "mobilier"),
			nature: choix(e, "nature", NATURES),
			departement: code,
			primoAccedant: booleen(e, "primoAccedant")
		});
		if (!f) {
			if (!DEPARTEMENTS.some((d) => d.code === code)) throw new SaisieInvalide(`Département « ${code} » inconnu : un code comme 69, 974 ou 20.`);
			throw new SaisieInvalide("Le prix doit être supérieur à zéro.");
		}
		return {
			resultat: {
				departement: {
					code: f.departement.code,
					nom: f.departement.nom
				},
				baseDroits: euros(f.base),
				tauxDroits: millioniemes(f.tauxDroits),
				tauxDepartemental: millioniemes(f.tauxDepartemental),
				unite: "taux en %",
				tauxReduitPremierAchat: f.primoApplique,
				droitsDeMutation: euros(f.droits),
				emolumentsHT: euros(f.emolumentsHT),
				emolumentsTTC: euros(f.emolumentsTTC),
				contributionSecuriteImmobiliere: euros(f.csi),
				formalitesEstimees: euros(f.formalites),
				deboursEstimes: euros(f.debours),
				total: euros(f.total),
				pourcentageDuPrix: Math.round(f.total / centimes(e, "prix") * 1e4) / 100
			},
			regles: {
				annee: 2026,
				sources: SOURCES
			}
		};
	}
});
export {};
