# Régimes et seuils

Vérifié le 12 novembre 2026. Les montants sont ceux du moteur de calcul Locameublé (`src/lib/fiscal/regles/2025.ts` et `2026.ts`), contrôlés sur les textes cités.

## La location meublée relève des BIC

Louer un logement meublé, c'est une activité commerciale au sens fiscal, même pour un seul studio : les loyers sont des bénéfices industriels et commerciaux (CGI art. 35, I, 5° bis). Ils se déclarent sur la 2042 C PRO, jamais en revenus fonciers sur la 2044.

Deux statuts, LMNP et LMP (voir `lmp.md`), et deux régimes d'imposition, micro-BIC et réel simplifié.

## Le micro-BIC

Pas de comptabilité. On déclare les recettes brutes, l'administration retire un abattement forfaitaire qui remplace toutes les charges et tout amortissement.

### Plafonds et abattements

| Nature de la location                      | Revenus 2025 | Revenus 2026 à 2028 | Abattement | Case 2042 C PRO (déclarant 1) |
| ------------------------------------------ | ------------ | ------------------- | ---------- | ----------------------------- |
| Meublé à l'année, bail mobilité, étudiant  | 77 700 €     | 83 600 €            | 50 %       | 5NI                           |
| Meublé de tourisme classé, chambre d'hôtes | 77 700 €     | 83 600 €            | 50 %       | 5NG                           |
| Meublé de tourisme non classé              | 15 000 €     | 15 000 €            | 30 %       | 5NH                           |

Abattement minimum : 305 € (CGI art. 50-0, 1). L'abattement ne dépasse jamais les recettes.

Sources :

- Revenus 2025 : CGI art. 50-0 dans sa rédaction issue de la loi n° 2024-1039 du 19 novembre 2024 (loi Le Meur) ; notice 2033-NOT-SD 2026, « Nouveautés ».
- Revenus 2026 : CGI art. 50-0, version en vigueur au 1er juillet 2026 ; service-public.gouv.fr F32744 ; BOFiP ACTU-2025-00127.
- Cases : formulaire 2042 C PRO 2026 et sa notice. La case 5ND n'existe plus en 2026 : le meublé à l'année passe en 5NI. Déclarant 2 : 5OI, 5OG, 5OH.

Le seuil du tourisme non classé n'est pas actualisé tous les trois ans, les autres oui (CGI art. 50-0, 1, dernier alinéa).

### Historique, pour un exercice repris

| Revenus      | Meublé à l'année | Tourisme classé | Tourisme non classé |
| ------------ | ---------------- | --------------- | ------------------- |
| 2020 à 2022  | 72 600 €, 50 %   | 176 200 €, 71 % | 72 600 €, 50 %      |
| 2023 et 2024 | 77 700 €, 50 %   | 188 700 €, 71 % | 77 700 €, 50 %      |

Pour 2023, la LF 2024 (loi n° 2023-1322, art. 45) avait baissé le non classé, mais l'ancien texte reste admis (BOFiP ACTU-2024-00003) ; pour 2024, l'ancien texte s'applique (BOI-BIC-CHAMP-40-20 § 55). Source moteur : `regles/2021-2024.ts`.

### Quand le micro se ferme

Le micro s'applique quand les recettes de l'année précédente **ou** de l'avant-dernière année ne dépassent pas le plafond (CGI art. 50-0, 1). En pratique, on le perd après deux années de suite au-dessus du plafond.

Activité mixte, non classé plus autres meublés : la loi demande que les recettes du non classé restent sous 15 000 €, celles des autres meublés sous leur propre plafond, et le total sous la limite du 1° (203 100 € en 2026) (CGI art. 50-0, 1, alinéa sur les activités relevant de plusieurs catégories ; BOI-BIC-DECLA-10-10-20 § 70). Exemple 2026 : 40 000 € à l'année et 12 000 € en non classé, deux années de suite. Chaque catégorie est sous son plafond et le total (52 000 €) sous 203 100 € : le micro reste ouvert, et chaque recette garde son propre abattement, 50 % et 30 %. Le moteur Locameublé applique cette lecture depuis le 12 novembre 2026, sur les recettes de N-1 et N-2 (`src/lib/fiscal/micro-bic.ts`, `microOuvert` ; `dossier.ts`).

### Qui ne peut pas être au micro

- Un bien en **indivision** : impots.gouv.fr exige le réel. Un bien indivis entre époux est regardé comme exploité en indivision (BOI-BIC-DECLA-10-10-20 § 80).
- Une **SCI** qui loue meublé : elle relève de l'IS (voir `cas-particuliers.md`).
- Le **LMP** au-delà des plafonds, comme tout le monde.

## Le réel simplifié

On tient une comptabilité d'engagement, on dépose une liasse 2031 et ses tableaux 2033, et on déduit les charges réelles et l'amortissement (voir `reel-amortissement.md`).

