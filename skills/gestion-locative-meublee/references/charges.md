# Les charges en meublé : forfait ou provisions

Vérifié le 12 novembre 2026. Loi du 6 juillet 1989, art. 23 (provisions), 25-10 (meublé), 25-18 (bail mobilité) ; décret n° 87-713 du 26 août 1987 (liste des charges récupérables).

## Le choix

| Bail                                     | Mode                                                              | Source            |
| ---------------------------------------- | ----------------------------------------------------------------- | ----------------- |
| Meublé de résidence principale, étudiant | Au choix des parties : provisions avec régularisation, ou forfait | Art. 25-10        |
| Mobilité                                 | Forfait obligatoire                                               | Art. 25-18        |
| Colocation à bail unique                 | Au choix, comme le meublé                                         | Art. 8-1 et 25-10 |

Le choix s'écrit dans le bail et vaut pour toute sa durée.

## Les provisions (art. 23, par renvoi de l'art. 25-10)

- Seules les charges de la liste du décret n° 87-713 se récupèrent : eau, chauffage collectif, entretien des parties communes, ascenseur, taxe d'enlèvement des ordures ménagères. Pas la taxe foncière, pas les honoraires du syndic, pas les gros travaux.
- Provisions mensuelles, puis **régularisation annuelle** : le bailleur envoie le décompte par nature de charges au moins un mois avant, et tient les justificatifs à disposition pendant 6 mois.
- Régularisation demandée plus d'un an après l'exigibilité : le locataire peut payer en 12 mois.
- Prescription : 3 ans (art. 7-1).

## Le forfait (art. 25-10)

- Versé avec le loyer, **sans régularisation ni complément** ensuite, même si les charges réelles montent.
- Son montant est fixé au bail et peut être révisé chaque année aux mêmes conditions que le loyer (art. 25-10).
- Il « ne peut pas être manifestement disproportionné » au regard du dernier décompte des charges récupérables (art. 25-10, art. 25-18 pour le mobilité). Un forfait gonflé est un loyer déguisé, que le juge peut ramener à sa juste valeur, et qui pèse dans le calcul du plafond en zone d'encadrement.
- Il peut inclure des prestations hors liste (internet, électricité de l'appartement) si le bail le dit. Dans ce cas, le locataire n'ouvre pas ces contrats.

## Lequel choisir

- **Forfait** : simple, pas de décompte annuel, pas de retenue de 20 % sur le dépôt à la sortie. Risque pour le bailleur si l'énergie monte.
- **Provisions** : juste au centime, mais un décompte chaque année avec justificatifs, et une régularisation parfois tendue au départ du locataire.

Le choix change le résultat fiscal : en LMNP, les charges refacturées au forfait sont des recettes, les provisions aussi, et les charges payées sont des dépenses. La skill `fiscaliste-lmnp` donne le détail.

## Avec le MCP Locameublé

`lister_baux` rend le montant des charges de chaque bail, en centimes, mais pas leur mode : demande à la personne si c'est un forfait ou des provisions (c'est sur la fiche du bail dans l'app).

Guide : https://locameuble.fr/guides/charges-recuperables
