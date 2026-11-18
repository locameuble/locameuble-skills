# Le mobilier obligatoire

Vérifié le 12 novembre 2026. Loi du 6 juillet 1989, art. 25-4 ; décret n° 2015-981 du 31 juillet 2015 ; service-public.gouv.fr F34769 (vérifiée le 6 mars 2026).

## La liste (décret n° 2015-981, art. 2)

1. Une literie comprenant couette ou couverture.
2. Un dispositif d'occultation des fenêtres dans les pièces destinées à être utilisées comme chambre à coucher (volets ou rideaux).
3. Des plaques de cuisson.
4. Un four ou un four à micro-ondes.
5. Un réfrigérateur et un congélateur, ou un réfrigérateur avec un compartiment à congélation dont la température est inférieure ou égale à -6 °C.
6. La vaisselle nécessaire à la prise des repas, en nombre suffisant pour les occupants.
7. Des ustensiles de cuisine.
8. Une table et des sièges.
9. Des étagères de rangement.
10. Des luminaires.
11. Du matériel d'entretien ménager adapté aux caractéristiques du logement (un aspirateur pour de la moquette, un balai et une serpillière pour du carrelage).

Le décret ne fixe pas de nombre, sauf « en nombre suffisant » pour la vaisselle : compte au moins un couvert, une assiette et un verre par occupant, et un couchage par occupant prévu. Service-public.gouv.fr présente la même liste en 13 lignes (le froid et la table sont détaillés).

Le décret vaut pour le meublé de résidence principale et le bail mobilité (art. 25-12 renvoie à l'art. 25-4). Il ne vise pas le meublé de tourisme, qui a ses propres normes de classement.

## Le contrôle avec le script

```
node scripts/mobilier.mjs --help
node scripts/mobilier.mjs --type t2 --presents literie,occultation,plaques,four,froid,vaisselle,table
```

`--type` (studio, T2, colocation avec `--chambres`) et `--presents` (les éléments déjà dans le logement). Le script rend ce qui manque, avec la référence au décret, et chiffre le coût des manques. Utilise ses identifiants, pas une liste de mémoire. Il connaît aussi `armoire`, `chevet`, `bureau`, `canape` et `lave-linge` : ce sont des éléments de confort, pas des obligations du décret. Ne les présente jamais comme obligatoires.

## Ce que coûte un manque

Le bail meublé est un régime dérogatoire : si le logement n'est pas meublé au sens de l'art. 25-4, le juge peut requalifier le contrat en location vide. Conséquences : bail de 3 ans (art. 10), dépôt limité à 1 mois (art. 22), préavis du bailleur de 6 mois (art. 15), préavis du locataire de 3 mois sauf zone tendue, et fiscalité des revenus fonciers au lieu des BIC. Le juge apprécie au cas par cas : un élément manquant ne suffit pas toujours, plusieurs y conduisent souvent.

## L'entretien

Le bailleur remplace un équipement de la liste qui tombe en panne par usure ; le locataire répond d'une dégradation (art. 7 c). L'inventaire d'entrée et de sortie tranche (`etat-des-lieux.md`).

Outil en ligne : https://locameuble.fr/outils/liste-mobilier-obligatoire
