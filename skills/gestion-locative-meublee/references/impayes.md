# Loyers impayés et expulsion

Vérifié le 12 novembre 2026 sur service-public.gouv.fr F31272 (vérifiée le 6 août 2026). Textes : loi du 6 juillet 1989, art. 24 ; loi n° 2023-668 du 27 juillet 2023 (dite Kasbarian-Bergé) ; Code des procédures civiles d'exécution (CPCE), L411-1 et suivants, L412-1 à L412-8.

## Les étapes et leurs délais

| Étape                                                                                                  | Qui                    | Délai                                                                                                                                                                  | Source                |
| ------------------------------------------------------------------------------------------------------ | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| 1. Relance, puis mise en demeure par recommandé                                                        | Bailleur               | Dès le premier impayé                                                                                                                                                  | Usage                 |
| 2. Appel du garant, de Visale ou de la GLI                                                             | Bailleur               | Garant : dès le premier impayé. Visale : RAR sous 15 jours et déclaration sous 30 jours, comptés de l'impayé constitué (2 mois entiers, ou partiels au-delà d'un mois) | F31272 ; FAQ Visale   |
| 3. Signalement à la CAF ou à la MSA si le locataire touche une aide au logement                        | Bailleur               | Quand la dette atteint 2 mois (calcul ci-dessous)                                                                                                                      | CCH, R824-1 ; F31272  |
| 4. Commandement de payer visant la clause résolutoire                                                  | Commissaire de justice | Le locataire a **6 semaines** pour payer (2 mois avant la loi n° 2023-668)                                                                                             | Art. 24               |
| 5. Signalement à la CCAPEX                                                                             | Commissaire de justice | Avec le commandement, selon les seuils de dette                                                                                                                        | Art. 24               |
| 6. Assignation devant le juge des contentieux de la protection, notifiée au préfet                     | Commissaire de justice | Audience **au moins 6 semaines** après l'assignation                                                                                                                   | Art. 24               |
| 7. Jugement : délais de paiement possibles, **3 ans au plus**, clause suspendue tant qu'ils sont tenus | Juge                   |                                                                                                                                                                        | Art. 24 ; F31272      |
| 8. Commandement de quitter les lieux                                                                   | Commissaire de justice | **2 mois** en général, que le juge peut réduire ou supprimer                                                                                                           | CPCE, L412-1          |
| 9. Délai de grâce demandé au juge de l'exécution                                                       | Locataire              | **1 mois à 1 an** (3 mois à 3 ans avant la loi n° 2023-668)                                                                                                            | CPCE, L412-4          |
| 10. Expulsion, avec le concours de la force publique si besoin                                         | Commissaire de justice | Ni dimanche ni jour férié, entre 6 h et 21 h                                                                                                                           | CPCE, L141-1 ; F31272 |

**La clause résolutoire** est obligatoire dans tout bail d'habitation signé depuis le 29 juillet 2023 (art. 24). Exception : l'art. 24 ne s'applique pas au bail mobilité (art. 25-12) ; sa clause éventuelle relève du droit commun, et la procédure se discute avec un avocat. Sans elle, le bailleur demande la résiliation judiciaire, plus longue et laissée à l'appréciation du juge.

**Seuil CAF ou MSA** (F31272) : aide versée au bailleur, signaler quand la dette atteint 2 × (loyer hors charges − aide) ; aide versée au locataire, 2 × loyer hors charges. Ne pas signaler expose à une amende de 8 010 € d'après F31272. Deux décrets du 12 février 2026 changent ces règles au 1er janvier 2027 : relis F31272 après cette date.

**Avant le juge**, pour une dette de 5 000 € ou moins, une tentative de conciliation ou de médiation est obligatoire (Code de procédure civile, art. 750-1), sauf exceptions. Un diagnostic social et financier est demandé pendant la procédure (décret n° 2021-8 du 5 janvier 2021).

## La trêve hivernale

Du **1er novembre au 31 mars inclus**, aucune expulsion d'un locataire sans solution de relogement (CPCE, L412-6). La procédure continue (commandement, assignation, jugement) ; seule l'exécution attend. La dette, elle, court toujours. Pour 2026-2027 : du 1er novembre 2026 au 31 mars 2027. La loi n° 2023-668 écarte la trêve pour les occupants entrés par voie de fait (squat), pas pour un locataire.

## Ce que le bailleur ne fait jamais

Changer les serrures, couper l'eau ou l'électricité, vider le logement, entrer sans accord : jusqu'à 3 ans de prison et 30 000 € d'amende (Code pénal, art. 226-4-2). Seul un commissaire de justice expulse, sur titre exécutoire.

## Le refus du préfet

Si le préfet refuse le concours de la force publique, ou se tait 2 mois, le bailleur peut demander une indemnisation à l'État par recommandé, puis saisir le tribunal administratif dans les 2 mois d'un refus (CPCE, L153-1).

## Côté impôt

En LMNP au réel, un loyer impayé reste une recette de l'exercice où il était dû ; il ne devient charge (créance irrécouvrable) qu'une fois la perte certaine. Pour le détail, la skill `fiscaliste-lmnp`.

## Avec le MCP Locameublé

`lister_loyers` avec `statut: en_retard` donne la dette par bail, en centimes. Les relances se préparent dans l'app et ne partent qu'après un oui. Un commandement de payer ne se rédige pas ici : c'est un acte de commissaire de justice.

Guides : https://locameuble.fr/guides/loyer-impaye-que-faire, https://locameuble.fr/guides/garantie-loyer-impaye-ou-visale
