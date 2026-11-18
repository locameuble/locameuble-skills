# La plus-value à la revente d'un LMNP

Vérifié le 12 novembre 2026. Taux et règles repris du moteur Locameublé (`src/lib/fiscal/plus-value.ts`, taux vérifiés sur Légifrance le 12 novembre 2026). Le LMP suit un autre régime : `lmp.md`.

Un LMNP qui vend relève du régime des **plus-values immobilières des particuliers** (CGI art. 150 U à 150 VH). Le notaire calcule, dépose la 2048-IMM et paie l'impôt sur le prix de vente. L'estimation sert à décider quand vendre et à quel prix net.

## Le calcul, dans l'ordre

1. **Prix d'acquisition** à l'acte, terrain compris, hors mobilier.
2. **Plus les frais d'acquisition** : réels justifiés, ou forfait de **7,5 %** du prix (CGI art. 150 VB, II, 3°).
3. **Plus les travaux** faits par une entreprise, jamais déduits ni amortis, ou forfait de **15 %** du prix si le bien est vendu plus de cinq ans après l'achat (CGI art. 150 VB, II, 4°).
4. **Moins les amortissements admis en déduction**, pour une vente depuis le 15 février 2025 (CGI art. 150 VB, III ; loi n° 2025-127 du 14 février 2025, art. 84). Voir plus bas.
5. **Prix de cession** moins les frais payés par le vendeur : agence, diagnostics, mainlevée (CGI art. 150 VA).
6. **Plus-value brute** = 5 moins (1 + 2 + 3 − 4). Une moins-value n'est ni imputable ni reportable (CGI art. 150 VD).
7. **Abattements pour durée de détention**, en années pleines de date à date (CGI art. 150 VC, I ; BOI-RFPI-PVI-20-20) :

| Années de détention | Impôt sur le revenu        | Prélèvements sociaux       |
| ------------------- | -------------------------- | -------------------------- |
| 0 à 5               | 0                          | 0                          |
| 6e à 21e, par an    | 6 %                        | 1,65 %                     |
| 22e                 | 4 % (total 100 %, exonéré) | 1,60 % (total 28 %)        |
| 23e à 30e, par an   |                            | 9 % (total 100 % à 30 ans) |

8. **Impôt** : 19 % de la base après abattement IR (CGI art. 200 B).
9. **Prélèvements sociaux** : **17,2 %** de la base après abattement PS. La hausse de la CSG de la LFSS 2026 épargne les plus-values immobilières (CSS art. L136-8, IV, 2°, issu de la loi n° 2025-1403, art. 12).
10. **Surtaxe** sur une plus-value nette imposable à l'IR de plus de 50 000 € (CGI art. 1609 nonies G ; BOI-RFPI-TPVIE-20) :

| Base imposable       | Taux | Lissage à l'entrée de tranche |
| -------------------- | ---- | ----------------------------- |
| 50 001 à 60 000 €    | 2 %  | moins (60 000 − PV) × 1/20    |
| 60 001 à 100 000 €   | 2 %  |                               |
| 100 001 à 110 000 €  | 3 %  | moins (110 000 − PV) × 1/10   |
| 110 001 à 150 000 €  | 3 %  |                               |
| 150 001 à 160 000 €  | 4 %  | moins (160 000 − PV) × 15/100 |
| 160 001 à 200 000 €  | 4 %  |                               |
| 200 001 à 210 000 €  | 5 %  | moins (210 000 − PV) × 20/100 |
| 210 001 à 250 000 €  | 5 %  |                               |
| 250 001 à 260 000 €  | 6 %  | moins (260 000 − PV) × 25/100 |
| Au-delà de 260 000 € | 6 %  |                               |

Exonérations totales : prix de cession de 15 000 € ou moins (CGI art. 150 U, II, 6°), détention de 30 ans. L'exonération de la résidence principale ne vise pas un bien loué.

Tout ce calcul passe par `scripts/plus-value.mjs` ou https://locameuble.fr/outils/calcul-plus-value-lmnp. Pas de calcul de tête.

## La réintégration des amortissements

