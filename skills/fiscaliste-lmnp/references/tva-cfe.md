# TVA et CFE

TVA vérifiée le 12 novembre 2026, CFE le 17 novembre 2026. Le seuil d'exonération de CFE est celui du moteur Locameublé (`regles/2025.ts`, `cfeExonerationRecettes`). La TVA n'est pas calculée par le moteur ni par les scripts. Ses textes (261 D, 279, 293 B, ordonnances de recodification) ont été lus sur Légifrance le 12 novembre 2026 ; relis-les pour une question qui porte sur 2027 ou après.

## La CFE

### Qui paie

Tout loueur en meublé, LMNP ou LMP, au micro comme au réel, même pour un seul studio. L'article 1447 du CGI répute professionnelle toute location d'immeuble sauf la location nue d'habitation, et le Conseil d'État tient cette présomption pour irréfragable (CE, 28 juillet 2017, n° 390092). Rappel : réponse ministérielle n° 11507, JO du 17 février 2026 ; BOI-IF-CFE-10-30-10-50.

### Combien

Un logement loué à l'année est à la disposition du locataire, pas du loueur : sans autre local, le loueur paie la **cotisation minimum**, base minimum votée par la commune multipliée par son taux (CGI art. 1647 D). La base dépend des recettes de l'avant-dernière année (N-2, CGI art. 1467 A).

**Seul l'avis donne le montant, et même l'existence de la CFE.** La commune ou l'EPCI vote la base dans la tranche et le taux, décide des exonérations du 1459, 3°, et le SIE applique l'exonération des 5 000 € sur le chiffre d'affaires qu'il détient. Ne dis jamais « vous devez X € » sans l'avis : dis de le lire dans l'espace professionnel impots.gouv.fr avant le 15 décembre. Un avis à 0,00 € (« Vous n'avez rien à payer ») arrive souvent.

**Lire un avis à 0 €.** La ligne « 10 - Chiffre d'affaires retenu pour la base minimum » donne la tranche du CA que le SIE a retenu, la ligne « 12 » la base de la commune, et « 13 - Bases exonérées MIN » dit que la cotisation minimum est exonérée au titre des 5 000 € (art. 1647 D, I). Ligne 10 à « <= 10 000 » alors que les recettes de N-2 dépassent 10 000 € : le SIE n'a pas le bon CA (recettes absentes ou mal reportées sur la 2031, CA non transmis). Aucun texte de 2024, 2025 ou 2026 n'exonère la base minimum d'un meublé au-dessus de 5 000 € : l'exonération tient alors à la seule donnée du SIE. Il peut rectifier la CFE jusqu'à la fin de l'année qui suit celle de l'imposition (LPF art. L174). Dis-le à la personne sans l'alarmer : son avis fait foi tant qu'il n'est pas rectifié, et Locameublé note le montant de l'avis tel quel.

Barème des bases minimum pour la CFE 2026 (recettes HT de 2024), service-public.gouv.fr F23547, qui écrit 250 à 597 € pour la première tranche quand economie.gouv.fr écrit 247 à 589 € ; la base exacte est celle de la ligne 12 de l'avis :

| Recettes de référence | Base minimum                      |
| --------------------- | --------------------------------- |
| 5 000 € ou moins      | Exonéré                           |
| 5 001 à 10 000 €      | 250 à 597 €                       |
| 10 001 à 32 600 €     | 250 à 1 194 €                     |
| 32 601 à 100 000 €    | 250 à 2 509 €                     |
| Au-delà               | Jusqu'à 4 183 €, puis par tranche |

Plusieurs logements : recettes additionnées, une seule cotisation minimum, au lieu du principal établissement (BOI-IF-CFE-20-20-40-10 § 50 et 60). Non-résident : commune du logement à la plus forte valeur locative (§ 90).

En meublé de tourisme, si le loueur garde la disposition du logement entre deux séjours, le bien peut entrer dans sa propre base, à la valeur locative. Calcul au cas par cas.

### Les exonérations

- **Recettes de référence de 5 000 € ou moins**, ramenées à douze mois (CGI art. 1647 D, I ; BOI-IF-CFE-20-20-40-10 § 133 et 170). En vigueur depuis la CFE 2019, inchangé depuis : la loi de finances pour 2026 (loi n° 2026-103, art. 44) ne touche que le VI de l'article 1478, et la loi Le Meur (loi n° 2024-1039) ne modifie ni le 1459 ni le 1647 D.
- **L'année de création**, sans CFE (CGI art. 1478, II), le 1447-C-SD partant avant le 31 décembre. La deuxième année, la base est réduite de moitié et le seuil de 5 000 € se juge sur la première année ramenée à douze mois (service-public F23547 ; BOI-IF-CFE-20-50-10 § 1 et 20).
- **Une location accidentelle d'une partie de son habitation**, sans caractère périodique (CGI art. 1459, 1° ; BOI-IF-CFE-10-30-10-50 § 50).
- **Une chambre louée dans sa résidence principale** au locataire dont c'est la résidence principale, à loyer raisonnable : 159 €/m² par an hors Île-de-France et 215 €/m² en Île-de-France pour 2026 (CGI art. 1459, 2° ; impots.gouv.fr, « Je fais de la location meublée. Dois-je payer de la CFE ? »).
- **Tout ou partie de son habitation personnelle louée en meublé de tourisme, gîte ou chambre d'hôtes**, sauf délibération contraire de la commune ou de l'EPCI (CGI art. 1459, 3° ; BOI-IF-CFE-10-30-30-50). Cela dépend du vote local : ne conclus pas sans l'avis ou la délibération.

L'avis est mis en ligne dans l'espace professionnel impots.gouv.fr, à payer au plus tard le 15 décembre ; au-delà de 3 000 € de CFE, un acompte de 50 % tombe en juin (entreprendre.service-public.gouv.fr F23547, vérifié le 2 avril 2026 ; CGI art. 1679 quinquies). La CFE est une charge déductible au réel (CGI art. 39, 1-4°). Dans Locameublé, le montant de l'avis se note par année avec `modifier_reglages_annee` (`avisCfe` en centimes, 0 pour « rien à payer ») : la tâche d'accueil et le contrôle LM-C-056 s'en tiennent alors à l'avis.

## La TVA

### Le principe : exonérée

La location de logements meublés est **exonérée de TVA** (CGI art. 261 D, 4°). Le loueur à l'année ou en meublé de tourisme sans services ne facture pas de TVA et ne récupère pas celle qu'il paie : il amortit et déduit le TTC.

### Les exceptions : soumises à TVA

Texte de l'art. 261 D, 4°, en vigueur depuis le 31 décembre 2023 (loi n° 2023-1322, LF 2024, art. 84), lu sur Légifrance le 12 novembre 2026 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000048827285

1. **Le b, l'hébergement de type hôtelier** : séjours de **30 nuitées au plus** (reconductions possibles), avec un local meublé et **au moins trois** des quatre prestations suivantes : petit-déjeuner, nettoyage régulier des locaux, fourniture du linge de maison, réception de la clientèle, « même non personnalisée ». Les deux conditions sont cumulatives.
2. **Le b bis, la location meublée résidentielle avec services** : une location meublée à usage résidentiel, hors du cadre du b (donc sans la limite de 30 nuitées), assortie d'au moins trois de ces mêmes quatre prestations.
3. **Le c, la location à un exploitant** : la location de locaux nus, meublés ou garnis à l'exploitant d'un établissement d'hébergement qui remplit les conditions du b ou du b bis. Exclue : la location à l'exploitant d'un logement-foyer de l'art. L. 633-1 du CCH dont l'activité n'ouvre pas droit à déduction. C'est le schéma des résidences services : le propriétaire signe un bail commercial, facture la TVA sur les loyers et récupère celle payée sur l'achat du neuf.

Taux de 10 % sur l'hébergement du b et la location du b bis (CGI art. 279, a, version en vigueur depuis le 1er mars 2026 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053562872).

### Le changement de code au 1er janvier 2027

Les articles de TVA du CGI (261 D, 279, 293 B...) passent au livre II du code des impositions sur les biens et services (CIBS) le **1er janvier 2027**, pas le 1er septembre 2026 comme prévu d'abord : l'ordonnance n° 2026-671 du 27 juillet 2026, art. 17, a reporté la date fixée par l'art. 49 de l'ordonnance n° 2025-1247 du 17 décembre 2025 (JORF du 28 juillet 2026 : https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054497160). C'est une recodification à droit constant : les renvois aux anciens articles valent renvois aux articles du CIBS qui les reprennent (ordonnance n° 2025-1247, art. 46, I, 1°), et la doctrine sur les anciens articles vaut pour les nouveaux (même art. 46, III, ajouté par l'ordonnance n° 2026-671, art. 17). Pour 2026, cite le CGI ; à partir de 2027, cherche l'article CIBS correspondant dans la table de concordance de Légifrance (Autour de la loi > Codification > Tables de concordance).

