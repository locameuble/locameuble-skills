#!/usr/bin/env node
// @generated : script compilé depuis le moteur de Locameublé (https://locameuble.fr). Licence MIT.
import process from "node:process";
// src/lib/fiscal/lmp.ts
/** Contrôle bloquant levé quand une entrée du test manque. */
const CONTROLE_ENTREE_LMP = "LM-C-050";
const BOFIP_LMP = "https://bofip.impots.gouv.fr/doctrine/BOI-BIC-CHAMP-40-10";
const BOFIP_DEFICITS = "https://bofip.impots.gouv.fr/doctrine/BOI-BIC-CHAMP-40-20";
const NOTICE_2042_C_PRO = "https://www.impots.gouv.fr/sites/default/files/formulaires/2042/2026/2042_5474.pdf";
const JOUR_MS = 864e5;
const REGLE_SEUIL = "Art. 155 IV 2 CGI : les recettes de location meublée du foyer excèdent le seuil (BOFiP BOI-BIC-CHAMP-40-10 § 110 et 130).";
const REGLE_PRORATA = "Recettes ramenées à douze mois, jours de location sur 365, pour un bien acquis dans l'année ou en cessation totale (BOFiP BOI-BIC-CHAMP-40-10 § 170 et 200).";
const REGLE_PREPONDERANCE = "Art. 155 IV 2 CGI : les recettes excèdent les revenus nets d'activité du foyer, salaires et pensions, BIC hors location meublée, BA, BNC, art. 62 (BOFiP BOI-BIC-CHAMP-40-10 § 150 et 160).";
const REGLE_NON_RESIDENT_FRANCE = "Non-résident, revenus 2025 et antérieurs : seuls comptent les revenus imposables en France (BOFiP BOI-BIC-CHAMP-40-10 § 165, version du 5 février 2020).";
const REGLE_NON_RESIDENT_ETAT = "Non-résident, revenus 2026 et suivants : comptent les revenus imposables en France et également les revenus nets d'activité effectivement imposés dans l'État de résidence, sauf ceux qu'une disposition particulière y exonère (art. 155 IV 2 CGI, loi n° 2026-103 du 19 février 2026, art. 53 ; BOFiP BOI-BIC-CHAMP-40-10 § 165, version du 15 avril 2026).";
const REGLE_SSI_LMP = "Art. L611-1 6° CSS : le loueur en meublé professionnel relève des travailleurs indépendants.";
const REGLE_SSI_PASSAGE = "Art. L611-1 6° CSS : au-delà du seuil de recettes, la location à une clientèle de passage relève des travailleurs indépendants.";
const REGLE_SSI_AUCUNE = "Art. L611-1 6° CSS : ni LMP ni clientèle de passage au-delà du seuil, pas d'affiliation aux travailleurs indépendants.";
const REGLE_DEFICIT_LMP = "Art. 156 I CGI : le déficit LMP s'impute sur le revenu global (BOFiP BOI-BIC-CHAMP-40-20 § 350).";
const REGLE_DEFICIT_LMNP = "Art. 156 I 1° ter CGI : le déficit LMNP ne s'impute que sur des bénéfices LMNP (BOFiP BOI-BIC-CHAMP-40-20 § 240).";
const CASES = {
	lmp: {
		1: {
			benefice: "5KC",
			deficit: "5KF"
		},
		2: {
			benefice: "5LC",
			deficit: "5LF"
		}
	},
	lmnp: {
		1: {
			benefice: "5NA",
			deficit: "5NY"
		},
		2: {
			benefice: "5OA",
			deficit: "5OY"
		}
	},
	"lmnp-ssi": {
		1: {
			benefice: "5NM",
			deficit: "5WE"
		},
		2: {
			benefice: "5OM",
			deficit: "5XE"
		}
	}
};
const REGLE_CASES = {
	lmp: "2042 C PRO, BIC professionnels, locations meublées professionnelles comprises : bénéfice 5KC, 5LC ; déficit 5KF, 5LF.",
	lmnp: "2042 C PRO, locations meublées non professionnelles au réel : bénéfice 5NA, 5OA ; déficit 5NY, 5OY.",
	"lmnp-ssi": "2042 C PRO, locations meublées non professionnelles soumises aux cotisations sociales : bénéfice 5NM, 5OM ; déficit 5WE, 5XE."
};
const CLES_AUTRES_REVENUS = [
	"salairesEtPensions",
	"bicHorsLocationMeublee",
	"beneficesAgricoles",
	"beneficesNonCommerciaux",
	"remunerationsArticle62"
];
const estCentimes = (v) => typeof v === "number" && Number.isSafeInteger(v);
function dateDeLAnnee(v, annee) {
	if (typeof v !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(v)) return false;
	const d = /* @__PURE__ */ new Date(`${v}T00:00:00Z`);
	return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === v && d.getUTCFullYear() === annee;
}
const sousRegleEtat = (entree, regles) => entree?.residentFiscal === false && regles?.autresRevenusNonResident === "imposes-etat-residence";
/** `quoi` nomme ce qui manque en clair : le chemin du champ reste dans `champ`, jamais sous les yeux de la personne. */
function entreesManquantes(entree, regles) {
	const manques = [];
	const montant = (v, champ, quoi) => {
		if (!estCentimes(v)) manques.push({
			champ,
			quoi
		});
	};
	const ouiNon = (v, champ, quoi) => {
		if (typeof v !== "boolean") manques.push({
			champ,
			quoi
		});
	};
	if (!estCentimes(regles?.seuilRecettes) || regles.seuilRecettes <= 0) manques.push({
		champ: "regles.seuilRecettes",
		quoi: "le seuil de recettes de l'année"
	});
	if (!["imposables-en-france", "imposes-etat-residence"].includes(regles?.autresRevenusNonResident)) manques.push({
		champ: "regles.autresRevenusNonResident",
		quoi: "la règle non-résident de l'année"
	});
	if (!Number.isSafeInteger(entree?.annee)) manques.push({
		champ: "annee",
		quoi: "l'année"
	});
	const exploitants = entree?.exploitants;
	if (!Array.isArray(exploitants) || exploitants.length < 1 || exploitants.length > 2) manques.push({
		champ: "exploitants",
		quoi: "un ou deux exploitants"
	});
	else {
		const declarants = exploitants.map((e) => e?.declarant);
		if (declarants.some((d) => d !== 1 && d !== 2) || new Set(declarants).size !== declarants.length) manques.push({
			champ: "exploitants.declarant",
			quoi: "le rang de déclarant, 1 ou 2, une fois chacun"
		});
		exploitants.forEach((e, i) => {
			if (!Array.isArray(e?.locations)) {
				manques.push({
					champ: `exploitants[${i}].locations`,
					quoi: "la liste des biens loués"
				});
				return;
			}
			e.locations.forEach((l, j) => {
				const champ = `exploitants[${i}].locations[${j}]`;
				if (typeof l?.bienId !== "string" || l.bienId === "") manques.push({
					champ: `${champ}.bienId`,
					quoi: "le bien loué"
				});
				montant(l?.recettes, `${champ}.recettes`, "les recettes du bien");
				ouiNon(l?.clienteleDePassage, `${champ}.clienteleDePassage`, "le type de location du bien");
				for (const cle of ["debut", "fin"]) if (l?.[cle] !== null && !dateDeLAnnee(l?.[cle], entree.annee)) manques.push({
					champ: `${champ}.${cle}`,
					quoi: `une date de ${cle === "debut" ? "début" : "fin"} de location en ${entree.annee}, ou aucune`
				});
				if (typeof l?.debut === "string" && typeof l?.fin === "string" && l.debut > l.fin) manques.push({
					champ: `${champ}.fin`,
					quoi: "une date de fin après le début"
				});
			});
		});
	}
	ouiNon(entree?.cessationTotale, "cessationTotale", "la cessation d'activité");
	ouiNon(entree?.residentFiscal, "residentFiscal", "votre résidence fiscale");
	const autres = entree?.autresRevenus;
	for (const cle of CLES_AUTRES_REVENUS) montant(autres?.[cle], `autresRevenus.${cle}`, "les autres revenus d'activité du foyer fiscal");
	if (sousRegleEtat(entree, regles)) {
		const etranger = entree.revenusActiviteEtatResidence;
		montant(etranger, "revenusActiviteEtatResidence", "les revenus d'activité dans votre pays de résidence");
		if (estCentimes(etranger) && etranger !== 0) ouiNon(entree.revenusEtatResidenceImposes, "revenusEtatResidenceImposes", "si ces revenus sont imposés dans votre pays de résidence");
	}
	return manques;
}
/** Recettes d'un bien ramenées à douze mois quand elles ne couvrent qu'une partie de l'année. */
function recettesAnnuelles(l, annee, cessationTotale) {
	const recettes = l.recettes ?? 0;
	const fin = cessationTotale ? l.fin : null;
	if (l.debut === null && fin === null) return recettes;
	const debutMs = Date.parse(`${l.debut ?? `${annee}-01-01`}T00:00:00Z`);
	const finMs = Date.parse(`${fin ?? `${annee}-12-31`}T00:00:00Z`);
	return recettes * 365 / ((finMs - debutMs) / JOUR_MS + 1);
}
function testerLmp(entree, regles) {
	const manques = entreesManquantes(entree, regles);
	if (manques.length > 0) return {
		statut: "indetermine",
		controles: manques.map(({ champ, quoi }) => ({
			id: CONTROLE_ENTREE_LMP,
			gravite: "bloquant",
			champ,
			message: `Statut LMP ou LMNP indéterminé : renseignez ${quoi}.`,
			ref: BOFIP_LMP
		}))
	};
	const { annee, exploitants, autresRevenus } = entree;
	const cessationTotale = entree.cessationTotale === true;
	const locations = exploitants.flatMap((e) => e.locations);
	const sourcesBiens = locations.map((l) => `bien:${l.bienId}`);
	const recettes = Math.round(locations.reduce((s, l) => s + recettesAnnuelles(l, annee, cessationTotale), 0));
	const recettesPassage = Math.round(locations.filter((l) => l.clienteleDePassage).reduce((s, l) => s + recettesAnnuelles(l, annee, cessationTotale), 0));
	const regleEtat = sousRegleEtat(entree, regles);
	const autres = CLES_AUTRES_REVENUS.reduce((s, cle) => s + (autresRevenus[cle] ?? 0), 0) + (regleEtat && entree.revenusEtatResidenceImposes === true ? entree.revenusActiviteEtatResidence ?? 0 : 0);
	const regleAutres = entree.residentFiscal ? REGLE_PREPONDERANCE : `${REGLE_PREPONDERANCE} ${regleEtat ? REGLE_NON_RESIDENT_ETAT : REGLE_NON_RESIDENT_FRANCE}`;
	const sourcesAutres = [...CLES_AUTRES_REVENUS.map((cle) => `foyer:${cle}`), ...regleEtat ? ["foyer:revenusActiviteEtatResidence", "foyer:revenusEtatResidenceImposes"] : []];
	const seuilDepasse = recettes > regles.seuilRecettes;
	const preponderantes = recettes > autres;
	const statut = seuilDepasse && preponderantes ? "lmp" : "lmnp";
	const lmp = statut === "lmp";
	const ssiPassage = !lmp && recettesPassage > regles.seuilRecettes;
	return {
		statut,
		decision: {
			regle: lmp ? "Art. 155 IV 2 CGI : recettes au-delà du seuil et des autres revenus d'activité du foyer, location meublée professionnelle." : "Art. 155 IV 2 CGI : une des deux conditions manque, location meublée non professionnelle.",
			ref: BOFIP_LMP,
			sources: [...sourcesBiens, ...sourcesAutres]
		},
		recettesRetenues: {
			valeur: recettes,
			trace: {
				regle: `${REGLE_SEUIL} ${REGLE_PRORATA}`,
				ref: BOFIP_LMP,
				sources: sourcesBiens
			}
		},
		autresRevenusActivite: {
			valeur: autres,
			trace: {
				regle: regleAutres,
				ref: BOFIP_LMP,
				sources: sourcesAutres
			}
		},
		seuilDepasse: {
			valeur: seuilDepasse,
			trace: {
				regle: REGLE_SEUIL,
				ref: BOFIP_LMP,
				sources: [...sourcesBiens, "regles:seuilRecettes"]
			}
		},
		recettesPreponderantes: {
			valeur: preponderantes,
			trace: {
				regle: regleAutres,
				ref: BOFIP_LMP,
				sources: [...sourcesBiens, ...sourcesAutres]
			}
		},
		deficitSurRevenuGlobal: {
			valeur: lmp,
			trace: {
				regle: lmp ? REGLE_DEFICIT_LMP : REGLE_DEFICIT_LMNP,
				ref: BOFIP_DEFICITS,
				sources: ["statut"]
			}
		},
		declarants: exploitants.map((e) => {
			const passage = e.locations.some((l) => l.clienteleDePassage);
			const ssi = lmp || ssiPassage && passage;
			const regime = lmp ? "lmp" : ssi ? "lmnp-ssi" : "lmnp";
			const sources = e.locations.map((l) => `bien:${l.bienId}`);
			return {
				declarant: e.declarant,
				ssi: {
					valeur: ssi,
					trace: {
						regle: lmp ? REGLE_SSI_LMP : ssi ? REGLE_SSI_PASSAGE : REGLE_SSI_AUCUNE,
						sources: ["statut", ...sources]
					}
				},
				cases: {
					valeur: CASES[regime][e.declarant],
					trace: {
						regle: REGLE_CASES[regime],
						ref: NOTICE_2042_C_PRO,
						sources: ["statut", ...sources]
					}
				}
			};
		}),
		controles: []
	};
}
// src/lib/fiscal/regles/articles.ts
const BIC_MEUBLE = "CGI art. 35, I-5° bis";
const FRAIS_GENERAUX = "CGI art. 39, 1-1°";
const IMPOTS = "CGI art. 39, 1-4°";
const AMORTISSEMENT = "CGI art. 39, 1-2°";
const FRAIS_EMPRUNT = "CGI art. 39, 1-1° quater";
const FRAIS_ACQUISITION = "CGI ann. III, art. 38 quinquies";
const PETIT_EQUIPEMENT = "BOI-BIC-CHG-20-30-10 § 20 et 30";
function recette(id, libelle, groupe, comptePcg, ligne, ref, options = {}) {
	const { loyer = groupe === "loyers", rembourseCharge } = options;
	return {
		nature: "recette",
		id,
		libelle,
		groupe,
		comptePcg,
		ligne,
		ref,
		loyer,
		rembourseCharge
	};
}
function charge(id, libelle, groupe, comptePcg, ligne, ref, options = {}) {
	return {
		nature: "charge",
		id,
		libelle,
		groupe,
		comptePcg,
		ligne,
		ref,
		...options
	};
}
function immobilisation(id, libelle, groupe, comptePcg, ligne, amortissement, options = { premierEquipement: false }) {
	return {
		nature: "immobilisation",
		id,
		libelle,
		groupe,
		comptePcg,
		ligne,
		amortissement,
		ref: options.ref ?? AMORTISSEMENT,
		premierEquipement: options.premierEquipement,
		siCharge: options.siCharge
	};
}
const ans = (min, defaut, max) => ({
	min,
	defaut,
	max
});
const premier = {
	premierEquipement: true,
	ref: PETIT_EQUIPEMENT
};
[.../* @__PURE__ */ new Set(["provision-charges", "forfait-charges"])];
const ARTICLES$1 = [
	recette("loyer-longue-duree", "Loyers hors charges", "loyers", "706", "2033-B/218", BIC_MEUBLE),
	recette("loyer-courte-duree", "Loyers de courte durée (Airbnb, Booking, Abritel), montant brut", "loyers", "706", "2033-B/218", BIC_MEUBLE),
	recette("provision-charges", "Provisions pour charges appelées", "loyers", "7088", "2033-B/218"),
	recette("forfait-charges", "Forfait de charges", "loyers", "7088", "2033-B/218"),
	recette("teom-recuperee", "Taxe d'ordures ménagères récupérée auprès du locataire", "loyers", "7088", "2033-B/218"),
	recette("menage-encaisse", "Frais de ménage encaissés", "loyers", "706", "2033-B/218"),
	recette("prestations-annexes", "Prestations annexes facturées (linge, petit-déjeuner)", "loyers", "706", "2033-B/218"),
	recette("refacturation-frais", "Frais refacturés au locataire", "loyers", "7088", "2033-B/218"),
	recette("indemnite-loyers-impayes", "Indemnités de garantie des loyers impayés", "autres-recettes", "7587", "2033-B/230", "BOI-BIC-CHAMP-40-10 § 110", { loyer: true }),
	recette("indemnite-sinistre", "Indemnités d'assurance après sinistre", "autres-recettes", "7587", "2033-B/230", "CGI art. 39 C, II-2 ; BOI-BIC-AMT-20-40-10-20 § 60", { rembourseCharge: true }),
	recette("retenue-depot-garantie", "Retenue sur dépôt de garantie", "autres-recettes", "758", "2033-B/230"),
	recette("interets-crediteurs", "Intérêts créditeurs du compte de l'activité", "autres-recettes", "768", "2033-B/280"),
	recette("prix-cession", "Prix de cession d'une immobilisation", "autres-recettes", "757", "2033-B/230"),
	charge("taxe-fonciere", "Taxe foncière", "impots-taxes", "63512", "2033-B/244", "CGI art. 1380"),
	charge("teom", "Taxe d'enlèvement des ordures ménagères", "impots-taxes", "63512", "2033-B/244", "CGI art. 1520"),
	charge("cfe", "Cotisation foncière des entreprises", "impots-taxes", "63511", "2033-B/244", "CGI art. 1447 et 1647 D ; hors plafond ARD, BOI-BIC-AMT-20-40-10-20 § 70", {
		dont: "2033-B/243",
		fraisGeneraux: true
	}),
	charge("taxe-habitation-residence-secondaire", "Taxe d'habitation sur un meublé non loué au 1er janvier", "impots-taxes", "63518", "2033-B/244", "CGI art. 1407"),
	charge("taxe-logements-vacants", "Taxe sur les logements vacants", "impots-taxes", "63518", "2033-B/244", "CGI art. 232"),
	charge("taxe-sejour-forfaitaire", "Taxe de séjour forfaitaire à la charge du loueur", "impots-taxes", "63518", "2033-B/244", "CGCT art. L2333-40"),
	charge("taxe-balayage", "Taxe de balayage", "impots-taxes", "63518", "2033-B/244", "CGI art. 1528"),
	charge("droits-enregistrement", "Droits d'enregistrement et de timbre", "impots-taxes", "6354", "2033-B/244", IMPOTS),
	charge("cotisations-ssi", "Cotisations sociales personnelles (SSI)", "cotisations", "646", "2033-B/252", "CGI art. 154 bis", {
		dont: "2033-B/380",
		fraisGeneraux: true
	}),
	charge("assurance-pno", "Assurance propriétaire non occupant", "assurances", "6161", "2033-B/242", FRAIS_GENERAUX),
	charge("assurance-gli", "Assurance garantie des loyers impayés", "assurances", "6168", "2033-B/242", FRAIS_GENERAUX),
	charge("assurance-emprunteur", "Assurance emprunteur", "assurances", "6168", "2033-B/242", FRAIS_GENERAUX),
	charge("assurance-multirisque", "Assurance multirisque du logement", "assurances", "6161", "2033-B/242", FRAIS_GENERAUX),
	charge("protection-juridique", "Protection juridique", "assurances", "6168", "2033-B/242", FRAIS_GENERAUX),
	charge("charges-copropriete", "Charges de copropriété", "copropriete", "614", "2033-B/242", FRAIS_GENERAUX),
	charge("travaux-copropriete", "Quote-part de travaux d'entretien votés en copropriété", "copropriete", "614", "2033-B/242", FRAIS_GENERAUX, { immobiliserVers: "travaux-amenagements" }),
	charge("entretien-reparations", "Entretien et réparations du logement", "entretien", "6152", "2033-B/242", FRAIS_GENERAUX, { immobiliserVers: "travaux-amenagements" }),
	charge("menage-blanchisserie", "Ménage et blanchisserie par un prestataire", "entretien", "611", "2033-B/242", FRAIS_GENERAUX),
	charge("espaces-verts", "Entretien des espaces verts", "entretien", "6152", "2033-B/242", FRAIS_GENERAUX),
	charge("produits-entretien", "Produits d'entretien et consommables", "entretien", "6063", "2033-B/242", FRAIS_GENERAUX),
	charge("petit-materiel", "Petit mobilier et matériel de 500 € HT ou moins", "entretien", "6063", "2033-B/242", PETIT_EQUIPEMENT, { immobiliserVers: "mobilier" }),
	charge("petit-electromenager", "Petit électroménager de 500 € HT ou moins", "entretien", "6063", "2033-B/242", PETIT_EQUIPEMENT, { immobiliserVers: "electromenager" }),
	charge("linge-vaisselle", "Linge de maison et vaisselle", "entretien", "6063", "2033-B/242", PETIT_EQUIPEMENT),
	charge("electricite", "Électricité", "energie-abonnements", "6061", "2033-B/242", FRAIS_GENERAUX),
	charge("gaz", "Gaz", "energie-abonnements", "6061", "2033-B/242", FRAIS_GENERAUX),
	charge("eau", "Eau", "energie-abonnements", "6061", "2033-B/242", FRAIS_GENERAUX),
	charge("combustible", "Fioul, bois ou granulés", "energie-abonnements", "6061", "2033-B/242", FRAIS_GENERAUX),
	charge("internet", "Abonnement internet du logement", "energie-abonnements", "626", "2033-B/242", FRAIS_GENERAUX),
	charge("television", "Abonnement télévision du logement", "energie-abonnements", "626", "2033-B/242", FRAIS_GENERAUX),
	charge("honoraires-comptables", "Honoraires comptables et logiciel de déclaration", "honoraires", "6226", "2033-B/242", FRAIS_GENERAUX, { fraisGeneraux: true }),
	charge("adhesion-oga", "Adhésion à un organisme de gestion agréé", "honoraires", "6281", "2033-B/242", FRAIS_GENERAUX, { fraisGeneraux: true }),
	charge("gestion-locative", "Frais de gestion locative d'agence", "honoraires", "6226", "2033-B/242", FRAIS_GENERAUX),
	charge("conciergerie", "Commission de conciergerie", "honoraires", "6222", "2033-B/242", FRAIS_GENERAUX),
	charge("commission-plateforme", "Commissions Airbnb, Booking, Abritel", "honoraires", "6222", "2033-B/242", FRAIS_GENERAUX),
	charge("recherche-locataire", "Recherche de locataire et état des lieux", "honoraires", "6222", "2033-B/242", FRAIS_GENERAUX),
	charge("diagnostics", "Diagnostics immobiliers (DPE, électricité, gaz)", "honoraires", "6226", "2033-B/242", FRAIS_GENERAUX),
	charge("frais-contentieux", "Frais d'actes et de contentieux (commissaire de justice)", "honoraires", "6227", "2033-B/242", FRAIS_GENERAUX),
	charge("honoraires-conseil", "Honoraires d'avocat ou de conseil", "honoraires", "6226", "2033-B/242", FRAIS_GENERAUX),
	charge("courtage-pret", "Honoraires de courtier en crédit", "honoraires", "6226", "2033-B/242", FRAIS_EMPRUNT),
	charge("annonces", "Annonces et publicité", "honoraires", "6231", "2033-B/242", FRAIS_GENERAUX),
	charge("frais-postaux", "Frais postaux et télécommunications", "honoraires", "626", "2033-B/242", FRAIS_GENERAUX),
	charge("documentation", "Documentation", "honoraires", "6181", "2033-B/242", FRAIS_GENERAUX, { fraisGeneraux: true }),
	charge("loyer-sous-location", "Loyer versé pour un logement sous-loué", "locations", "6132", "2033-B/242", FRAIS_GENERAUX),
	charge("location-parking", "Location d'un parking ou d'un garage", "locations", "6132", "2033-B/242", FRAIS_GENERAUX),
	charge("location-mobilier", "Location de mobilier ou de matériel", "locations", "6135", "2033-B/242", FRAIS_GENERAUX),
	charge("frais-kilometriques", "Frais kilométriques", "deplacements", "6251", "2033-B/242", FRAIS_GENERAUX),
	charge("transports", "Train, avion, péage et stationnement", "deplacements", "6251", "2033-B/242", FRAIS_GENERAUX),
	charge("hebergement-repas", "Hôtel et repas en déplacement", "deplacements", "6256", "2033-B/242", FRAIS_GENERAUX),
	charge("frais-bancaires", "Frais de tenue de compte", "banque-emprunt", "627", "2033-B/242", FRAIS_GENERAUX),
	charge("frais-dossier-pret", "Frais de dossier d'emprunt", "banque-emprunt", "627", "2033-B/242", FRAIS_EMPRUNT),
	charge("frais-garantie-pret", "Frais de garantie d'emprunt (caution, hypothèque)", "banque-emprunt", "627", "2033-B/242", FRAIS_EMPRUNT),
	charge("interets-emprunt", "Intérêts d'emprunt", "banque-emprunt", "6611", "2033-B/294", FRAIS_GENERAUX),
	charge("interets-intercalaires", "Intérêts intercalaires", "banque-emprunt", "6611", "2033-B/294", FRAIS_GENERAUX),
	charge("agios", "Agios et intérêts de découvert", "banque-emprunt", "6616", "2033-B/294", FRAIS_GENERAUX),
	charge("indemnites-remboursement-anticipe", "Indemnités de remboursement anticipé", "banque-emprunt", "6688", "2033-B/294", FRAIS_GENERAUX),
	charge("loyers-irrecouvrables", "Loyers impayés devenus irrécouvrables", "autres-charges", "654", "2033-B/262", FRAIS_GENERAUX),
	charge("valeur-nette-cession", "Valeur nette comptable d'une immobilisation cédée", "autres-charges", "657", "2033-B/262", AMORTISSEMENT),
	immobilisation("terrain", "Terrain", "acquisition", "211", "2033-C/420", "non-amorti"),
	immobilisation("construction", "Prix d'acquisition du logement hors terrain", "acquisition", "2131", "2033-C/430", "suit-le-bien"),
	immobilisation("droits-mutation", "Droits de mutation à l'achat", "acquisition", "2131", "2033-C/430", "suit-le-bien", {
		premierEquipement: false,
		ref: FRAIS_ACQUISITION,
		siCharge: {
			comptePcg: "6354",
			ligne: "2033-B/244"
		}
	}),
	immobilisation("emoluments-notaire", "Émoluments et débours du notaire à l'achat", "acquisition", "2131", "2033-C/430", "suit-le-bien", {
		premierEquipement: false,
		ref: FRAIS_ACQUISITION,
		siCharge: {
			comptePcg: "6227",
			ligne: "2033-B/242"
		}
	}),
	immobilisation("commission-agence-achat", "Commission d'agence à l'achat", "acquisition", "2131", "2033-C/430", "suit-le-bien", {
		premierEquipement: false,
		ref: FRAIS_ACQUISITION,
		siCharge: {
			comptePcg: "6221",
			ligne: "2033-B/242"
		}
	}),
	immobilisation("travaux-gros-oeuvre", "Travaux de gros œuvre, extension", "construction", "2131", "2033-C/430", ans(50, 75, 80)),
	immobilisation("travaux-toiture", "Réfection de toiture", "construction", "2131", "2033-C/430", ans(25, 25, 30)),
	immobilisation("travaux-etancheite-facade", "Étanchéité et ravalement de façade", "construction", "2131", "2033-C/430", ans(25, 25, 30)),
	immobilisation("travaux-electricite", "Réfection de l'installation électrique", "construction", "2135", "2033-C/430", ans(10, 20, 20)),
	immobilisation("travaux-plomberie-chauffage", "Plomberie, chauffage, climatisation", "construction", "2135", "2033-C/430", ans(10, 15, 20)),
	immobilisation("travaux-amenagements", "Aménagements intérieurs (sols, peintures, cloisons, salle d'eau)", "construction", "2135", "2033-C/430", ans(10, 12, 20)),
	immobilisation("amenagements-exterieurs", "Aménagements extérieurs (clôture, terrasse)", "construction", "2181", "2033-C/450", ans(10, 15, 20)),
	immobilisation("amenagements-sans-murs", "Aménagements intérieurs d'un logement dont les murs ne sont pas à l'actif", "construction", "2181", "2033-C/450", ans(10, 12, 20)),
	immobilisation("cuisine-equipee", "Cuisine équipée", "equipement", "2181", "2033-C/450", ans(5, 10, 15), premier),
	immobilisation("mobilier", "Mobilier", "equipement", "2184", "2033-C/470", ans(5, 7, 10), premier),
	immobilisation("literie", "Literie", "equipement", "2184", "2033-C/470", ans(3, 5, 10), premier),
	immobilisation("electromenager", "Électroménager", "equipement", "2184", "2033-C/470", ans(3, 5, 10), premier),
	immobilisation("audiovisuel", "Télévision et audiovisuel", "equipement", "2184", "2033-C/470", ans(3, 5, 7), premier),
	immobilisation("informatique", "Matériel informatique", "equipement", "2183", "2033-C/470", ans(3, 3, 5), premier)
];
// src/lib/fiscal/regles/profils.ts
/** Profils de ventilation du prix d'un bien en composants. Les parts d'un profil font 100 %. */
const REF_COMPOSANTS = "CGI ann. II, art. 15 bis";
/** Les profils lus dans un catalogue : un jeu de règles a les durées de ses propres articles. */
function profilsDe(articles) {
	/** Compte, ligne et durées viennent de l'article du catalogue, que la 2033-C et le FEC relisent sur la ligne enregistrée. */
	function composant(code, libelle, part, article) {
		const a = articles.find((x) => x.id === article);
		if (a?.nature !== "immobilisation" || a.amortissement === "suit-le-bien") throw new Error(`Le composant ${code} demande une immobilisation à durée propre, pas ${article}.`);
		const durees = a.amortissement === "non-amorti" ? null : a.amortissement;
		return {
			code,
			libelle,
			part,
			article,
			dureeAns: durees?.defaut ?? null,
			durees,
			comptePcg: a.comptePcg,
			ligne: a.ligne
		};
	}
	return {
		standard: {
			code: "standard",
			libelle: "Standard",
			usage: "Logement acheté et loué meublé, terrain compris dans le prix.",
			ref: REF_COMPOSANTS,
			composants: [
				composant("terrain", "Terrain", .15, "terrain"),
				composant("gros-oeuvre", "Gros œuvre", .45, "travaux-gros-oeuvre"),
				composant("electricite", "Installation électrique", .06, "travaux-electricite"),
				composant("etancheite", "Étanchéité", .07, "travaux-etancheite-facade"),
				composant("toiture", "Toiture", .08, "travaux-toiture"),
				composant("amenagements", "Aménagements intérieurs", .19, "travaux-amenagements")
			]
		},
		residencePrincipale: {
			code: "residence-principale",
			libelle: "Résidence principale ou sous-location",
			usage: "Chambre louée dans sa résidence principale, ou logement sous-loué : ni terrain ni gros œuvre à l'actif.",
			ref: REF_COMPOSANTS,
			composants: [composant("amenagements", "Aménagements intérieurs", 1, "amenagements-sans-murs")]
		}
	};
}
profilsDe(ARTICLES$1);
// src/lib/fiscal/regles/correction-durees.ts
/** Les bornes des travaux corrigées le 18 novembre 2026 : `regles@<année>` garde les anciennes, `regles@<année>.1` suit le catalogue courant. */
const AVANT = {
	"travaux-electricite": {
		min: 25,
		defaut: 30,
		max: 30
	},
	"travaux-plomberie-chauffage": {
		min: 15,
		defaut: 20,
		max: 25
	},
	"travaux-amenagements": {
		min: 10,
		defaut: 12,
		max: 15
	},
	"amenagements-sans-murs": {
		min: 10,
		defaut: 12,
		max: 15
	}
};
/** Le catalogue courant avec les bornes d'avant la correction. */
const ARTICLES_AVANT_CORRECTION = ARTICLES$1.map((a) => a.nature === "immobilisation" && AVANT[a.id] ? {
	...a,
	amortissement: AVANT[a.id]
} : a);
/** Le même jeu en version `.1`, ses articles aux bornes du catalogue courant. */
function corrige(jeu) {
	const articles = jeu.articles.map((a) => {
		const courant = ARTICLES$1.find((c) => c.id === a.id);
		return a.nature === "immobilisation" && courant?.nature === "immobilisation" ? {
			...a,
			amortissement: courant.amortissement
		} : a;
	});
	return {
		...jeu,
		version: `regles@${jeu.annee}.1`,
		articles,
		profils: profilsDe(articles)
	};
}
// src/lib/fiscal/regles/2025.ts
/** Règles de l'exercice 2025, déclaré au printemps 2026. Valeurs vérifiées le 9 novembre 2026. */
const MICRO_2025 = "CGI art. 50-0 ; notice 2033-NOT-SD 2026 ; impots.gouv.fr, les régimes d'imposition ; BOI-BIC-DECLA-10-10-10 § 40";
const MICRO_GLOBAL = "CGI art. 50-0, 1, 1° ; BOI-BIC-DECLA-10-10-20 § 70 ; BOI-BAREME-000044 § 1";
const PS$1 = "LFSS 2026 (loi n° 2025-1403) art. 12 ; CSS art. L136-6 et L136-8";
const REGLES_2025 = {
	annee: 2025,
	version: "regles@2025",
	seuils: {
		lmpRecettes: {
			montant: 23e5,
			ref: "CGI art. 155, IV"
		},
		microBic: {
			longueDuree: {
				plafond: {
					montant: 777e4,
					ref: MICRO_2025
				},
				abattement: {
					taux: .5,
					ref: MICRO_2025
				},
				categorie: "2°"
			},
			tourismeClasse: {
				plafond: {
					montant: 777e4,
					ref: MICRO_2025
				},
				abattement: {
					taux: .5,
					ref: MICRO_2025
				},
				categorie: "2°"
			},
			tourismeNonClasse: {
				plafond: {
					montant: 15e5,
					ref: MICRO_2025
				},
				abattement: {
					taux: .3,
					ref: MICRO_2025
				},
				categorie: "1° bis"
			},
			abattementMinimum: {
				montant: 30500,
				ref: "CGI art. 50-0, 1"
			},
			plafondGlobal: {
				montant: 1887e4,
				ref: MICRO_GLOBAL
			}
		},
		cfeExonerationRecettes: {
			montant: 5e5,
			ref: "CGI art. 1647 D, I"
		},
		petitEquipementHt: {
			montant: 5e4,
			ref: "BOI-BIC-CHG-20-30-10 § 20 et 30"
		}
	},
	lmpNonResident: {
		autresRevenus: "imposables-en-france",
		ref: "BOI-BIC-CHAMP-40-10 § 165, version du 5 février 2020"
	},
	prelevementsSociaux: {
		resident: {
			taux: .186,
			ref: PS$1
		},
		nonResidentEee: {
			taux: .075,
			ref: "CGI art. 235 ter ; CSS art. L136-6, I ter"
		},
		nonResidentHorsEee: {
			taux: .186,
			ref: PS$1
		}
	},
	profils: profilsDe(ARTICLES_AVANT_CORRECTION),
	articles: ARTICLES_AVANT_CORRECTION,
	drapeaux: []
};
// src/lib/fiscal/regles/2021-2024.ts
/** Règles des exercices 2021 à 2024, pour recalculer un historique repris d'un autre outil. Valeurs vérifiées le 10 novembre 2026. */
const PS = "CSS art. L136-6 et L136-8 ; CGI art. 235 ter, version antérieure à la LFSS 2026";
const micro = (plafond, taux, ref, categorie) => ({
	plafond: {
		montant: plafond,
		ref
	},
	abattement: {
		taux,
		ref
	},
	categorie
});
const AVANT_2025 = {
	"indemnite-sinistre": {
		comptePcg: "7588",
		ligne: "2033-B/230"
	},
	"indemnite-loyers-impayes": {
		comptePcg: "7588",
		ligne: "2033-B/230"
	},
	"retenue-depot-garantie": {
		comptePcg: "7588",
		ligne: "2033-B/230"
	},
	"prix-cession": {
		comptePcg: "775",
		ligne: "2033-B/290"
	},
	"valeur-nette-cession": {
		comptePcg: "675",
		ligne: "2033-B/300"
	}
};
const ARTICLES = REGLES_2025.articles.map((a) => ({
	...a,
	...AVANT_2025[a.id]
}));
function jeu(annee, microBic) {
	return {
		...REGLES_2025,
		annee,
		version: `regles@${annee}`,
		seuils: {
			...REGLES_2025.seuils,
			microBic: {
				...REGLES_2025.seuils.microBic,
				...microBic,
				plafondGlobal: microBic.tourismeClasse.plafond
			}
		},
		prelevementsSociaux: {
			resident: {
				taux: .172,
				ref: PS
			},
			nonResidentEee: {
				taux: .075,
				ref: PS
			},
			nonResidentHorsEee: {
				taux: .172,
				ref: PS
			}
		},
		articles: ARTICLES,
		drapeaux: []
	};
}
const MICRO_2020 = "CGI art. 50-0, plafonds des revenus 2020 à 2022";
const MICRO_2023 = "CGI art. 50-0 avant la loi n° 2023-1322 ; BOFiP ACTU-2024-00003 et BOI-BIC-CHAMP-40-20 § 55";
const REGLES_2021 = jeu(2021, {
	longueDuree: micro(726e4, .5, MICRO_2020, "2°"),
	tourismeClasse: micro(1762e4, .71, MICRO_2020, "1°"),
	tourismeNonClasse: micro(726e4, .5, MICRO_2020, "2°")
});
const REGLES_2022 = jeu(2022, {
	longueDuree: micro(726e4, .5, MICRO_2020, "2°"),
	tourismeClasse: micro(1762e4, .71, MICRO_2020, "1°"),
	tourismeNonClasse: micro(726e4, .5, MICRO_2020, "2°")
});
const REGLES_2023 = jeu(2023, {
	longueDuree: micro(777e4, .5, MICRO_2023, "2°"),
	tourismeClasse: micro(1887e4, .71, MICRO_2023, "1°"),
	tourismeNonClasse: micro(777e4, .5, MICRO_2023, "2°")
});
const REGLES_2024 = jeu(2024, {
	longueDuree: micro(777e4, .5, MICRO_2023, "2°"),
	tourismeClasse: micro(1887e4, .71, MICRO_2023, "1°"),
	tourismeNonClasse: micro(777e4, .5, MICRO_2023, "2°")
});
// src/lib/fiscal/regles/2026.ts
/** Règles de l'exercice 2026, déclaré au printemps 2027. Valeurs vérifiées le 9 novembre 2026. */
const MICRO_2026 = "CGI art. 50-0 ; service-public.gouv.fr F32744";
const REGLES_2026 = {
	...REGLES_2025,
	annee: 2026,
	version: "regles@2026",
	seuils: {
		...REGLES_2025.seuils,
		microBic: {
			...REGLES_2025.seuils.microBic,
			longueDuree: {
				plafond: {
					montant: 836e4,
					ref: MICRO_2026
				},
				abattement: {
					taux: .5,
					ref: MICRO_2026
				},
				categorie: "2°"
			},
			tourismeClasse: {
				plafond: {
					montant: 836e4,
					ref: MICRO_2026
				},
				abattement: {
					taux: .5,
					ref: MICRO_2026
				},
				categorie: "2°"
			},
			tourismeNonClasse: {
				plafond: {
					montant: 15e5,
					ref: MICRO_2026
				},
				abattement: {
					taux: .3,
					ref: MICRO_2026
				},
				categorie: "1° bis"
			},
			plafondGlobal: {
				montant: 2031e4,
				ref: MICRO_GLOBAL
			}
		}
	},
	lmpNonResident: {
		autresRevenus: "imposes-etat-residence",
		ref: "BOI-BIC-CHAMP-40-10 § 165, version du 15 avril 2026"
	},
	drapeaux: [{
		id: "plafond_amortissement_plf2027",
		actif: false,
		date: "2026-10-01",
		source: "PLF 2027, art. 7",
		anneeEffet: null,
		etat: "Volet LMNP supprimé en séance le 30 octobre 2026, puis texte entier considéré comme rejeté par l'Assemblée le 4 novembre 2026 (première partie rejetée) : le Sénat repart du texte déposé, article 7 compris. À allumer ou supprimer au texte promulgué.",
		parametres: {
			taux: .025,
			plafondFoyer: 7e5,
			tauxTourisme: .015,
			plafondFoyerTourisme: 5e5
		}
	}]
};
// src/lib/fiscal/regles/index.ts
/** Les jeux de règles par année. Un exercice garde la version avec laquelle il a été clôturé ; une correction est une nouvelle version. */
function figer(valeur) {
	if (valeur !== null && typeof valeur === "object" && !Object.isFrozen(valeur)) {
		Object.freeze(valeur);
		for (const enfant of Object.values(valeur)) figer(enfant);
	}
	return valeur;
}
const PUBLIES = [
	REGLES_2021,
	REGLES_2022,
	REGLES_2023,
	REGLES_2024,
	REGLES_2025,
	REGLES_2026
];
const JEUX = [...PUBLIES, ...PUBLIES.map(corrige)].map(figer);
/** La dernière version de l'année, celle d'un exercice qu'on ouvre. */
function reglesPour(annee) {
	const jeu = JEUX.findLast((j) => j.annee === annee);
	if (!jeu) throw new Error(`Aucun jeu de règles pour ${annee} : années connues ${PUBLIES.map((j) => j.annee).join(", ")}.`);
	return jeu;
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
// src/lib/skills/statut-lmp.ts
const date = (v) => typeof v === "string" ? v : null;
lancer({
	nom: "statut-lmp",
	resume: "statut LMP ou LMNP du foyer pour une année (CGI art. 155 IV), cotisations sociales et cases de la 2042 C PRO.",
	champs: [
		{
			nom: "annee",
			type: "nombre",
			min: 2021,
			max: 2026,
			defaut: 2026,
			aide: "Année des revenus."
		},
		{
			nom: "recettes",
			type: "euros",
			unite: "€/an",
			aide: "Recettes de location meublée du foyer, charges refacturées comprises, tous biens confondus."
		},
		{
			nom: "autresRevenus",
			type: "euros",
			unite: "€/an",
			min: -1e9,
			aide: "Revenus nets d'activité du foyer : salaires, pensions, BIC hors meublé, BA, BNC, art. 62. Un déficit en négatif. Pour un non-résident, ceux imposables en France seulement."
		},
		{
			nom: "clienteleDePassage",
			type: "booleen",
			defaut: false,
			aide: "Location à une clientèle de passage (courte durée, saisonnier)."
		},
		{
			nom: "debut",
			type: "date",
			defaut: null,
			aide: "Première mise en location dans l'année, AAAA-MM-JJ : les recettes sont ramenées à douze mois."
		},
		{
			nom: "fin",
			type: "date",
			defaut: null,
			aide: "Fin de toute location meublée dans l'année, AAAA-MM-JJ (avec --cessation-totale)."
		},
		{
			nom: "cessationTotale",
			type: "booleen",
			defaut: false,
			aide: "Le foyer arrête toute location meublée dans l'année."
		},
		{
			nom: "residentFiscal",
			type: "booleen",
			defaut: true,
			aide: "Le foyer est résident fiscal français."
		},
		{
			nom: "revenusEtatResidence",
			type: "euros",
			unite: "€/an",
			defaut: null,
			aide: "Non-résident, revenus 2026 et après : revenus nets d'activité dans le pays de résidence, comptés en plus des autres revenus, sans double compte."
		},
		{
			nom: "revenusEtatResidenceImposes",
			type: "booleen",
			defaut: null,
			aide: "Ces revenus sont imposés dans le pays de résidence ; non quand un régime particulier les exonère (NHR, IFICI), et ils ne comptent pas."
		}
	],
	exemple: "--recettes 32000 --autres-revenus 28000",
	calculer(e) {
		const regles = reglesPour(nombre(e, "annee"));
		const autres = centimes(e, "autresRevenus");
		const r = testerLmp({
			annee: regles.annee,
			exploitants: [{
				declarant: 1,
				locations: [{
					bienId: "foyer",
					recettes: centimes(e, "recettes"),
					debut: date(e.debut),
					fin: date(e.fin),
					clienteleDePassage: booleen(e, "clienteleDePassage")
				}]
			}],
			cessationTotale: booleen(e, "cessationTotale"),
			residentFiscal: booleen(e, "residentFiscal"),
			autresRevenus: {
				salairesEtPensions: autres,
				bicHorsLocationMeublee: 0,
				beneficesAgricoles: 0,
				beneficesNonCommerciaux: 0,
				remunerationsArticle62: 0
			},
			revenusActiviteEtatResidence: centimesOuNull(e, "revenusEtatResidence"),
			revenusEtatResidenceImposes: e.revenusEtatResidenceImposes === null ? null : booleen(e, "revenusEtatResidenceImposes")
		}, {
			seuilRecettes: regles.seuils.lmpRecettes.montant,
			autresRevenusNonResident: regles.lmpNonResident.autresRevenus
		});
		if (r.statut === "indetermine") throw new SaisieInvalide(r.controles.map((c) => c.message).join(" "));
		const [declarant] = r.declarants;
		return {
			resultat: {
				statut: r.statut,
				explication: r.decision.regle,
				recettesRetenues: euros(r.recettesRetenues.valeur),
				seuilRecettes: euros(regles.seuils.lmpRecettes.montant),
				autresRevenusActivite: euros(r.autresRevenusActivite.valeur),
				seuilDepasse: r.seuilDepasse.valeur,
				recettesPreponderantes: r.recettesPreponderantes.valeur,
				deficitSurRevenuGlobal: {
					valeur: r.deficitSurRevenuGlobal.valeur,
					regle: r.deficitSurRevenuGlobal.trace.regle
				},
				cotisationsSocialesIndependant: {
					valeur: declarant.ssi.valeur,
					regle: declarant.ssi.trace.regle
				},
				cases2042CPro: {
					...declarant.cases.valeur,
					regle: declarant.cases.trace.regle
				}
			},
			regles: {
				annee: regles.annee,
				version: regles.version,
				sources: [
					regles.seuils.lmpRecettes.ref,
					regles.lmpNonResident.ref,
					...refs(r)
				]
			}
		};
	}
});
export {};