Depuis le 15 février 2025, le prix d'acquisition est **minoré des amortissements admis en déduction** au titre de l'article 39 C. La plus-value monte d'autant.

- **Toutes les ventes** faites depuis le lendemain de la promulgation de la LF 2025, quelle que soit la date d'achat ou de mise en location. La réponse ministérielle à la question écrite n° 10097 (JO du 24 mars 2026) confirme qu'il n'y a pas de clause pour les biens loués avant 2025.
- **Ce qui entre** : les amortissements effectivement déduits sur l'immeuble et ses frais incorporés.
- **Le mobilier** sort de ce calcul, mais pas de l'impôt : seuls les locaux meublés suivent l'art. 150 U, les meubles suivent les plus-values professionnelles de l'art. 39 duodecies, sans l'exonération de l'art. 151 septies (BOI-BIC-CHAMP-40-20, version du 19 août 2026, § 270 et § 280). Leur prix de vente moins leur valeur nette comptable entre dans le BIC de l'année, et l'ARD qui reste sur eux majore cette valeur (CGI art. 39 C, II, 3). L'exonération des meubles meublants de l'art. 150 UA, II, 1° ne joue pas, l'art. 150 UA, I réservant les règles propres aux BIC. Aucun texte ne dit quelle part d'un amortissement plafonné vient du bâti ou des meubles : un prorata des dotations est une hypothèse.
- **Ce qui n'entre pas** : le terrain (jamais amorti), l'ARD jamais déduit (l'art. 39 C, II, 3 le dit « non déductible », alors que l'art. 150 VB, III vise les amortissements « admis en déduction »), et les amortissements des travaux de construction, reconstruction, agrandissement ou amélioration, qui ne majorent pas non plus le prix (CGI art. 150 VB, III, premier alinéa).
- **Qui y échappe** (CGI art. 150 VB, III, 1° à 3°) : résidences pour étudiants ou jeunes en formation et résidences seniors au sens du CCH (art. L631-12 et L631-13), établissements pour personnes âgées ou handicapées (EHPAD, résidences services agréées), soins de longue durée. Un appartement loué en colocation à des étudiants n'y échappe pas.
- **Ce qui reste ouvert** au 17 novembre 2026 : le BOFiP n'a pas commenté la règle (BOI-RFPI-PVI-20-10-20-10 date encore du 12 septembre 2012). L'ARD en stock reste dehors par la lettre du texte, sans doctrine pour le confirmer ; le sort des amortissements de composants remplacés n'est pas tranché. Dis-le quand la question touche ces points.

## Ce que ça change pour la décision

- **Micro ou réel avant une vente** : au micro, rien à réintégrer. Si la vente est à moins de 3 ou 4 ans, chiffre les deux chemins jusqu'à la vente avec `simuler.mjs` puis `plus-value.mjs`, en sommant impôt annuel et impôt de plus-value.
- **Attendre une année** : chaque année entre la 6e et la 21e retire 6 % de la base IR et 1,65 % de la base PS. Lance le script avec deux dates de vente.
- **Ventiler le mobilier** dans l'acte : il ne relève pas de la plus-value immobilière et ne paie pas de droits de mutation pour l'acheteur. Un prix de mobilier excessif est contestable : il doit correspondre à une valeur réelle.
- **Garder les factures de travaux** d'entreprise non déduits : elles majorent le prix d'acquisition au réel, au-delà du forfait de 15 %.

## Sources

- CGI art. 150 U, 150 V, 150 VA, 150 VB, 150 VC, 150 VD, 200 B, 1609 nonies G (Légifrance, versions en vigueur au 12 novembre 2026).
- Loi n° 2025-127 du 14 février 2025 de finances pour 2025, art. 84.
- Loi n° 2025-1403 de financement de la sécurité sociale pour 2026, art. 12 ; CSS art. L136-8.
- BOI-RFPI-PVI-20-10-20-20 (majorations du prix), BOI-RFPI-PVI-20-20 (abattements), BOI-RFPI-PVI-30-10 (impôt), BOI-RFPI-TPVIE-20 (surtaxe).
- Réponse ministérielle n° 10097, JO AN du 24 mars 2026.
