---
name: locameuble
description: Tient la comptabilité d'une location meublée (LMNP, LMP) dans Locameublé par ses outils MCP. À utiliser quand quelqu'un demande son résultat, ce qui bloque sa clôture, d'importer un relevé bancaire, de classer ses lignes bancaires, d'encaisser un loyer, d'envoyer une quittance ou une relance, de poster un recommandé, de faire signer un bail ou un état des lieux, de classer une facture électronique reçue ou d'exporter sa liasse ou son FEC.
---

# Locameublé

Locameublé tient la comptabilité d'une location meublée et produit la liasse fiscale. Le serveur MCP `locameuble` expose un outil par commande de l'API, sous le même nom (`lister_biens`, `lire_resultat`).

La connexion agit pour un seul foyer : celui qui était ouvert quand la personne a autorisé l'application. Aucun outil ne prend d'identifiant de foyer. Réponds en français.

## Les pièges

- **Tous les montants sont en centimes.** `85000` vaut 850,00 €. Convertis avant d'afficher, et avant d'écrire.
- **Un exercice se désigne par son identifiant**, jamais par son année. `lister_exercices` donne chaque activité et ses exercices : prends l'identifiant de l'exercice de l'année demandée.
- **Rien ne part chez un locataire sans brouillon.** `preparer_envoi` crée la quittance ou l'avis d'échéance et rend l'aperçu du mail. Montre l'aperçu, attends un oui, puis `confirmer_envoi` avec l'`envoiId` reçu. Une invitation suit le même chemin : `preparer_invitation`, le oui, puis `inviter_membre`. Un renvoi aussi : `preparer_renvoi` avec l'id de la quittance, l'aperçu, le oui, puis `confirmer_envoi`. Une demande de signature pareil : `preparer_signature`, le oui, puis `envoyer_signature`.
- **La personne paie elle-même.** `confirmer_recommande` rend un lien de paiement par carte : donne-le, ne dis jamais que la lettre est partie. Rien n'est débité tant que l'imprimeur ne l'a pas acceptée.
- **Un choix irrévocable se pose à la personne.** `choisir_option_fiscale` (frais d'acquisition en charges ou amortis) ne se change plus : explique les deux options, et n'envoie `confirmation: true` qu'après son oui.
- **Une clôture se pose à la personne.** `demander_cloture` fige les écritures et crée une demande, sans clôturer. `confirmer_cloture` clôt l'exercice et `rouvrir_exercice` défait une clôture : montre le résultat et les contrôles, attends son oui explicite, puis envoie `confirmation: true`. Sans ce oui, rien ne part, et elle peut aussi confirmer dans l'app. `annuler_demande_cloture` retire une demande et rouvre la saisie. `cloturer_sur_chiffres_deposes` clôt une année passée sur sa liasse déposée (stock d'ARD par bien, déficits, résultat) : lis les montants dans la liasse avec la personne, une année après l'autre en partant de la plus ancienne, et attends son oui avant `confirmation: true`.
- **Une écriture se corrige à sa source.** `modifier_ecriture` et `supprimer_ecriture` ne touchent que les écritures saisies à la main. Un loyer encaissé s'annule par `annuler_encaissement` ; une ligne bancaire déjà classée ou un import se corrige dans l'app.
- **Une longue liste s'arrête à 100 lignes.** Quand `total` dépasse ce que tu as reçu, resserre le filtre (compte, période, article) avant de conclure.
- **`exporter` demande la Déclaration payée** pour l'exercice, que ce soit la liasse, le FEC ou l'aide à la 2042 C PRO (`aide-2042`). Sinon l'erreur `payment_required` dit quoi choisir dans l'app : transmets son message, n'insiste pas.

## Où en est mon exercice

1. `lister_exercices`, puis l'identifiant de l'exercice.
2. `lire_resultat` : chaque montant porte sa trace, la règle fiscale et les écritures qui l'ont produit. Cite la trace quand on te demande d'où vient un chiffre.
3. `lister_controles` : les bloquants et les points « à valider » empêchent la clôture, les observations non. Présente-les dans cet ordre.
4. `lire_tresorerie` donne l'argent passé en banque chaque mois et par catégorie, net compris. Ce n'est pas le résultat, qui suit les écritures : ne donne jamais l'un pour l'autre.

Le contrôle LM-C-070 (des écritures datées de l'année suivante) se règle d'un coup par `deplacer_vers_annee_suivante`, qui ouvre l'année suivante au besoin et ne supprime rien.

## Importer un relevé bancaire

1. `lister_comptes` pour trouver le compte, avec son nombre de lignes à classer.
2. `importer_releve` avec le fichier : `texte` pour un CSV ou un OFX, `pdf` en base64 pour un relevé PDF. Avec `essai`, il rend l'aperçu sans rien écrire. Une ligne déjà importée n'entre pas deux fois (`dejaPresentes`), donc réimporter un fichier est sans risque. Une ligne de même date et même montant qu'une ligne venue d'un autre fichier, le PDF du même mois par exemple, est écartée (`ecartees`).
3. Dis combien de lignes sont entrées, combien ont été écartées et combien restent à classer. `lister_lignes_bancaires` avec `etat` à `a-classer` les montre.

`lister_tiers` regroupe les lignes par qui elles paient ou d'où elles viennent : les flux des 12 derniers mois, l'article habituel et la prochaine date d'un prélèvement régulier.

## Classer les lignes bancaires

1. `proposer_revue` fait lire les lignes à classer par les règles du foyer, puis par l'IA. Chaque lecture de l'IA compte sur le quota.
2. `lister_revue` rend le lot des propositions sûres et celles à regarder une par une. Montre-les, puis `valider_revue` avec les lignes que la personne accepte, ou `corriger_revue` pour une proposition fausse.
3. Pour une ligne seule : `suggerer_classement`, puis `classer_ligne` avec l'article et le bien, ou `ignorer_ligne` quand elle ne relève pas de la location. Un crédit qui paie un loyer passe par `rapprocher_loyer`, jamais par `classer_ligne`. Une ligne qui paie plusieurs biens (un avis de taxe foncière, un appel de syndic) prend `repartition` à la place du bien : une part par bien, et au plus une part `perso` pour ce que la personne a payé pour d'autres. Les parts font la ligne au centime près. La même commande reclasse une ligne déjà classée tant que son exercice est ouvert.
4. `classer_ligne` rend les lignes semblables encore à classer : `classer_lignes` les classe d'un coup, et `creer_regle_depuis_ligne` classe les prochaines toute seule. `lister_regles` et `enregistrer_regle` tiennent les règles.

## Les loyers et les quittances

1. `lister_loyers` pour un mois (`YYYY-MM`, le mois en cours par défaut) ou pour un bail. Avec `statut` (`en_retard`, `a_encaisser`, `encaisse`) et sans mois, il lit tout le foyer : les loyers en retard en un appel.
2. `marquer_loyer_recu` enregistre un règlement. Sans montant, il encaisse le reste dû : donne le montant dès que le règlement est partiel.
3. Quand le virement est en banque, `rapprocher_loyer` avec le `loyerId` et le `ligneId` du crédit l'encaisse et classe la ligne. `lister_rapprochements_loyers` donne les paires probables.
4. `preparer_envoi`, l'aperçu, le oui de la personne, puis `confirmer_envoi`. Un impayé suit le chemin plus bas. `regler_signature_bailleur` pose l'image de la signature du bailleur sur les quittances émises ensuite.
5. Un règlement saisi à tort (mauvaise date, mauvais montant, mauvais loyer) part avec `annuler_encaissement`, après le oui de la personne : l'`ecritureId` qu'a rendu `marquer_loyer_recu` ou `rapprocher_loyer` pour un seul règlement, rien pour tous ceux du loyer. Le virement rapproché revient à classer, une quittance en brouillon est retirée. Une quittance déjà envoyée, un exercice clôturé ou un loyer perdu le refusent. Réencaisse ensuite avec la bonne date ou le bon montant.

`marquer_loyer_perdu` passe en charge un loyer qui ne sera jamais payé. `modifier_loyer` corrige le montant dû d'une seule échéance, quand le loyer convenu ce mois-là n'est pas celui du bail (un prorata que le locataire a payé autrement, une remise) : redis l'ancien et le nouveau montant, et attends le oui de la personne. Il refuse un montant sous ce qui est déjà reçu.

## Un loyer impayé

1. `lister_loyers` avec `statut` à `en_retard`.
2. `preparer_envoi` type `relance` rédige le palier du jour : rappel dès 3 jours de retard, relance dès 10, dernier rappel dès 20, mise en demeure dès 30. Un palier sauté ne part pas après coup. Un garant personne physique reçoit `lettre_garant` entre 10 et 25 jours de retard. L'aperçu, le oui, puis `confirmer_envoi`.
3. La mise en demeure et la lettre au garant se postent aussi en recommandé avec AR : `preparer_recommande` avec l'`envoiId` rend une lettre par destinataire, son prix et ce qui bloque encore. Fais corriger les adresses, puis `confirmer_recommande` et donne le lien de paiement. `lister_recommandes` retrouve les lettres d'un loyer ou d'un bail, `lire_recommande` suit chacune jusqu'à l'accusé de réception ; `annuler_recommande` retire un brouillon, ou une lettre transmise à l'imprimeur depuis moins de 15 minutes.
4. Un échéancier convenu, Visale ou un commissaire de justice saisi : `regler_suspension_relances` avec le motif met les relances en pause, les quittances continuent. `motif: null` les reprend.

## Le bail et ses signataires

- Avant de faire signer, `modifier_contrat_bail` remplit ce que le contrat type demande en plus des conditions (mandataire, encadrement, travaux, clauses). La description du logement va dans `modifier_bien`.
- Les rapports de diagnostic (DPE, amiante, plomb, électricité, gaz, état des risques, bruit, surface) se rangent sur le bien avec `ajouter_diagnostic`, et `lire_bien` les liste. Un DPE d'avant juillet 2021 n'a pas de numéro ADEME : `modifier_bien` prend la référence du diagnostiqueur dans `dpeNumero` et sa date dans `dpeEtabliLe`, et la fin de validité légale s'en déduit (31 décembre 2024 au plus tard).
- Un couple qui signe ensemble : `ajouter_locataire_bail` ou `retirer_locataire_bail`. Une colocation le refuse : ses parts passent par `regler_parts_bail`, et un nouveau colocataire signe un nouveau bail.
- Un locataire qui change de logement dans le foyer : `transferer_locataire` termine son bail à `dateFin` et en crée un sur l'autre bien.

## Faire signer

1. `telecharger_document` rend le PDF que Locameublé rédige, sans rien enregistrer : montre-le, et quand `document` est `null`, `refus` dit quoi compléter. L'attestation de loyer CAF (`attestation_caf`) sort de là aussi, elle ne se signe jamais en ligne.
2. `preparer_signature` avec le même document crée le brouillon. L'ordre compte : le bail d'abord, la caution seulement quand toutes les parties ont signé le bail, l'état des lieux et l'inventaire seulement une fois figés.
3. Le oui de la personne, puis `envoyer_signature` : chaque signataire reçoit son lien, valable 30 jours.
4. `lister_signatures` et `lire_signature` disent qui a signé. `relancer_signataire` renvoie un lien, une fois par jour au plus. Pour corriger un document ou un signataire, `annuler_signature` puis une nouvelle demande.
5. Une fois la demande scellée, `lire_document` avec `finalDocumentId` donne le PDF signé. En cas de litige, `exporter_dossier_tribunal` rend le zip avec la preuve et le journal.

## L'état des lieux

1. `lister_etats_des_lieux` pour le bail. Liste vide : `creer_etat_des_lieux` crée l'entrée au premier enregistrement, jamais pour montrer un écran vide.
2. `modifier_etat_des_lieux` remplit le brouillon pièce par pièce. Une photo se dépose par `ajouter_photo_etat_des_lieux`, puis son id va dans `photos` de la pièce ou de l'élément.
3. `lire_etat_des_lieux` dit ce qui manque encore. Quand plus rien ne manque, montre le document, attends le oui et envoie `figer_etat_des_lieux` avec `confirmation: true`. Plus rien n'y change ensuite, puis il se fait signer.
4. Le locataire demande un complément dans les 10 jours, ou le premier mois de chauffe : `ajouter_complement_etat_des_lieux`, après son oui, à côté de l'entrée figée.
5. À la sortie, `commencer_etat_des_lieux_sortie` reprend l'entrée figée ligne par ligne. Remplis l'état de sortie, fige, puis `restituer_depot`.

## Les factures électroniques reçues

1. Une fois par activité : `preparer_facturation_electronique`, la personne relit le brouillon, puis `activer_facturation_electronique` après son oui. Les factures des fournisseurs arrivent ensuite d'elles-mêmes.
2. `lister_factures_recues`, puis `lire_facture_recue` pour sa proposition et la ligne bancaire qui l'a payée.
3. `classer_facture_recue` la comptabilise, par cette ligne quand la revue en a trouvé une, sinon comme une dépense que la ligne viendra relier. `ignorer_facture_recue` met de côté une facture hors location.

## Le reste du foyer

Les biens et leurs immobilisations, les locataires et les baux, les emprunts, la reprise de la dernière liasse, les réglages de l'année et du foyer : chacun a ses outils, nommés d'après ce qu'ils font (`lire_bien`, `creer_bail`, `terminer_bail`, `confirmer_reprise`). Lis la fiche avant de la modifier, et redis ce qui change avant d'écrire.

Un bail déjà fini se crée avec sa `dateFin` dans `creer_bail`. Sans elle, `loyersPassesRecus` marque reçu chaque mois jusqu'à aujourd'hui, et chaque mois en trop serait à annuler un par un avec `annuler_encaissement`. L'IRL va en centièmes : `irlIndice` 14577 pour 145,77.

## Le dépôt de garantie

`enregistrer_depot_recu` note la date et le montant versés. Le dépôt reste hors des comptes. À la sortie, `restituer_depot` prend ce qui est rendu et chaque retenue avec son libellé (Ménage, Dégradations). Chaque retenue devient une recette de l'année de la restitution, et rendu plus retenues ne dépassent jamais le dépôt reçu. Une retenue pour loyer impayé s'encaisse sur le loyer avec `marquer_loyer_recu`, sinon le loyer compte deux fois. `lire_bail` donne l'état du dépôt, ce qui reste dû au locataire et les dates limites : un mois après la fin du bail quand l'état des lieux de sortie est conforme, deux mois sinon. `annuler_restitution` retire les retenues tant que l'exercice est ouvert.

## Saisir une écriture

`ajouter_ecriture` crée une recette ou une dépense dans un exercice ouvert. Le montant suit le sens de l'article, et il est négatif pour un remboursement. Redis le montant en euros et l'article choisi avant d'écrire.

`modifier_ecriture` corrige une écriture saisie : ne donne que les champs qui changent. Un ticket lu par `lire_justificatif` se joint dès la saisie avec `documentId` dans `ajouter_ecriture`. `joindre_justificatif` joint une pièce à une écriture déjà là, une pièce libre du coffre ou un fichier en base64, et `detacher_justificatif` la rend au coffre. La facture d'une ligne bancaire se joint avec `joindre_justificatif_ligne`, même avant de classer la ligne : elle passe à l'écriture quand la ligne est classée, et `detacher_justificatif_ligne` la retire. Un ticket sans cible, une photo prise sur le téléphone par exemple, se dépose avec `ajouter_justificatif` : il est lu, puis `lister_revue` le propose sur la ligne bancaire qu'il paie. `lire_document` donne un lien d'un jour vers une pièce ou le PDF d'une quittance : il s'ouvre sans connexion, ne le donne qu'à la personne.