### L'option

Ce que dit le CGI art. 50-0, 4 (version en vigueur depuis le 1er juillet 2026, lue sur Légifrance le 12 novembre 2026 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054373853) :

- **Le délai** : l'option s'exerce « dans les délais applicables au dépôt de la déclaration prévue à l'article 170 », c'est-à-dire la déclaration de revenus, souscrite au titre de l'année qui précède celle où le réel s'applique. Exemple : être au réel sur les revenus 2027 demande d'opter au plus tard à la date limite de la déclaration des revenus 2026, au printemps 2027.
- **Première année d'activité** : l'option se prend dans le délai de la déclaration de cette première année. On peut donc démarrer au réel dès la première location.
- **Durée** : un an, reconduite tacitement chaque année civile.
- **Pour revenir au micro** : on renonce « dans les délais applicables au dépôt de la déclaration souscrite au titre des résultats de l'année précédant celle au titre de laquelle la renonciation s'applique ». Au réel, la déclaration de résultats est la liasse 2031 : c'est notre lecture, le BOFiP ne la chiffre pas.

**La forme** : une déclaration sur papier libre, datée et signée, ou un message par la messagerie sécurisée de l'espace professionnel, adressée au service des impôts des entreprises (BOI-BIC-DECLA-10-30 § 70, publié le 11 mai 2022 : https://bofip.impots.gouv.fr/bofip/1886-PGP). La renonciation se notifie au même service dans son délai (§ 130). Conseille de garder une trace datée de l'envoi.

Guides : `micro-bic-ou-reel`, `fiscalite-meuble-de-tourisme`.

### Quand le réel gagne

Le réel gagne quand charges réelles plus amortissement dépassent l'abattement : 50 % des loyers à l'année, 30 % en non classé. Avec un emprunt en cours et un achat récent, c'est presque toujours le cas. Sur un bien payé depuis longtemps avec peu de charges, le micro peut gagner, surtout si une revente approche, car il n'y a rien à réintégrer dans la plus-value.

Le chiffrage se fait avec `scripts/simuler.mjs`, jamais de tête.

## Prélèvements sociaux

| Revenus                                      | Taux en LMNP                           | Source                                                                                                                                                                        |
| -------------------------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Jusqu'à 2024                                 | 17,2 %                                 | CSS art. L136-6 et L136-8, version antérieure à la LFSS 2026                                                                                                                  |
| Depuis 2025                                  | 18,6 %                                 | LFSS 2026 (loi n° 2025-1403), art. 12 ; CSS art. L136-6 et L136-8 ; impots.gouv.fr, page « prélèvements sociaux sur les revenus de location », mise à jour le 17 juillet 2026 |
| Non-résident affilié dans l'EEE ou en Suisse | 7,5 % (prélèvement de solidarité seul) | CGI art. 235 ter ; CSS art. L136-6, I ter (exemption des affiliés à un autre régime de l’EEE)                                                                                 |

La location nue reste à 17,2 %. Le LMP ne paie pas ces prélèvements sur son bénéfice : il paie des cotisations sociales (voir `lmp.md`).

La plus-value immobilière d'un LMNP reste à 17,2 % (voir `plus-value.md`).

Le 18,6 % vaut dès les revenus 2025. Le mécanisme, lu sur Légifrance le 12 novembre 2026 :

- La LFSS 2026 (loi n° 2025-1403 du 30 décembre 2025), art. 12, I, 2°, porte la CSG du 2° du I de l'art. L136-8 de 9,2 % à **10,6 %** pour les contributions des art. L136-6 et L136-7, et rétablit un IV qui garde **9,2 %** pour les revenus fonciers (a du I de L136-6), les plus-values immobilières, certains intérêts et produits d'épargne et d'assurance-vie. Le bénéfice LMNP n'est pas dans cette liste. Art. 12, II, 1° : la hausse s'applique à la contribution de L136-6 « à compter de l'imposition des revenus de l'année 2025 ». Texte : https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000053226452
- **Le LMNP n'est taxé que s'il ne cotise pas déjà.** L'art. L136-6, I, f (version en vigueur depuis le 16 février 2025, que la LFSS 2026 n'a pas modifiée) vise « tous revenus qui entrent dans la catégorie des bénéfices industriels et commerciaux [...] à l'exception de ceux qui sont assujettis à la contribution sur les revenus d'activité et de remplacement définie aux articles L. 136-1 à L. 136-5 ». Un LMNP en meublé de tourisme affilié aux indépendants paie la CSG d'activité et sort de ce 18,6 %. Texte : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000051218166
- L'art. L136-8 en vigueur au 12 novembre 2026 (https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054336623) porte une dernière modification de la loi n° 2026-534 du 25 juin 2026 relative à la lutte contre les fraudes sociales et fiscales, art. 65, pour les revenus 2026. Elle ne change pas le 10,6 % : le taux vient de la LFSS 2026.
