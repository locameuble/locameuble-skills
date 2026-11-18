# Skills Locameublé : location meublée en France

Trois skills d'agent pour la location meublée (LMNP, LMP), en français, par l'équipe de [Locameublé](https://locameuble.fr). Elles marchent dans Claude Code, sur claude.ai et dans tout agent qui lit le format `SKILL.md`.

| Skill | Ce qu'elle fait | Compte requis |
| --- | --- | --- |
| [`fiscaliste-lmnp`](skills/fiscaliste-lmnp/SKILL.md) | Fiscalité du meublé : micro-BIC ou réel, amortissement et article 39 C, déficit et ARD, liasse 2031 et 2033, 2042 C PRO, passage en LMP, plus-value, CFE, TVA, meublé de tourisme, chambre louée chez soi (35 bis), rentabilité et frais de notaire. Règles sourcées (CGI, BOFiP) et calculs par scripts Node. | Non |
| [`gestion-locative-meublee`](skills/gestion-locative-meublee/SKILL.md) | Gestion d'un meublé : bail meublé, bail mobilité, bail étudiant, loyer et révision IRL, zone tendue et encadrement des loyers commune par commune, dépôt de garantie, état des lieux et mobilier obligatoire, congé, impayés, DPE, location saisonnière. Deux modèles de bail. | Non |
| [`locameuble`](skills/locameuble/SKILL.md) | Tient la comptabilité dans Locameublé par son serveur MCP : résultat, import de relevé, classement des lignes, loyers, quittances, recommandés, signature, clôture, export de la liasse ou du FEC. | Oui |

Les deux premières fonctionnent seules, sans compte ni réseau : chaque réponse s'appuie sur des références datées et sur des scripts (`node scripts/<nom>.mjs --help`) qui font les calculs : le modèle ne calcule rien de tête.

## Installer

Dans Claude Code, le dépôt est une marketplace de plugins :

```
/plugin marketplace add locameuble/locameuble-skills
/plugin install locameuble@locameuble
```

Pour une seule skill, copiez son dossier dans `~/.claude/skills/` (ou `.claude/skills/` d'un projet) :

```
git clone https://github.com/locameuble/locameuble-skills
cp -R locameuble-skills/skills/fiscaliste-lmnp ~/.claude/skills/
```

Sur claude.ai, zippez le dossier d'une skill et ajoutez-le dans Réglages, Capacités, Skills. Pour la skill `locameuble`, ajoutez aussi un connecteur personnalisé avec l'adresse `https://app.locameuble.fr/mcp`.

## La skill `locameuble` et le serveur MCP

Au premier appel d'un outil, Claude ouvre `app.locameuble.fr` : connectez-vous avec votre code e-mail, vérifiez le foyer affiché et cliquez sur Autoriser. La connexion agit pour ce foyer seulement. Un envoi au locataire passe toujours par un brouillon que vous validez, et la clôture ne part qu'après votre oui explicite.

Le mode d'emploi est sur https://locameuble.fr/guides/connecter-claude-ou-chatgpt.

## Limites

Ces skills aident à décider et à préparer. Elles ne remplacent pas un expert-comptable ni un avocat, et ne font pas de consultation juridique personnalisée. Les règles sont à jour à la date `last_updated` de chaque `SKILL.md` ; au-delà de 6 mois, l'agent est invité à vérifier en ligne avant de répondre. Les exemples chiffrés sont fictifs.

Une erreur, une règle qui a changé ? Ouvrez une issue ou écrivez à hello@locameuble.fr.

## Licence

MIT, voir [LICENSE](LICENSE).
