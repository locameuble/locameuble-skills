# Déclarer pas à pas

Vérifié le 12 novembre 2026. Dates de la campagne 2026 (revenus 2025). Les dates de 2027 (revenus 2026) sont publiées par impots.gouv.fr au printemps : ne les annonce pas avant de les avoir lues.

Tu expliques les étapes et les cases. C'est la personne qui remplit et qui dépose.

## Avant la première année : le SIRET

Le début d'activité se déclare sur formalites.entreprises.gouv.fr **dans les 15 jours** qui suivent le premier jour de location (la signature chez le notaire ne compte pas). C'est gratuit, ça donne un SIRET, demandé sur la 2042 C PRO au micro comme au réel. Pas d'inscription au registre du commerce. Activité à choisir : Activités de services, Location, Location de biens immobiliers, Loueur en meublé non professionnel. Sources : service-public.gouv.fr F32744 ; guide Locameublé `immatriculation-lmnp-inpi`.

La même année, le 1447-C-SD part au service des impôts des entreprises avant le 31 décembre pour la CFE (voir `tva-cfe.md`).

## Au micro-BIC : une ligne

Sur la 2042 C PRO, en même temps que la déclaration de revenus, les **recettes brutes** de l'année :

- 5NI : meublé à l'année, bail mobilité, étudiant ;
- 5NG : meublé de tourisme classé, chambre d'hôtes ;
- 5NH : meublé de tourisme non classé.

Déclarant 2 : 5OI, 5OG, 5OH. Personne à charge : 5PI, 5PG, 5PH. L'administration applique l'abattement. Aucune charge à déclarer. Source : notice 2042 C PRO 2026 ; impots.gouv.fr, page « Location meublée », mise à jour le 23 avril 2026.

Un LMNP dont les recettes sont soumises aux cotisations sociales (meublé de tourisme au-delà de 23 000 €) prend d'autres lignes : 5NJ (classé, chambre d'hôtes), 5NK (non classé), 5NL (autres), et 5OJ, 5OK, 5OL pour le déclarant 2. Un LMP au micro déclare ses recettes en 5KP, 5LP, dans la partie des BIC professionnels. Cases relues sur le formulaire 2042 C PRO 2026 le 18 novembre 2026.

Les déficits LMNP antérieurs d'une période au réel restent à reporter en 5GA à 5GJ.

## Au réel : la liasse d'abord, la 2042 C PRO ensuite

### 1. Tenir l'année

Comptabilité d'engagement : chaque loyer acquis, chaque charge, le tableau des immobilisations et des amortissements, le registre des déficits et de l'ARD.

### 2. La liasse 2031 et ses tableaux 2033

| Formulaire     | Contenu                                                 | Pour un LMNP                         |
| -------------- | ------------------------------------------------------- | ------------------------------------ |
| 2031-SD        | Déclaration de résultat, identité, cadre C1 du résultat | Oui                                  |
| 2031 bis-SD    | Cadre des locations meublées non professionnelles       | Oui                                  |
| 2033-A         | Bilan simplifié                                         | Oui                                  |
| 2033-B         | Compte de résultat et résultat fiscal                   | Oui                                  |
| 2033-C         | Immobilisations, amortissements, plus et moins-values   | Oui                                  |
| 2033-D         | Provisions, amortissements dérogatoires, déficits       | Souvent presque vide                 |
| 2033-E         | Valeur ajoutée et effectifs                             | Oui                                  |
| 2033-F, 2033-G | Composition du capital, filiales                        | Pas pour une entreprise individuelle |

Lignes clés de la 2033-B : loyers en 218, dotations aux amortissements en 254, intérêts d'emprunt en 294, réintégration de l'amortissement excédentaire (ARD créé) en 318, ARD imputé en 350, résultat fiscal en 370 (bénéfice) ou 372 (déficit). Source : notice 2033-NOT-SD 2026.

Le déficit LMNP ne se suit pas sur la 2033-D : il se suit sur la 2042 C PRO.

### 3. La date limite de la liasse

Le **2e jour ouvré après le 1er mai**, avec **15 jours calendaires de plus** en télétransmission (BOI-BIC-DECLA-30-10-10-20 § 60). Pour les revenus 2025 : 5 mai 2026 sur papier, **20 mai 2026** en ligne. La liasse se télétransmet en EDI-TDFC par un partenaire EDI, ou se saisit dans l'espace professionnel impots.gouv.fr, au service des impôts des entreprises du lieu du bien (ou du domicile avec plusieurs biens).

