# Le loueur en meublé professionnel (LMP)

Vérifié le 12 novembre 2026. Test et seuils repris du moteur Locameublé (`src/lib/fiscal/lmp.ts`, `plus-value.ts`).

## Les deux conditions

Un foyer est LMP pour une année quand ses recettes de location meublée, la même année :

1. **excèdent 23 000 €**, et
2. **excèdent les autres revenus d'activité du foyer**.

Sinon, il est LMNP. Sources : CGI art. 155, IV, 2 ; BOI-BIC-CHAMP-40-10 (version du 15 avril 2026), § 110 à 170. Le moteur applique un dépassement strict : 23 000 € pile, c'est LMNP.

L'inscription au registre du commerce n'est plus une condition (Conseil constitutionnel, décision n° 2017-689 QPC du 8 février 2018, puis loi n° 2019-1479, LF 2020).

### Ce qui compte en recettes

- Loyers acquis **TTC**, charges refacturées et indemnités d'assurance loyers comprises (§ 110).
- Tous les biens meublés du foyer fiscal additionnés, ceux des deux déclarants compris (§ 130).
- Avant tout abattement ou amortissement : ce sont des recettes, pas un bénéfice.
- Un bien acquis ou achevé dans l'année : recettes ramenées à douze mois (§ 170). En cessation totale de l'activité, même chose (§ 200). Une vente partielle ne déclenche pas le prorata.

### Ce qui compte en autres revenus d'activité

