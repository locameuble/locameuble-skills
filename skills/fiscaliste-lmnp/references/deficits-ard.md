# Déficits et ARD

Vérifié le 12 novembre 2026. Logique reprise du moteur Locameublé (`src/lib/fiscal/ard.ts` et `deficits.ts`).

Deux stocks différents, qui ne vivent pas pareil. Les confondre est l'erreur la plus fréquente au réel.

|              | Déficit LMNP                                               | ARD (amortissement réputé différé)                                  |
| ------------ | ---------------------------------------------------------- | ------------------------------------------------------------------- |
| Naît de      | Charges hors amortissement supérieures aux loyers          | Amortissement au-delà du plafond de l'article 39 C                  |
| Durée de vie | 10 ans                                                     | Sans limite                                                         |
| S'impute sur | Bénéfices LMNP du foyer                                    | Le résultat de l'activité, dans le même plafond que l'amortissement |
| Suivi        | 2042 C PRO, cases 5GA à 5GJ                                | Liasse : 2033-B ligne 318 (réintégré), ligne 350 (imputé)           |
| Texte        | CGI art. 156, I, 1° ter ; BOI-BIC-CHAMP-40-20 § 240 et 250 | CGI art. 39 C, II ; BOI-BIC-AMT-20-40-10-20 et -30                  |

## L'ordre de calcul d'une année au réel

1. **Recettes** de l'année (loyers acquis, charges refacturées comprises).
2. **Moins les charges** hors amortissement. Si le solde est négatif, c'est un déficit, porté par les charges seules.
3. **Plafond d'amortissement** : loyers acquis moins charges afférentes aux biens, tous biens confondus, jamais négatif. Les frais généraux (comptabilité, juridique, domiciliation) n'entrent pas dans ces charges (BOI-BIC-AMT-20-40-10-20 § 70). Une indemnité d'assurance qui rembourse une réparation vient en moins de la charge qu'elle couvre : le propriétaire ne la supporte pas, comme le disait l'ex-compte 791 de transfert de charges. L'indemnité de garantie des loyers impayés compte comme un loyer. Celle d'un bien détruit est le prix de sa sortie, hors plafond.
4. **Dotation de l'année** déduite dans ce plafond. L'excédent devient de l'ARD, réintégré ligne 318 de la 2033-B.
5. **ARD des années passées** imputé dans ce qui reste du plafond, ligne 350 (CGI art. 39 C, II, 3 ; BOI-BIC-AMT-20-40-10-30 § 10).
6. **Résultat fiscal** de la liasse, reporté sur la 2042 C PRO.
7. **Déficits LMNP antérieurs** (5GA à 5GJ) imputés sur le bénéfice LMNP de l'année, le plus ancien d'abord puisqu'il expire le premier.

Conséquence : l'amortissement ne peut jamais faire passer sous zéro les loyers moins les charges du bien. Un déficit au réel vient toujours de charges : intérêts, frais de notaire passés en charge, travaux, ou frais généraux. Comme ces derniers restent hors du plafond, le résultat final peut descendre sous zéro de leur montant, amortissement plein compris.

## Exemple chiffré

Loyers 12 000 €. Charges du bien : intérêts 4 000 €, taxe foncière 1 000 €, copropriété 1 500 €, assurance 300 €, soit 6 800 €. Frais généraux : expert-comptable 500 €. Dotation calculée : 9 000 €.

| Ligne                                     | Calcul               | Montant |
| ----------------------------------------- | -------------------- | ------- |
| Résultat avant amortissement              | 12 000 − 6 800 − 500 | 4 700 € |
| Plafond de l'art. 39 C                    | 12 000 − 6 800       | 5 200 € |
| Amortissement déduit                      | min(9 000 ; 5 200)   | 5 200 € |
| ARD créé, reporté sans limite (ligne 318) | 9 000 − 5 200        | 3 800 € |
| Résultat fiscal                           | 4 700 − 5 200        | − 500 € |

Le déficit de 500 € vient du seul comptable. Il s'impute sur les bénéfices LMNP des dix années suivantes, jamais sur le salaire. Mettre l'expert-comptable dans le plafond donnerait 4 700 € d'amortissement et un résultat nul : c'est l'erreur à éviter (BOI-BIC-AMT-20-40-10-20 § 70, relu le 18 novembre 2026).

## Le déficit LMNP

- Il ne s'impute **que sur des bénéfices de location meublée non professionnelle** du foyer, l'année même et les dix années suivantes (CGI art. 156, I, 1° ter). Jamais sur un salaire, une pension ou des revenus fonciers.
- Un déficit de l'un des déclarants se compense d'abord avec le bénéfice LMNP de l'autre la même année.
- Il s'impute aussi sur un bénéfice LMNP au micro-BIC (recettes moins abattement) : le texte vise les revenus de l'activité sans distinguer le régime (BOI-BIC-CHAMP-40-20 § 250).
- Il se redéclare chaque année : sur la 2042 C PRO de 2026 (revenus 2025), 5GA porte l'année 2015 et 5GJ l'année 2024. Ce qui n'a pas trouvé de bénéfice en dix ans est perdu.
- Une année où le foyer est LMP ne consomme pas ces déficits LMNP.

## L'ARD

- Il naît chaque année où l'amortissement dépasse le plafond, ce qui arrive souvent les premières années avec un emprunt.
- Il ne se perd pas avec le temps. Il s'impute en plus de l'annuité de l'année, toujours dans le plafond.
- À la revente d'un bien, le moteur impute encore l'ARD du bien l'année de la vente, dans le plafond, puis sort le reste du registre. C'est une **règle de calcul Locameublé** : le BOFiP n'a pas commenté le sort de l'ARD restant à la cession. Dis-le si la question tombe.
- Un ARD jamais déduit n'entre pas dans la réintégration de la plus-value : seuls les amortissements « admis en déduction » sont retranchés du prix (CGI art. 150 VB, III).

## Le déficit LMP

Le déficit d'un loueur professionnel s'impute sur le **revenu global** du foyer, sans limite de montant (CGI art. 156, I ; BOI-BIC-CHAMP-40-20 § 350). C'est l'un des rares avantages nets du statut. Les cases : 5KF (déclarant 1) et 5LF (déclarant 2) sur la 2042 C PRO. L'amortissement reste plafonné par l'article 39 C : seul le déficit de charges profite au revenu global.

## Réponses types

**« J'ai 4 000 € de déficit, il baisse mon impôt ? »** Non, sauf bénéfice LMNP la même année ou dans les dix ans. Sa valeur se mesure au TMI futur, pas à l'impôt de cette année.

**« Mon amortissement est bloqué, je le perds ? »** Non. Il devient de l'ARD et se reprend plus tard, sans limite, dès que les loyers moins les charges le permettent.

Avec le serveur MCP connecté, `lire_resultat` donne la dotation déduite, l'ARD créé, l'ARD imputé et le stock, chacun avec sa trace. Cite-les plutôt que de les recalculer.