Cessation d'activité : liasse dans les 60 jours suivant la fin (contrôle du moteur Locameublé, CGI art. 201).

### 4. Le report sur la 2042 C PRO

| Situation                                                                     | Déclarant 1            | Déclarant 2 |
| ----------------------------------------------------------------------------- | ---------------------- | ----------- |
| LMNP, bénéfice                                                                | 5NA                    | 5OA         |
| LMNP, déficit                                                                 | 5NY                    | 5OY         |
| LMNP soumis aux cotisations sociales (tourisme au-delà de 23 000 €), bénéfice | 5NM                    | 5OM         |
| Idem, déficit                                                                 | 5WE                    | 5XE         |
| LMP, bénéfice                                                                 | 5KC                    | 5LC         |
| LMP, déficit                                                                  | 5KF                    | 5LF         |
| Déficits LMNP antérieurs non encore déduits                                   | 5GA (N-10) à 5GJ (N-1) |             |

Source : notice 2042 C PRO 2026, formulaire 2042_5474.

Dates 2026 de la déclaration de revenus (revenus 2025) : service en ligne ouvert le 9 avril ; en ligne jusqu'au 21 mai (départements 01 à 19 et non-résidents), 28 mai (20 à 54), 4 juin (55 à 976) ; 19 mai sur papier. Source : impots.gouv.fr, « Les modalités de la déclaration de revenus en 2026 », https://www.impots.gouv.fr/les-modalites-de-la-declaration-de-revenus-en-2026

**Calendrier 2027 (revenus 2026)** : pas publié au 12 novembre 2026. Les dates bougent chaque année : ne donne pas celles de 2026 pour 2027, dis qu'elles tombent d'habitude entre fin mai et début juin et renvoie vers impots.gouv.fr, qui les publie au printemps.

## Centres de gestion agréés : ce qui a changé

- **La majoration de 25 %** du bénéfice des non-adhérents a été supprimée par paliers : 20 % pour les revenus 2020, 15 % pour 2021, 10 % pour 2022, plus rien depuis les revenus 2023 (loi n° 2020-1721 du 29 décembre 2020 de finances pour 2021, art. 34 ; CGI art. 158, 7, ancien).
- **L'agrément des organismes de gestion** et leurs missions légales ont été abrogés par la loi n° 2025-127 du 14 février 2025 (LF 2025), art. 11. La même loi supprime la réduction d'impôt pour frais de comptabilité et d'adhésion (CGI art. 199 quater B), à compter de l'imposition des revenus 2025 : les cases 7FF et 7FG ont disparu de la déclaration 2026. Source : impots.gouv.fr, actualité « Organismes de gestion agréés (OGA) : abrogation des dispositions relatives à l'agrément et aux missions légales ».
- Les honoraires de comptabilité restent une **charge déductible** au réel (CGI art. 39, 1-1°).

Conséquence pratique : adhérer à un organisme n'est plus nécessaire pour éviter une majoration, et ne donne plus de réduction d'impôt.

## Avant de déposer : la liste de contrôle

1. Le régime est-il le bon (option réel prise, ou micro encore ouvert) ?
2. Les recettes de la liasse égalent-elles les loyers acquis de l'année, charges refacturées comprises ?
3. Le terrain est-il hors amortissement ?
4. L'amortissement est-il plafonné, l'ARD reporté ligne 318 puis repris ligne 350 ?
5. Les déficits antérieurs sont-ils tous redéclarés en 5GA à 5GJ, à la bonne année ?
6. Le statut LMNP ou LMP est-il vérifié cette année, avec les autres revenus du foyer ?
7. Le SIRET est-il reporté sur la 2042 C PRO ?

Avec le serveur MCP Locameublé, `lister_controles` couvre ces points sur le dossier réel : présente d'abord les bloquants.

## Une erreur après le dépôt

Une liasse se corrige par une nouvelle liasse marquée rectificative, une 2042 par la correction en ligne puis par réclamation. Le délai de réclamation court jusqu'au 31 décembre de la deuxième année qui suit la mise en recouvrement (LPF art. R* 196-1). Un oubli de plusieurs années, ou une rectification reçue de l'administration, se traite avec un avocat fiscaliste ou un expert-comptable.
