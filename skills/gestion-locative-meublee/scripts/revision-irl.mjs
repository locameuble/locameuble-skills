#!/usr/bin/env node
// @generated : script compilé depuis le moteur de Locameublé (https://locameuble.fr). Licence MIT.
import process from "node:process";
// src/lib/domaine/irl.ts
/**
* L'IRL publié par l'Insee (série 001515333, métropole), en centièmes, relevé tel quel avec sa
* parution au JO. Un trimestre absent n'est pas publié : jamais une valeur estimée.
*/
const SERIE = "https://bdm.insee.fr/series/sdmx/data/SERIES_BDM/001515333";
const source = (t) => {
	const periode = t.replace("-T", "-Q");
	return `${SERIE}?startPeriod=${periode}&endPeriod=${periode}`;
};
const RELEVES = [
	[
		"2023-T1",
		13861,
		"2023-04-16"
	],
	[
		"2023-T2",
		14059,
		"2023-07-16"
	],
	[
		"2023-T3",
		14103,
		"2023-10-14"
	],
	[
		"2023-T4",
		14206,
		"2024-01-18"
	],
	[
		"2024-T1",
		14346,
		"2024-06-01"
	],
	[
		"2024-T2",
		14517,
		"2024-07-18"
	],
	[
		"2024-T3",
		14451,
		"2024-10-16"
	],
	[
		"2024-T4",
		14464,
		"2025-01-16"
	],
	[
		"2025-T1",
		14547,
		"2025-04-16"
	],
	[
		"2025-T2",
		14668,
		"2025-07-13"
	],
	[
		"2025-T3",
		14577,
		"2025-10-17"
	],
	[
		"2025-T4",
		14578,
		"2026-01-16"
	],
	[
		"2026-T1",
		14660,
		"2026-04-16"
	],
	[
		"2026-T2",
		14837,
		"2026-07-12"
	],
	[
		"2026-T3",
		14806,
		"2026-10-16"
	]
];
const INDICES_IRL = new Map(RELEVES.map(([trimestre, valeur, publieLe]) => [trimestre, {
	trimestre,
	valeur,
	publieLe,
	source: source(trimestre)
}]));
const [trimestre, valeur, publieLe] = RELEVES[RELEVES.length - 1];
/** Le dernier indice relevé, que les outils publics citent avec sa date de parution. */
const DERNIER_IRL = {
	trimestre,
	valeur,
	publieLe,
	source: source(trimestre)
};
/** `2026-T1` to "1er trimestre 2026". */
const trimestreLabel = (value) => {
	const [year, q] = value.split("-T");
	return `${q === "1" ? "1er" : `${q}e`} trimestre ${year}`;
};
/** 14806 to "148,06". */
const indiceTexte = (centiemes) => (centiemes / 100).toLocaleString("fr-FR", { minimumFractionDigits: 2 });
const deux = (n) => String(n).padStart(2, "0");
/** L'Insee publie un trimestre vers le 15 du mois qui le suit. */
const publieVers = (annee, t) => t === 4 ? `${annee + 1}-01-15` : `${annee}-${deux(t * 3 + 1)}-15`;
/** L'année du dernier indice de ce trimestre publié à `date`. */
function anneeCible(date, t) {
	let annee = Number(date.slice(0, 4));
	while (publieVers(annee, t) > date) annee--;
	return annee;
}
// src/lib/app/ui/format.ts
const EUROS = new Intl.NumberFormat("fr-FR", {
	style: "currency",
	currency: "EUR"
});
new Intl.NumberFormat("fr-FR", {
	style: "currency",
	currency: "EUR",
	maximumFractionDigits: 0
});
new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 2 });
/** Intl prints a hyphen; an amount takes the real minus sign (U+2212). */
const moins = (texte) => texte.replace("-", "−");
/** 65000 to "650,00 €", -4210 to "−42,10 €". Every amount in a table, a row or a total. */
const euros$1 = (centimes) => moins(EUROS.format(centimes / 100));
const PARIS = "Europe/Paris";
const COURTE = new Intl.DateTimeFormat("fr-FR", {
	day: "2-digit",
	month: "2-digit",
	year: "numeric",
	timeZone: PARIS
});
new Intl.DateTimeFormat("fr-FR", {
	month: "long",
	year: "numeric",
	timeZone: PARIS
});
new Intl.DateTimeFormat("fr-FR", {
	month: "short",
	timeZone: PARIS
});
new Intl.DateTimeFormat("en-CA", {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	timeZone: PARIS
});
/** A bare `YYYY-MM-DD` is a calendar day: read at noon UTC, it's the same day in Paris all year. */
function versDate(valeur) {
	if (typeof valeur === "string" && /^\d{4}-\d{2}(-\d{2})?$/.test(valeur)) return /* @__PURE__ */ new Date(`${valeur.length === 7 ? `${valeur}-01` : valeur}T12:00:00Z`);
	return new Date(valeur);
}
/** "01/01/2026". Every date we write, on a screen, in an email, a PDF or the public site. */
const dateCourte = (valeur) => COURTE.format(versDate(valeur));
new Intl.DateTimeFormat("fr-FR", {
	day: "numeric",
	month: "long",
	year: "numeric",
	timeZone: "UTC"
});
/** `t` is the lease's quarter (1 to 4); `date` the revision day as `YYYY-MM-DD`. */
function reviser(loyer, t, date) {
	if (!loyer || !/^\d{4}-\d{2}-\d{2}$/.test(date) || t < 1 || t > 4) return { etat: "incomplet" };
	const annee = anneeCible(date, t);
	const trimestre = `${annee}-T${t}`;
	const nouveau = INDICES_IRL.get(trimestre);
	const reference = INDICES_IRL.get(`${annee - 1}-T${t}`);
	if (trimestre > DERNIER_IRL.trimestre) return {
		etat: "non_publie",
		trimestre,
		attenduVers: publieVers(annee, t)
	};
	if (!nouveau || !reference) return {
		etat: "trop_ancien",
		trimestre: `${annee - 1}-T${t}`
	};
	const loyerApres = Math.round(loyer * nouveau.valeur / reference.valeur);
	if (loyerApres <= loyer) return {
		etat: "sans_hausse",
		reference,
		nouveau
	};
	return {
		etat: "revise",
		reference,
		nouveau,
		loyerAvant: loyer,
		loyerApres,
		hausse: loyerApres - loyer
	};
}
/** La phrase à reprendre dans le courrier au locataire. */
function phraseCourrier(r, date) {
	return `Conformément à la clause de révision du bail, le loyer hors charges passe de ${euros$1(r.loyerAvant)} à ${euros$1(r.loyerApres)} à compter du ${dateCourte(date)}. L'IRL du ${trimestreLabel(r.nouveau.trimestre)} est de ${indiceTexte(r.nouveau.valeur)}, contre ${indiceTexte(r.reference.valeur)} pour celui du ${trimestreLabel(r.reference.trimestre)} (${euros$1(r.loyerAvant)} × ${indiceTexte(r.nouveau.valeur)} / ${indiceTexte(r.reference.valeur)}). Les charges ne changent pas.`;
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
// src/lib/skills/revision-irl.ts
const LOI = "Loi n° 89-462 du 6 juillet 1989, art. 17-1, I";
const indice = (i) => ({
	trimestre: i.trimestre,
	valeur: i.valeur / 100,
	publieLe: i.publieLe,
	source: i.source
});
lancer({
	nom: "revision-irl",
	resume: `révision annuelle d'un loyer selon l'IRL de l'Insee (série jusqu'au ${DERNIER_IRL.trimestre}, publié le ${DERNIER_IRL.publieLe}).`,
	champs: [
		{
			nom: "loyer",
			type: "euros",
			unite: "€/mois",
			aide: "Loyer hors charges en vigueur."
		},
		{
			nom: "trimestre",
			type: "nombre",
			min: 1,
			max: 4,
			aide: "Trimestre de référence de l'IRL écrit dans le bail, de 1 à 4."
		},
		{
			nom: "date",
			type: "date",
			defaut: null,
			aide: "Date de la révision, AAAA-MM-JJ, en général l'anniversaire du bail. Absent : aujourd'hui."
		}
	],
	exemple: "--loyer 650 --trimestre 2 --date 2026-09-01",
	calculer(e) {
		const t = nombre(e, "trimestre");
		if (!Number.isInteger(t)) throw new SaisieInvalide("--trimestre attend 1, 2, 3 ou 4.");
		const date = typeof e.date === "string" ? e.date : (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
		const r = reviser(centimes(e, "loyer"), t, date);
		if (r.etat === "incomplet") throw new SaisieInvalide("Le loyer doit être supérieur à zéro.");
		const serie = {
			dernierTrimestre: DERNIER_IRL.trimestre,
			publieLe: DERNIER_IRL.publieLe
		};
		return {
			resultat: r.etat === "non_publie" ? {
				etat: r.etat,
				message: `L'IRL du ${r.trimestre} n'est pas encore publié : l'Insee le publie vers le ${r.attenduVers}.`,
				serie
			} : r.etat === "trop_ancien" ? {
				etat: r.etat,
				message: `L'IRL du ${r.trimestre} précède la série embarquée (depuis 2023-T1).`,
				serie
			} : r.etat === "sans_hausse" ? {
				etat: r.etat,
				message: "L'indice n'a pas monté : le loyer reste inchangé.",
				indiceReference: indice(r.reference),
				nouvelIndice: indice(r.nouveau),
				serie
			} : {
				etat: r.etat,
				indiceReference: indice(r.reference),
				nouvelIndice: indice(r.nouveau),
				loyerAvant: euros(r.loyerAvant),
				loyerApres: euros(r.loyerApres),
				hausseMensuelle: euros(r.hausse),
				phraseCourrier: phraseCourrier(r, date),
				serie
			},
			regles: {
				annee: Number(date.slice(0, 4)),
				sources: [LOI, ...r.etat === "revise" || r.etat === "sans_hausse" ? [r.reference.source, r.nouveau.source] : [DERNIER_IRL.source]]
			}
		};
	}
});
export {};
