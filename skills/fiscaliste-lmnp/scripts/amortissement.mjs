#!/usr/bin/env node
// @generated : script compilé depuis le moteur de Locameublé (https://locameuble.fr). Licence MIT.
import process from "node:process";
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
// src/lib/fiscal/repartir.ts
/** Splits an amount in cents by shares summing to 1, largest remainder first, so the parts always add back to the amount. */
function repartir(montant, parts) {
	const somme = parts.reduce((s, p) => s + p, 0);
	if (Math.abs(somme - 1) > 1e-9) throw new Error(`Les parts doivent faire 100 % (somme : ${somme * 100} %).`);
	const exactes = parts.map((p) => montant * p);
	const resultat = exactes.map(Math.floor);
	let reste = montant - resultat.reduce((s, m) => s + m, 0);
	const ordre = exactes.map((e, i) => ({
		i,
		fraction: e - Math.floor(e)
	})).toSorted((a, b) => b.fraction - a.fraction || a.i - b.i);
	for (const { i } of ordre) {
		if (reste <= 0) break;
		resultat[i]++;
		reste--;
	}
	return resultat;
}
// src/lib/fiscal/amortissement.ts
/** Plan d'amortissement d'un bien meublé : composants, immobilisations, seuil de charge, frais d'acquisition, usage personnel. Centimes, dates ISO. */
/** BOI-BIC-AMT-20-10 § 240 compte le temps couru en jours sans fixer la base : un autre logiciel compte février à 28, nous à 30. */
const JOURS_PAR_AN = 360;
const trace = (regle, sources, ref) => ref ? {
	regle,
	ref,
	sources
} : {
	regle,
	sources
};
const tracé = (valeur, t) => ({
	valeur,
	trace: t
});
const annee = (date) => Number(date.slice(0, 4));
/** Rang d'un jour dans l'année commerciale : le 31 compte comme le 30. */
function rang360(date) {
	const [, mois, jour] = date.split("-").map(Number);
	return 30 * (mois - 1) + Math.min(jour, 30);
}
/** Jours de `de` à `a` inclus, dans une même année, en base 360. */
function jours360(de, a) {
	return rang360(a) - rang360(de) + 1;
}
function lignesLineaires(base, dureeAns, debut, entree, sources) {
	const joursTotal = dureeAns * JOURS_PAR_AN;
	const fin = entree.dateCession;
	const derniere = fin ? annee(fin) : Infinity;
	const lignes = [];
	let cumul = 0;
	let joursCumules = 0;
	for (let a = annee(debut); cumul < base && a <= derniere; a++) {
		const jours = jours360(a === annee(debut) ? debut : `${a}-01-01`, fin && a === derniere ? fin : `${a}-12-31`);
		joursCumules += jours;
		const dotation = joursCumules >= joursTotal ? base - cumul : Math.min(base - cumul, Math.round(base * jours / joursTotal));
		cumul += dotation;
		const usage = entree.usagePersonnel?.[a] ?? 0;
		const t = trace("amortissement.lineaire-prorata-temporis", sources, "BOI-BIC-AMT-20-10 § 240");
		lignes.push({
			annee: a,
			dotation: tracé(dotation, t),
			dotationDeductible: tracé(Math.round(dotation * (1 - usage)), trace("amortissement.usage-personnel", sources)),
			cumul: tracé(cumul, t),
			vnc: tracé(base - cumul, t)
		});
	}
	return lignes;
}
/** Le plan complet : chaque année jusqu'à l'amortissement total ou la cession. */
function planAmortissement(entree) {
	const { bien } = entree;
	const fin = entree.dateCession;
	const frais = entree.fraisAcquisition === "immobilisation" ? bien.fraisAcquisition : 0;
	const sourcesBien = frais > 0 ? [bien.id, `${bien.id}:frais-acquisition`] : [bien.id];
	const montants = repartir(bien.prix + frais, bien.profil.composants.map((c) => c.part));
	let terrain = 0;
	const elements = [];
	bien.profil.composants.forEach((c, i) => {
		if (c.dureeAns === null) {
			terrain += montants[i];
			return;
		}
		elements.push({
			id: `${bien.id}:${c.code}`,
			libelle: c.libelle,
			base: montants[i],
			dureeAns: c.dureeAns,
			debut: bien.dateMiseEnLocation,
			lignes: lignesLineaires(montants[i], c.dureeAns, bien.dateMiseEnLocation, entree, sourcesBien)
		});
	});
	const charges = [];
	if (entree.fraisAcquisition === "charge" && bien.fraisAcquisition > 0) charges.push({
		id: `${bien.id}:frais-acquisition`,
		libelle: "Frais d'acquisition",
		annee: annee(bien.dateMiseEnLocation),
		montant: tracé(bien.fraisAcquisition, trace("amortissement.frais-acquisition-en-charge", [bien.id], "CGI ann. III art. 38 quinquies"))
	});
	for (const immo of entree.immobilisations ?? []) {
		if (fin && immo.dateMiseEnService > fin) continue;
		if (!immo.premierEquipement && (immo.montantHT ?? immo.montant) <= entree.seuilCharge) {
			charges.push({
				id: immo.id,
				libelle: immo.libelle,
				annee: annee(immo.dateMiseEnService),
				montant: tracé(immo.montant, trace("amortissement.seuil-charge", [immo.id], "BOI-BIC-CHG-20-30-10"))
			});
			continue;
		}
		elements.push({
			id: immo.id,
			libelle: immo.libelle,
			base: immo.montant,
			dureeAns: immo.dureeAns,
			debut: immo.dateMiseEnService,
			lignes: lignesLineaires(immo.montant, immo.dureeAns, immo.dateMiseEnService, entree, [immo.id])
		});
	}
	return {
		terrain: tracé(terrain, trace("amortissement.terrain-non-amortissable", [bien.id])),
		elements,
		charges,
		dateCession: fin
	};
}
/** Une année du plan. Un élément déjà amorti reste à l'actif avec une dotation nulle, jusqu'à la cession. */
function exerciceAmortissement(plan, exercice) {
	const cede = plan.dateCession !== void 0 && annee(plan.dateCession) < exercice;
	const elements = [];
	for (const el of plan.elements) {
		if (cede || annee(el.debut) > exercice) continue;
		const ligne = el.lignes.find((l) => l.annee === exercice);
		if (ligne) {
			elements.push({
				id: el.id,
				libelle: el.libelle,
				...ligne
			});
			continue;
		}
		const t = trace("amortissement.element-totalement-amorti", [el.id]);
		elements.push({
			id: el.id,
			libelle: el.libelle,
			annee: exercice,
			dotation: tracé(0, t),
			dotationDeductible: tracé(0, t),
			cumul: tracé(el.base, t),
			vnc: tracé(0, t)
		});
	}
	const sources = elements.map((e) => e.id);
	const total = (cle) => tracé(elements.reduce((s, e) => s + e[cle].valeur, 0), trace(`amortissement.total-${cle}`, sources));
	return {
		annee: exercice,
		elements,
		dotation: total("dotation"),
		dotationDeductible: total("dotationDeductible"),
		cumul: total("cumul"),
		vnc: total("vnc"),
		charges: plan.charges.filter((c) => c.annee === exercice)
	};
}
// src/lib/site/tools/tableau-amortissement-lmnp/tableau.ts
/** Le plan d'amortissement d'un bien meublé, année par année, calculé par le moteur de l'app. Centimes, dates ISO. */
/** Le profil de composants et le seuil du petit équipement viennent des règles de cette année. */
const ANNEE_REGLES = 2026;
/** La durée par défaut du catalogue, la même que propose la saisie d'une immobilisation dans l'app. */
const duree = (id) => {
	const a = ARTICLES$1.find((x) => x.id === id);
	if (a?.nature !== "immobilisation" || typeof a.amortissement !== "object") throw new Error(`Article ${id} sans durée d'amortissement.`);
	return a.amortissement.defaut;
};
function tableau(e, regles = reglesPour(ANNEE_REGLES)) {
	const profil = regles.profils.standard;
	const sommeBati = profil.composants.filter((c) => c.dureeAns !== null).reduce((s, c) => s + c.part, 0);
	const debut = e.dateMiseEnLocation;
	const plan = planAmortissement({
		bien: {
			id: "bien",
			prix: e.prix,
			fraisAcquisition: e.fraisAcquisition,
			dateMiseEnLocation: debut,
			profil: {
				code: profil.code,
				composants: profil.composants.map((c) => ({
					...c,
					part: c.dureeAns === null ? e.partTerrain : c.part / sommeBati * (1 - e.partTerrain)
				}))
			}
		},
		immobilisations: [{
			id: "travaux",
			libelle: "Travaux",
			montant: e.travaux,
			dureeAns: duree("travaux-amenagements"),
			dateMiseEnService: debut
		}, {
			id: "mobilier",
			libelle: "Mobilier",
			montant: e.mobilier,
			dureeAns: duree("mobilier"),
			dateMiseEnService: debut,
			premierEquipement: true
		}].filter((i) => i.montant > 0),
		seuilCharge: regles.seuils.petitEquipementHt.montant,
		fraisAcquisition: e.optionFrais
	});
	const elements = plan.elements.filter((el) => el.base > 0);
	const derniere = Math.max(...elements.map((el) => el.lignes.at(-1)?.annee ?? 0));
	const annees = [];
	for (let a = Number(debut.slice(0, 4)); a <= derniere; a++) {
		const ex = exerciceAmortissement(plan, a);
		const dotations = elements.map((el) => ex.elements.find((x) => x.id === el.id)?.dotation.valeur ?? 0);
		annees.push({
			annee: a,
			dotations,
			total: ex.dotation.valeur,
			cumul: ex.cumul.valeur,
			vnc: ex.vnc.valeur
		});
	}
	return {
		colonnes: elements.map((el) => ({
			id: el.id,
			libelle: el.libelle,
			base: el.base,
			dureeAns: el.dureeAns,
			annuite: Math.round(el.base / el.dureeAns)
		})),
		terrain: plan.terrain.valeur,
		charges: plan.charges.map((c) => ({
			libelle: c.libelle,
			montant: c.montant.valeur
		})),
		annees
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
// src/lib/skills/amortissement.ts
const OPTIONS = ["charge", "immobilisation"];
lancer({
	nom: "amortissement",
	resume: `plan d'amortissement LMNP par composants, année par année (règles ${ANNEE_REGLES}).`,
	champs: [
		{
			nom: "prix",
			type: "euros",
			unite: "€",
			aide: "Prix d'achat du logement, hors frais de notaire."
		},
		{
			nom: "partTerrain",
			type: "nombre",
			unite: "%",
			min: 0,
			max: 99,
			defaut: 15,
			aide: "Part du prix qui revient au terrain, non amortissable."
		},
		{
			nom: "fraisAcquisition",
			type: "euros",
			unite: "€",
			defaut: 0,
			aide: "Frais de notaire et d'agence payés par l'acheteur."
		},
		{
			nom: "optionFrais",
			type: "texte",
			choix: OPTIONS,
			defaut: "charge",
			aide: "Frais d'acquisition déduits la première année (charge) ou amortis avec le bien (immobilisation)."
		},
		{
			nom: "travaux",
			type: "euros",
			unite: "€",
			defaut: 0,
			aide: "Travaux d'aménagement amortissables."
		},
		{
			nom: "mobilier",
			type: "euros",
			unite: "€",
			defaut: 0,
			aide: "Mobilier acheté pour la mise en location."
		},
		{
			nom: "dateMiseEnLocation",
			type: "date",
			aide: "Date de mise en location, AAAA-MM-JJ."
		}
	],
	exemple: "--prix 180000 --part-terrain 15 --frais-acquisition 14000 --mobilier 6000 --date-mise-en-location 2026-03-01",
	calculer(e) {
		const t = tableau({
			prix: centimes(e, "prix"),
			partTerrain: nombre(e, "partTerrain") / 100,
			fraisAcquisition: centimes(e, "fraisAcquisition"),
			optionFrais: choix(e, "optionFrais", OPTIONS),
			travaux: centimes(e, "travaux"),
			mobilier: centimes(e, "mobilier"),
			dateMiseEnLocation: texte(e, "dateMiseEnLocation")
		});
		const regles = reglesPour(ANNEE_REGLES);
		const article = (id) => ARTICLES$1.find((a) => a.id === id)?.ref;
		return {
			resultat: {
				composants: t.colonnes.map((c) => ({
					libelle: c.libelle,
					base: euros(c.base),
					dureeAns: c.dureeAns,
					annuite: euros(c.annuite)
				})),
				terrain: euros(t.terrain),
				chargesPremiereAnnee: t.charges.map((c) => ({
					libelle: c.libelle,
					montant: euros(c.montant)
				})),
				annees: t.annees.map((a) => ({
					annee: a.annee,
					dotations: Object.fromEntries(t.colonnes.map((c, i) => [c.libelle, euros(a.dotations[i])])),
					total: euros(a.total),
					cumul: euros(a.cumul),
					valeurNette: euros(a.vnc)
				}))
			},
			regles: {
				annee: regles.annee,
				version: regles.version,
				sources: [
					regles.profils.standard.ref,
					regles.seuils.petitEquipementHt.ref,
					article("travaux-amenagements"),
					article("mobilier")
				].filter((s) => typeof s === "string")
			}
		};
	}
});
export {};
