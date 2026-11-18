#!/usr/bin/env node
// @generated : script compilé depuis le moteur de Locameublé (https://locameuble.fr). Licence MIT.
import process from "node:process";
// src/lib/site/tools/liste-mobilier-obligatoire/liste.ts
const DECRET_URL = "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000030967884";
const PRIX_RELEVE_LE = "10 nov. 2026";
const PRIX_MARCHAND = "Cdiscount";
const OBLIGATOIRES = [
	{
		id: "literie",
		numero: 1,
		libelle: "Literie comprenant couette ou couverture",
		court: "Literie",
		precision: "Un lit prêt à dormir pour chaque couchage annoncé : matelas, sommier ou cadre, oreiller, et une couette ou une couverture.",
		parChambre: true,
		prixLogement: 19070,
		prixChambre: 16096
	},
	{
		id: "occultation",
		numero: 2,
		libelle: "Dispositif d'occultation des fenêtres dans les pièces destinées à être utilisées comme chambre à coucher",
		court: "Occultation des chambres",
		precision: "Volets, stores ou rideaux occultants qui font le noir dans chaque pièce où l'on dort, séjour d'un studio compris.",
		parChambre: true,
		prixLogement: 2862,
		prixChambre: 1980
	},
	{
		id: "plaques",
		numero: 3,
		libelle: "Plaques de cuisson",
		court: "Plaques de cuisson",
		precision: "Au gaz, électriques ou à induction, en état de marche.",
		parChambre: false,
		prixLogement: 13499
	},
	{
		id: "four",
		numero: 4,
		libelle: "Four ou four à micro-ondes",
		court: "Four ou micro-ondes",
		precision: "L'un ou l'autre suffit : un micro-ondes seul répond au décret.",
		parChambre: false,
		prixLogement: 8999
	},
	{
		id: "froid",
		numero: 5,
		libelle: "Réfrigérateur et congélateur ou, au minimum, un réfrigérateur doté d'un compartiment permettant de disposer d'une température inférieure ou égale à -\xA06 °C",
		court: "Réfrigérateur et congélation",
		precision: "Un réfrigérateur avec congélateur, ou un réfrigérateur dont le compartiment froid descend à −6 °C ou moins (marqué d'une étoile au moins).",
		parChambre: false,
		prixLogement: 26999
	},
	{
		id: "vaisselle",
		numero: 6,
		libelle: "Vaisselle nécessaire à la prise des repas",
		court: "Vaisselle",
		precision: "Assiettes, bols, verres et couverts pour chaque occupant prévu.",
		parChambre: false,
		prixLogement: 7528
	},
	{
		id: "ustensiles",
		numero: 7,
		libelle: "Ustensiles de cuisine",
		court: "Ustensiles de cuisine",
		precision: "Casseroles, poêle, et de quoi préparer un repas : couteau, planche, spatule, louche.",
		parChambre: false,
		prixLogement: 10898
	},
	{
		id: "table",
		numero: 8,
		libelle: "Table et sièges",
		court: "Table et sièges",
		precision: "Une table et assez de sièges pour les occupants prévus.",
		parChambre: false,
		prixLogement: 19990
	},
	{
		id: "etageres",
		numero: 9,
		libelle: "Etagères de rangement",
		court: "Étagères de rangement",
		precision: "Des étagères, un placard ou un meuble ouvert pour ranger ses affaires.",
		parChambre: true,
		prixLogement: 4691,
		prixChambre: 4691
	},
	{
		id: "luminaires",
		numero: 10,
		libelle: "Luminaires",
		court: "Luminaires",
		precision: "Une lumière dans chaque pièce : plafonnier, suspension ou lampe, ampoule comprise.",
		parChambre: true,
		prixLogement: 8546,
		prixChambre: 4548,
		prixCommun: 5997
	},
	{
		id: "entretien",
		numero: 11,
		libelle: "Matériel d'entretien ménager adapté aux caractéristiques du logement",
		court: "Matériel d'entretien",
		precision: "Aspirateur ou balai, seau et serpillière, choisis pour les sols du logement.",
		parChambre: false,
		prixLogement: 9181
	}
];
const USUELS = [
	{
		id: "armoire",
		libelle: "Armoire ou penderie",
		court: "Armoire",
		precision: "Pour suspendre et plier les vêtements.",
		parChambre: true,
		prixLogement: 20499,
		prixChambre: 20499
	},
	{
		id: "chevet",
		libelle: "Table de chevet",
		court: "Table de chevet",
		precision: "Une à côté de chaque lit.",
		parChambre: true,
		prixLogement: 3999,
		prixChambre: 3999
	},
	{
		id: "bureau",
		libelle: "Bureau et chaise",
		court: "Bureau et chaise",
		precision: "Attendu en colocation et par qui travaille de chez soi.",
		parChambre: true,
		prixLogement: 14221,
		prixChambre: 14221
	},
	{
		id: "canape",
		libelle: "Canapé",
		court: "Canapé",
		precision: "Dans le séjour, souvent convertible dans un T2.",
		parChambre: false,
		prixLogement: 65999
	},
	{
		id: "lave-linge",
		libelle: "Lave-linge",
		court: "Lave-linge",
		precision: "Le décret ne le cite pas, les locataires le demandent souvent.",
		parChambre: false
	}
];
const ARTICLES = [...OBLIGATOIRES, ...USUELS];
/** A flat share's bedroom count, kept inside 2 to 8 whatever was typed. */
const chambresBornees = (n) => Number.isFinite(n) ? Math.min(8, Math.max(2, Math.round(n))) : 2;
const colocation = (l) => l.type === "colocation" ? chambresBornees(l.chambres) : 0;
/** The lowest basket price in cents for this flat, or null when the baskets don't price the item. */
function prixPour(a, l) {
	const n = colocation(l);
	if (n && a.prixChambre !== void 0) return a.prixChambre * n + (a.prixCommun ?? 0);
	return a.prixLogement ?? null;
}
const manquantsDe = (articles, s, l) => articles.filter((a) => !s[a.id]?.present).map((article) => ({
	article,
	prix: prixPour(article, l)
}));
const somme = (lignes) => lignes.reduce((t, m) => t + (m.prix ?? 0), 0);
function bilan(s, l) {
	const manquants = manquantsDe(OBLIGATOIRES, s, l);
	const usuelsManquants = manquantsDe(USUELS, s, l);
	const budget = somme(manquants);
	return {
		total: OBLIGATOIRES.length,
		presents: OBLIGATOIRES.length - manquants.length,
		manquants,
		usuelsManquants,
		budget,
		budgetAvecUsuels: budget + somme(usuelsManquants)
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
const texte = (e, cle) => lu(e, cle, (v) => typeof v === "string", "un texte");
const liste = (e, cle) => lu(e, cle, Array.isArray, "une liste");
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
// src/lib/skills/mobilier.ts
const TYPES = [
	"studio",
	"t2",
	"colocation"
];
const ligne = ({ article, prix }) => ({
	id: article.id,
	...article.numero === void 0 ? {} : { numeroDecret: article.numero },
	libelle: article.libelle,
	precision: article.precision,
	prixIndicatif: prix === null ? null : euros(prix)
});
lancer({
	nom: "mobilier",
	resume: "vérifie le mobilier obligatoire d'un meublé (décret n° 2015-981, 11 éléments) et chiffre ce qui manque.",
	champs: [
		{
			nom: "type",
			type: "texte",
			choix: TYPES,
			defaut: "studio",
			aide: "Type de logement."
		},
		{
			nom: "chambres",
			type: "nombre",
			min: 2,
			max: 8,
			defaut: 2,
			aide: "Nombre de chambres, pour une colocation seulement."
		},
		{
			nom: "presents",
			type: "liste",
			choix: ARTICLES.map((a) => a.id),
			defaut: [],
			aide: "Éléments déjà dans le logement, séparés par des virgules. Absent : la liste complète, rien de coché."
		}
	],
	exemple: "--type t2 --presents literie,occultation,plaques,four,froid,vaisselle,table",
	calculer(e) {
		const presents = new Set(liste(e, "presents"));
		const logement = {
			type: choix(e, "type", TYPES),
			chambres: chambresBornees(nombre(e, "chambres"))
		};
		const b = bilan(Object.fromEntries(ARTICLES.map((a) => [a.id, {
			present: presents.has(a.id),
			quantite: 1,
			etat: "Bon état"
		}])), logement);
		return {
			resultat: {
				conforme: b.manquants.length === 0,
				obligatoiresPresents: `${b.presents} sur ${b.total}`,
				manquants: b.manquants.map(ligne),
				usuelsManquants: b.usuelsManquants.map(ligne),
				budgetManquants: euros(b.budget),
				budgetAvecUsuels: euros(b.budgetAvecUsuels),
				prix: `Paniers les moins chers relevés chez ${PRIX_MARCHAND} le ${PRIX_RELEVE_LE}, à titre indicatif.`,
				identifiantsObligatoires: OBLIGATOIRES.map((a) => a.id)
			},
			regles: {
				annee: 2026,
				sources: [`Décret n° 2015-981 du 31 juillet 2015, art. 2 : ${DECRET_URL}`]
			}
		};
	}
});
export {};
