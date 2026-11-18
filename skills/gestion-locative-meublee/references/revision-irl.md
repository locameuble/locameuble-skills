# La révision du loyer (IRL)

Vérifié le 12 novembre 2026. Loi n° 89-462 du 6 juillet 1989, art. 17-1 I et III, applicables au meublé par l'art. 25-9.

## Les conditions

1. **Une clause de révision dans le bail.** Sans elle, le loyer ne bouge pas jusqu'à la fin du bail et de ses reconductions (art. 17-1 I : « lorsque le contrat prévoit la révision »).
2. **Une fois par an**, à la date convenue au bail, ou à défaut à la date anniversaire.
3. **L'indice** : l'indice de référence des loyers (IRL) publié chaque trimestre par l'Insee. Le trimestre de référence est celui écrit au bail ; à défaut, le dernier publié à la date de signature.
4. **La formule** : nouveau loyer hors charges = loyer hors charges × IRL du même trimestre de l'année / IRL du même trimestre un an plus tôt. Les charges ne suivent pas l'IRL.
5. **Bail mobilité** : jamais de révision en cours de bail (art. 25-16). **Bail étudiant de 9 mois** : il finit avant son premier anniversaire, donc pas de révision.

## Le délai : un an, puis c'est perdu

Le bailleur a un an après la date de révision prévue pour la demander. Passé ce délai, il est réputé avoir renoncé à la révision de l'année écoulée (art. 17-1 I). Une demande faite dans l'année mais après la date anniversaire prend effet **à la date de la demande**, sans rattrapage des mois passés. L'année suivante, le calcul repart de l'indice d'un an plus tôt : une année sautée ne se rattrape jamais.

## Le gel des logements F et G

Depuis la loi n° 2021-1104 du 22 août 2021, art. 159, un logement classé F ou G au DPE ne peut pas voir son loyer révisé, ni majoré au renouvellement, ni augmenté à la relocation (art. 17-1 III, art. 17-2 et art. 18 modifiés).

- **Date d'effet** : baux conclus, renouvelés ou tacitement reconduits à partir du 24 août 2022 en métropole, du 1er juillet 2024 en Guadeloupe, Martinique, Guyane, à La Réunion et à Mayotte (loi n° 2021-1104, art. 159 IV). Un meublé se reconduit chaque année à son échéance : le gel le rattrape à la première reconduction après ces dates.
- **Logement reclassé sans travaux** par le changement du coefficient de l'électricité (2,3 à 1,9 au 1er janvier 2026, arrêté du 13 août 2025, JO du 26 août 2025 ; 1,9 à 1,7 au 1er janvier 2027, arrêté du 19 août 2026, JO du 26 août 2026) : l'ADEME délivre une attestation gratuite de la nouvelle classe (art. 3 de chaque arrêté).
- **Le gel suit le bail, pas l'étiquette actuelle.** Réponse du ministre de la ville et du logement à la question écrite n° 12551 (Assemblée nationale, JO du 11 août 2026, p. 7530), lue le 12 novembre 2026 : « pour les baux conclus, reconduits ou renouvelés à compter du 24 août 2022, un classement F ou G exclut tout mécanisme de réévaluation du loyer [...]. Pour ces logements, la révision du loyer en cours de bail n'est donc pas possible, même si le logement n'est plus une passoire. Le loyer pourra être révisé à l'occasion du renouvellement du contrat (mais pas en cas de reconduction tacite), sur la base de l'attestation de changement d'étiquette ou d'un nouveau DPE valide prouvant que le logement n'est ni F ni G. Cette attestation devra être annexée au DPE initial qui doit être en cours de validité. » Donc : un bail conclu, reconduit ou renouvelé quand le logement était F ou G reste gelé jusqu'à son terme, y compris après une reconduction tacite. Le gel tombe à un **renouvellement** (en meublé, le bailleur propose de nouvelles conditions au moins 3 mois avant l'échéance et le locataire les accepte, art. 25-8 I) ou à un **nouveau bail**, avec l'attestation ou un nouveau DPE annexé. Une réponse ministérielle n'a pas force de loi et un juge peut lire le texte autrement. Aucun texte publié au JO entre le 11 août et le 12 novembre 2026 ne tranche autrement (recherche JORF sur Légifrance) ; kohenavocats.fr (octobre 2026) défend une lecture plus souple, contraire à cette réponse. En cas de litige, envoie vers l'ADIL.
- **Révision faite malgré le gel** : le locataire peut réclamer le trop-perçu dans le délai de prescription de 3 ans (art. 7-1).

## Le calcul avec le script

```
node scripts/revision-irl.mjs --help
node scripts/revision-irl.mjs --loyer 650 --trimestre 2 --date 2026-09-01
```

- `--loyer` : loyer hors charges en vigueur, en euros.
- `--trimestre` : le trimestre de l'IRL écrit au bail, de 1 à 4.
- `--date` : la date de révision, en général l'anniversaire, ou le jour de la demande si l'anniversaire est passé.

Le script embarque la série Insee (série 001515333) et rend les deux indices avec leur date de parution et leur source, le nouveau loyer et une phrase pour le courrier. Il répond `non_publie` si l'indice du trimestre n'est pas encore sorti (l'Insee publie vers le 15 du mois qui suit le trimestre) et `sans_hausse` si l'indice n'a pas monté.

Il **ne vérifie pas** la clause de révision, la classe DPE ni le délai d'un an : fais ces trois contrôles avant de le lancer. Il prend toujours l'indice d'un an plus tôt comme référence : si le bail cite une valeur d'indice différente (première révision), dis-le.

## Le bouclier de 2022 à 2024

Du 3e trimestre 2022 au 1er trimestre 2024, la variation annuelle de l'IRL était plafonnée à 3,5 % en métropole (loi n° 2022-1158 du 16 août 2022, art. 12, prolongée par la loi n° 2023-568 du 7 juillet 2023). Les valeurs publiées par l'Insee pour ces trimestres intègrent déjà le plafond : on les applique telles quelles.

## Le courrier

Une lettre simple ou un mail suffit en droit, mais une preuve de date compte pour le délai d'un an : recommandé, ou mail avec accusé de lecture gardé. Le courrier donne l'ancien loyer, les deux indices avec leur trimestre, le calcul, le nouveau loyer et sa date d'effet. Avec le MCP Locameublé, la révision se prépare dans l'app (fiche du bail) : elle refuse d'elle-même un logement F ou G et un indice non publié.

Outil en ligne : https://locameuble.fr/outils/revision-loyer-irl
