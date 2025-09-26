## Structure du projet

### `grille.ts`
- Définit la **classe `Grille`**.
- Représente la grille de jeu sous forme d’un tableau à deux dimensions.
- **Méthodes principales** :
  - `getPlateau()` → retourne l’état actuel du plateau.
  - `afficher()` → affiche la grille dans la console (les cases vides sont représentées par `.`).

---

### `joueur.ts`
- Définit la **classe `Joueur`**.
- Chaque joueur possède :
  - un **id** (1 ou 2),
  - un **symbole** (`X` ou `O`).

---

### `partie.ts`
- Définit la **classe `Partie`**, cœur du jeu.
- Contient :
  - une **grille** (`Grille`),
  - deux **joueurs** (`Joueur`),
  - le **joueur actuel**.
- **Méthodes principales** :
  - `changerJoueur()` → passe au joueur suivant.
  - `jouer(colonne: number)` → insère un jeton dans une colonne si possible.
  - `verifierVictoire()` → détecte si un joueur a aligné 4 jetons.
  - `afficher()` → réaffiche la grille dans la console.
  - `getJoueurActuel()` → retourne le joueur qui doit jouer.

---

### `index.ts`
- Point d’entrée du programme.
- Utilise **prompt-sync** pour demander à l’utilisateur la colonne où jouer.
- **Boucle principale du jeu** :
  1. Affiche la grille.
  2. Demande au joueur actuel où placer son pion.
  3. Vérifie la validité du coup (colonne pleine ou invalide).
  4. Vérifie si un joueur gagne (`verifierVictoire()`).
  5. Sinon, passe au joueur suivant.
- **Fin de partie** :
  - Affiche un message de victoire 🎉 si un joueur aligne 4 jetons.
  - Affiche un match nul 🤝 si la grille est remplie.
