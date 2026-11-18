# Le réel : charges et amortissement par composants

Vérifié le 12 novembre 2026. Durées et parts reprises du moteur Locameublé (`src/lib/fiscal/regles/articles.ts`, `profils.ts`, `amortissement.ts`).

## Ce qui se déduit l'année de la dépense

Au réel, une charge engagée pour l'activité et justifiée se déduit l'année où elle est due (CGI art. 39, 1).

| Charge                                                                    | Source                                                 |
| ------------------------------------------------------------------------- | ------------------------------------------------------ |
| Intérêts d'emprunt, assurance emprunteur, frais de dossier et de garantie | CGI art. 39, 1-1° quater (frais d'emprunt) et 39, 1-1° |
| Taxe foncière (hors taxe d'enlèvement des ordures refacturée), CFE        | CGI art. 39, 1-4°                                      |
| Charges de copropriété non récupérées sur le locataire                    | CGI art. 39, 1-1°                                      |
| Assurance propriétaire non occupant, garantie loyers impayés              | CGI art. 39, 1-1°                                      |
| Entretien, réparations, petit équipement                                  | CGI art. 39, 1-1°                                      |
| Honoraires de gestion, d'agence, de comptabilité, frais bancaires         | CGI art. 39, 1-1°                                      |

Jamais déductible : le **capital** remboursé de l'emprunt. Il est financé par l'amortissement, pas par une charge.

### Le petit équipement

Un meuble, un appareil ou un outil de **500 € HT ou moins** peut passer en charge l'année de l'achat (BOI-BIC-CHG-20-30-10 § 20). Exception : le premier ameublement d'un logement s'amortit, quelle que soit la valeur de chaque élément (même BOFiP, § 30). Un loueur sans TVA compare le montant TTC payé au seuil, faute de HT récupérable : c'est la lecture du moteur, qui compare le HT quand la facture en porte un.

### Réparation ou amélioration

Le montant ne compte pas : seule la nature des travaux décide. Remettre en état ce qui existe est une charge. Ajouter, agrandir ou remplacer un composant entier (toiture, installation électrique, cuisine) s'immobilise et s'amortit (CGI ann. II, art. 15 bis ; BOI-BIC-CHG-20-20-10).

### Les frais d'acquisition

Droits de mutation, émoluments du notaire, frais de publicité, commission d'agence payée par l'acheteur : deux options (CGI ann. III, art. 38 quinquies ; BOI-BIC-CHG-20-20-10 § 140 à 170).

- **En charge** l'année d'entrée du bien dans l'activité. Souvent un déficit, qui ne vit que dix ans (voir `deficits-ard.md`).
- **Ajoutés au prix**, amortis avec lui. La part qui tombe sur le terrain ne se déduit jamais.

Le choix vaut pour tous les biens présents et futurs, et ne se reprend pas. Il se fait par l'écriture de la première année.

## L'amortissement

Le logement (hors terrain), les travaux immobilisés et le mobilier s'amortissent en ligne droite sur leur durée d'usage (CGI art. 39, 1-2°). La dotation de la première année est au prorata du temps, en jours, sur une année de 360 jours (BOI-BIC-AMT-20-10 § 240).

### Par composants

Un immeuble se décompose en composants à durées différentes (CGI ann. II, art. 15 bis). Le terrain ne s'amortit pas. Quand un composant a fini de s'amortir, la dotation baisse et le résultat imposable monte d'autant.

Profil « Standard » du moteur, pour un logement acheté terrain compris :

| Composant               | Part du prix | Durée par défaut | Bornes acceptées |
| ----------------------- | ------------ | ---------------- | ---------------- |
| Terrain                 | 15 %         | non amorti       |                  |
| Gros œuvre              | 45 %         | 75 ans           | 50 à 80 ans      |
| Installation électrique | 6 %          | 20 ans           | 10 à 20 ans      |
| Étanchéité, façade      | 7 %          | 25 ans           | 25 à 30 ans      |
| Toiture                 | 8 %          | 25 ans           | 25 à 30 ans      |
| Aménagements intérieurs | 19 %         | 12 ans           | 10 à 20 ans      |

Ces parts viennent de l'**usage** de la profession, et aucune loi ne fixe 15 % de terrain. En ville dense, un acte ou une estimation peut justifier une part différente. Garde la ventilation justifiable (acte, estimation, base de l'impôt foncier) et explique-la. La durée de 75 ans du gros œuvre est dans le haut de la fourchette usuelle ; elle donne une dotation plus faible et plus prudente.

