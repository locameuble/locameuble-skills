#!/usr/bin/env node
// @generated : script compilé depuis le moteur de Locameublé (https://locameuble.fr). Licence MIT.
import process from "node:process";
// src/lib/site/tools/calcul-rentabilite-locative/rentabilite.ts
/** La mensualité d'un prêt amortissable à taux fixe, hors assurance emprunteur. */
function mensualite(capital, taux, annees) {
	const n = Math.round(annees * 12);
	if (capital <= 0 || n <= 0) return 0;
	const i = taux / 100 / 12;
	if (i === 0) return Math.round(capital / n);
	return Math.round(capital * i / (1 - (1 + i) ** -n));
}
function rentabilite(s) {
	const cout = s.prix + s.notaire + s.travaux + s.mobilier;
	const loyersAnnuels = s.loyerMensuel * 12;
	const semaines = Math.min(Math.max(s.semainesVacance, 0), 52);
	const loyersEncaisses = Math.round(loyersAnnuels * (52 - semaines) / 52);
	const depenses = s.charges + s.taxeFonciere + s.assurance;
	const m = mensualite(s.emprunt, s.taux, s.annees);
	return {
		cout,
		loyersAnnuels,
		loyersEncaisses,
		depenses,
		mensualite: m,
		rendementBrut: cout > 0 ? loyersAnnuels / cout : null,
		rendementNet: cout > 0 ? (loyersEncaisses - depenses) / cout : null,
		cashFlowMensuel: Math.round((loyersEncaisses - depenses - m * 12) / 12)
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
// src/lib/skills/rentabilite.ts
const pourcent = (ratio) => ratio === null ? null : Math.round(ratio * 1e4) / 100;
lancer({
	nom: "rentabilite",
	resume: "rendement brut, rendement net et cash-flow mensuel avant impôt d'une location.",
	champs: [
		{
			nom: "prix",
			type: "euros",
			unite: "€",
			aide: "Prix d'achat du logement."
		},
		{
			nom: "notaire",
			type: "euros",
			unite: "€",
			defaut: 0,
			aide: "Frais de notaire."
		},
		{
			nom: "travaux",
			type: "euros",
			unite: "€",
			defaut: 0,
			aide: "Travaux à l'achat."
		},
		{
			nom: "mobilier",
			type: "euros",
			unite: "€",
			defaut: 0,
			aide: "Mobilier."
		},
		{
			nom: "loyerMensuel",
			type: "euros",
			unite: "€/mois",
			aide: "Loyer mensuel hors charges."
		},
		{
			nom: "semainesVacance",
			type: "nombre",
			unite: "semaines/an",
			min: 0,
			max: 52,
			defaut: 0,
			aide: "Semaines sans locataire par an."
		},
		{
			nom: "charges",
			type: "euros",
			unite: "€/an",
			defaut: 0,
			aide: "Charges de copropriété non récupérées."
		},
		{
			nom: "taxeFonciere",
			type: "euros",
			unite: "€/an",
			defaut: 0,
			aide: "Taxe foncière."
		},
		{
			nom: "assurance",
			type: "euros",
			unite: "€/an",
			defaut: 0,
			aide: "Assurance propriétaire non occupant."
		},
		{
			nom: "emprunt",
			type: "euros",
			unite: "€",
			defaut: 0,
			aide: "Capital emprunté."
		},
		{
			nom: "taux",
			type: "nombre",
			unite: "%/an",
			min: 0,
			max: 30,
			defaut: 0,
			aide: "Taux nominal du prêt, hors assurance."
		},
		{
			nom: "annees",
			type: "nombre",
			unite: "ans",
			min: 0,
			max: 40,
			defaut: 0,
			aide: "Durée du prêt."
		}
	],
	exemple: "--prix 180000 --notaire 14000 --mobilier 6000 --loyer-mensuel 800 --semaines-vacance 2 --taxe-fonciere 900 --emprunt 160000 --taux 3.6 --annees 20",
	calculer(e) {
		const r = rentabilite({
			prix: centimes(e, "prix"),
			notaire: centimes(e, "notaire"),
			travaux: centimes(e, "travaux"),
			mobilier: centimes(e, "mobilier"),
			loyerMensuel: centimes(e, "loyerMensuel"),
			semainesVacance: nombre(e, "semainesVacance"),
			charges: centimes(e, "charges"),
			taxeFonciere: centimes(e, "taxeFonciere"),
			assurance: centimes(e, "assurance"),
			emprunt: centimes(e, "emprunt"),
			taux: nombre(e, "taux"),
			annees: nombre(e, "annees")
		});
		return {
			resultat: {
				coutTotal: euros(r.cout),
				loyersAnnuels: euros(r.loyersAnnuels),
				loyersEncaisses: euros(r.loyersEncaisses),
				depensesAnnuelles: euros(r.depenses),
				mensualite: euros(r.mensualite),
				rendementBrut: pourcent(r.rendementBrut),
				rendementNet: pourcent(r.rendementNet),
				unite: "rendements en % du coût total",
				cashFlowMensuel: euros(r.cashFlowMensuel)
			},
			regles: {
				annee: null,
				sources: []
			}
		};
	}
});
export {};