### La franchise en base

Un loueur soumis à TVA qui ne dépasse pas le seuil de franchise ne la facture pas (CGI art. 293 B, I). Pour l'hébergement, le seuil est celui du chiffre d'affaires total, comme pour les ventes : **85 000 €** sur l'année civile précédente, **93 500 €** sur l'année en cours. Le seuil des services, 37 500 € et 41 250 €, exclut expressément « les prestations d'hébergement ».

Ces seuils viennent de la loi n° 2025-1044 du 3 novembre 2025 « visant à garantir un cadre fiscal stable, juste et lisible pour nos micro-entrepreneurs et nos petites entreprises », art. 1, qui les rétablit **à compter du 1er mars 2025** (art. 1, III, A) et efface le seuil unique de 25 000 € qu'avait prévu la LF 2025 (loi n° 2025-127, art. 32). Art. 293 B en vigueur depuis le 1er mars 2025, lu sur Légifrance le 12 novembre 2026 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000052488142

### Les pièges

- **Revendre un bien acheté avec TVA récupérée** : si l'activité taxable s'arrête dans les 20 ans, une partie de la TVA récupérée se rembourse, par vingtièmes (CGI ann. II, art. 207). Le cas typique : sortie du bail commercial d'une résidence services, puis location vide ou revente à un particulier.
- **Ajouter des services** à un meublé de tourisme (ménage, linge, accueil) peut faire basculer dans la para-hôtellerie. Le loueur doit alors collecter la TVA dès qu'il dépasse la franchise.
- **Ne jamais compter la TVA dans les recettes du test LMP** comme si c'était du HT : le test se fait sur les recettes TTC (BOI-BIC-CHAMP-40-10 § 110), l'exonération 151 septies sur des recettes HT.

Toute question de TVA sur un cas réel (para-hôtellerie, résidence services, régularisation) va vers un expert-comptable : le moteur et les scripts ne la calculent pas.

## La facture électronique

Un LMNP sans TVA n'émet aucune facture électronique et ne transmet pas ses loyers. Depuis le 1er septembre 2026, il doit pouvoir **recevoir** les factures électroniques de ses fournisseurs, par une plateforme agréée qu'il désigne une fois. Sanctions : mise en demeure à 3 mois, puis amende de 500 €, puis 1 000 €, et 1 000 € de plus par période de 3 mois (CGI art. 1737, IV bis, lu sur Légifrance le 12 novembre 2026 : https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000053546686). Guide : `facture-electronique-lmnp`.