Pour les installations et agencements (électricité, plomberie, chauffage, aménagements), le BOFiP admet une durée de 10 à 20 ans (BOI-BIC-AMT-10-40-10 § 80). Le moteur accepte donc 10 ans pour chacun, et 20 ans au plus. L'installation électrique en est une, y compris le composant acheté avec le logement : 20 ans au plus. Amortir plus lentement que l'usage fait perdre la différence pour de bon (CGI art. 39 B), elle ne se rattrape pas plus tard.

Une durée trop longue ramenée en cours de route ne rattrape pas les années closes : l'exercice ouvert répartit la base restante sur le temps qui reste au plan (PCG art. 214-14). Un composant de 6 000 € mis en location le 1er juillet 2021 sur 30 ans a 900 € de cumul fin 2025 ; ramené à 20 ans, il lui reste 5 100 € sur 15 ans et demi, soit 329,03 € par an jusqu'au 30 juin 2041.

Profil « Résidence principale ou sous-location » : ni terrain ni gros œuvre à l'actif, 100 % en aménagements sur 12 ans. Aucun texte ne le prévoit : c'est une lecture Locameublé.

### Mobilier et équipements

| Élément                 | Durée par défaut | Bornes  |
| ----------------------- | ---------------- | ------- |
| Cuisine équipée         | 10 ans           | 5 à 15  |
| Mobilier                | 7 ans            | 5 à 10  |
| Literie                 | 5 ans            | 3 à 10  |
| Électroménager          | 5 ans            | 3 à 10  |
| Audiovisuel             | 5 ans            | 3 à 7   |
| Informatique            | 3 ans            | 3 à 5   |
| Plomberie, chauffage    | 15 ans           | 10 à 20 |
| Aménagements extérieurs | 15 ans           | 10 à 20 |

Le plan se calcule avec `scripts/amortissement.mjs` ou l'outil https://locameuble.fr/outils/tableau-amortissement-lmnp.

### Usage personnel

Un bien occupé par son propriétaire une partie de l'année (résidence secondaire louée l'été) : la dotation déductible baisse au prorata de l'usage personnel, la dotation comptable non. Même logique pour les charges.

## Le plafond de l'article 39 C

L'amortissement d'un bien loué **ne peut ni créer ni augmenter un déficit**. Il se déduit dans la limite des loyers acquis moins les autres charges afférentes au bien (CGI art. 39 C, II, 2 ; BOI-BIC-AMT-20-40-10-20). Ce qui dépasse devient de l'amortissement réputé différé (ARD), reportable sans limite de durée (CGI art. 39 C, II, 3). Le calcul et l'ordre d'imputation sont dans `deficits-ard.md`.

Deux précisions que le moteur applique :

- Le plafond s'apprécie sur l'ensemble des biens loués du foyer (BOI-BIC-AMT-20-40-10-20 § 40 et 100).
- Les frais généraux de l'activité (comptabilité, frais juridiques, domiciliation) ne réduisent pas le plafond (même BOFiP, § 70). Ils peuvent donc créer un déficit.

## Le projet de loi de finances 2027 : rien n'est voté

Tel que déposé le 1er octobre 2026, l'article 7 du PLF 2027 (n° 3210) prévoit :

- amortissement des locaux déductible à 2,5 % par an, dans la limite de 7 000 € par foyer ;
- 1,5 % et 5 000 € pour un meublé de tourisme ;
- fin du report de l'ARD pour les exercices clos en 2027, avec un stock fin 2026 utilisable jusqu'en 2036, dans la limite de la moitié du résultat chaque année.

État au 12 novembre 2026 : les députés ont bien supprimé le volet LMNP de l'article 7 en séance le 30 octobre 2026, mais ce vote est tombé. Le 4 novembre 2026, l'Assemblée a rejeté la première partie, et le texte entier est considéré comme rejeté en première lecture (dossier législatif du Sénat, pjlf2027). Le Sénat repart donc du texte déposé par le gouvernement, article 7 et plafond compris. **Relis le dossier du Sénat avant d'en parler : son examen peut changer l'article.** Dans tous les cas, l'article 39 C est inchangé depuis 2015 et rien de ce plafond ne s'applique tant que la loi de finances n'est pas publiée au Journal officiel.

Sources : PLF 2027, art. 7 ; CGI art. 39 C (Légifrance, version en vigueur) ; loi n° 2026-103 du 19 février 2026 de finances pour 2026, qui n'a pas modifié l'article 39 C.