Revenus nets du foyer : salaires et pensions (au sens de l'art. 79, **pensions et rentes viagères comprises**), BIC hors location meublée, bénéfices agricoles, BNC, rémunérations de gérant de l'art. 62 (§ 150 et 160). Pas les revenus fonciers, ni les dividendes, ni les plus-values.

### Non-résidents

- Jusqu'aux revenus 2025 : seuls les revenus d'activité imposables en France comptent (§ 165, version du 5 février 2020).
- Depuis les revenus 2026 : comptent aussi les revenus d'activité imposés dans l'État de résidence (§ 165, version du 15 avril 2026 ; loi n° 2026-103 du 19 février 2026, art. 53). Un non-résident salarié à l'étranger passe beaucoup plus rarement LMP.

### La bascule qu'on ne voit pas venir

Le statut se juge chaque année. Un départ à la retraite, un congé parental, un temps partiel ou une année sans salaire fait baisser les autres revenus ; à loyers égaux, le foyer devient LMP. Le chiffrage se fait avec `scripts/statut-lmp.mjs`.

## Ce que le statut change

|                                  | LMNP                                                | LMP                                                               |
| -------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------- |
| Charges sociales sur le bénéfice | Prélèvements sociaux 18,6 % (revenus 2025 et après) | Cotisations sociales des indépendants (SSI)                       |
| Déficit                          | Sur les seuls bénéfices LMNP, 10 ans                | Sur le revenu global, sans limite (CGI art. 156, I)               |
| Plus-value à la revente          | Régime des particuliers (voir `plus-value.md`)      | Plus-values professionnelles, court et long terme                 |
| Exonération de plus-value        | Durée de détention (22 et 30 ans)                   | CGI art. 151 septies après 5 ans d'activité, selon les recettes   |
| IFI                              | Bien taxable                                        | Exonération possible sous conditions propres (CGI art. 975, V)    |
| Cases 2042 C PRO, réel           | Bénéfice 5NA, 5OA ; déficit 5NY, 5OY                | Bénéfice 5KC, 5LC ; déficit 5KF, 5LF                              |
| Cases 2042 C PRO, micro          | 5NI, 5NG, 5NH (voir `declaration.md`)               | Recettes 5KP, 5LP (prestations de services et locations meublées) |

Sources des cases : formulaire 2042 C PRO 2026 (revenus 2025), relu le 18 novembre 2026 : https://www.impots.gouv.fr/sites/default/files/formulaires/2042/2026/2042_5474.pdf

## Les cotisations sociales

- Le LMP relève des travailleurs indépendants (CSS art. L611-1, 6°). Les cotisations se calculent sur le bénéfice, avec des cotisations minimales dues même quand il est faible. Le barème change chaque année : renvoie au simulateur officiel de l'Urssaf (mon-entreprise.urssaf.fr) plutôt que d'annoncer un taux.
- Un LMNP qui loue en **meublé de tourisme** (clientèle de passage qui n'y élit pas domicile) au-delà de 23 000 € de recettes relève aussi des indépendants, tout en restant LMNP pour l'impôt (même article). Ses cases deviennent, au réel, 5NM, 5OM (bénéfice) et 5WE, 5XE (déficit) ; au micro, 5NJ (classé ou chambre d'hôtes), 5NK (non classé) ou 5NL (autres), et 5OJ, 5OK, 5OL pour le déclarant 2.
- **L'option pour le régime général** (« régime général simplifié » à l'Urssaf). L'art. L611-1, 6°, la réserve au loueur de courte durée, qui l'exerce « lors de l'affiliation » (rédaction de la LFSS 2021, loi n° 2020-1576, art. 22). Conditions de l'art. L311-3, 35° (version en vigueur depuis le 28 février 2025, lue sur Légifrance le 12 novembre 2026 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051284232) :
  - recettes au plus égales au seuil du micro-BNC (CGI art. 102 ter, 1, premier alinéa), soit **83 600 €** en 2026 ;
  - cotisations calculées sur les recettes moins un abattement de **60 %**, porté à **87 %** pour les meublés de tourisme « définis conformément à l'article L. 324-1 du code du tourisme », l'article du classement : donc les meublés classés.
  - Côté Urssaf (page « Économie collaborative », mise à jour le 27 octobre 2026) : ouvert aux meublés de tourisme de courte durée, classés ou non, jusqu'à 83 600 € de recettes en 2026, fermé à la location meublée de longue durée et aux chambres d'hôtes. On s'immatricule sur formalites.entreprises.gouv.fr puis on remplit le formulaire d'affiliation ; déclaration et paiement chaque trimestre. Au-delà du seuil, l'option tombe au 31 décembre de l'année du dépassement. Page : https://www.urssaf.fr/accueil/services/economie-collaborative.html

La comparaison « 18,6 % de prélèvements contre des cotisations » ne se tranche pas de tête : les cotisations ouvrent des droits (retraite, indemnités) et changent avec le bénéfice. C'est un sujet pour un expert-comptable.

## Les plus-values professionnelles

À la vente d'un bien par un LMP, chaque élément (immeuble par composant, mobilier, terrain) se traite séparément (CGI art. 39 duodecies ; BOI-BIC-PVMV-20-20-10) :

- Prix de cession moins valeur nette comptable (valeur d'origine moins amortissements, ARD compris, BOI-BIC-CHAMP-40-20 § 340).
- **Court terme** : la plus-value d'un bien détenu moins de deux ans, et sinon la part égale aux amortissements. Elle s'ajoute au résultat, à l'impôt sur le revenu au barème et aux cotisations.
- **Long terme** : le reste, pour un bien détenu deux ans ou plus. Taxé à un taux proportionnel (CGI art. 39 quindecies).
- Terrain : jamais amorti, sa plus-value est à long terme après deux ans.
- Moins-values : à court terme sur un bien amortissable ou détenu moins de deux ans, à long terme sinon.

Le moteur ventile court et long terme mais n'applique aucune exonération. Il n'y a pas de script public pour ce calcul : donne la mécanique, pas un total.

### L'exonération de l'article 151 septies

Conditions, pour un LMP (CGI art. 151 septies, II et VII ; BOI-BIC-CHAMP-40-20 § 410 et 420) :

- l'activité est exercée à titre professionnel depuis **au moins cinq ans** à la date de la vente (des périodes LMP séparées se cumulent, § 410) ;
- recettes annuelles moyennes HT des deux exercices précédents : **90 000 € ou moins**, exonération totale ; **entre 90 000 € et 126 000 €**, exonération partielle, de (126 000 − recettes) / 36 000 ; **126 000 € ou plus**, rien.

Le traitement des prélèvements sociaux sur une plus-value exonérée, l'abattement de l'article 151 septies B et l'articulation avec un départ à la retraite (151 septies A) ne sont pas couverts ici : renvoie vers un expert-comptable.

## Quand renvoyer vers un professionnel

Dès que le test donne LMP, ou que les recettes frôlent une des deux limites, d'un côté ou de l'autre. Les conséquences (cotisations, régime de plus-value, IFI) se jouent sur plusieurs années et demandent un suivi.
