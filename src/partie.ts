import { Grille } from "./grille.js";
import { Joueur } from "./joueur.js";


export class Partie {
  private grille: Grille;
  private joueurs: Joueur[];
  private joueurActuel!: Joueur; // "!" = sera défini dans le constructeur

  constructor() {
    this.grille = new Grille();
    this.joueurs = [new Joueur(1, "X"), new Joueur(2, "O")];
    this.joueurActuel = this.joueurs[0]!; // "!" = pas undefined
  }

  getGrille(): Grille {
    return this.grille;
  }

  changerJoueur(): void {
    this.joueurActuel =
      this.joueurActuel.id === 1 ? this.joueurs[1]! : this.joueurs[0]!;
  }

  jouer(colonne: number): boolean {
    const plateau = this.grille.getPlateau();

    for (let i = plateau.length - 1; i >= 0; i--) {
      if (plateau[i]![colonne] === 0) {
        plateau[i]![colonne] = this.joueurActuel.id;
        return true;
      }
    }
    return false; // colonne pleine
  }

    afficher() {
    this.grille.afficher();
  }

  getJoueurActuel() {
    return this.joueurActuel;
  }

  verifierVictoire(): boolean {
  const plateau = this.grille.getPlateau();
  const lignes = plateau.length;
  const colonnes = plateau[0]!.length; // <-- ajoute !
  const joueur = this.joueurActuel.id;

  // Vérifie 4 en ligne dans toutes les directions
  const directions = [
    { dx: 1, dy: 0 },  // horizontal →
    { dx: 0, dy: 1 },  // vertical ↓
    { dx: 1, dy: 1 },  // diagonale ↘
    { dx: 1, dy: -1 }  // diagonale ↗
  ];

  for (let y = 0; y < lignes; y++) {
    for (let x = 0; x < colonnes; x++) {
      if (plateau[y]![x] !== joueur) continue;

      for (const { dx, dy } of directions) {
        let compteur = 1;

        for (let k = 1; k < 4; k++) {
          const nx = x + dx * k;
          const ny = y + dy * k;

          if (
            nx >= 0 &&
            nx < colonnes &&
            ny >= 0 &&
            ny < lignes &&
            plateau[ny]![nx] === joueur
          ) {
            compteur++;
          } else {
            break;
          }
        }

        if (compteur >= 4) return true;
      }
    }
  }

  return false;
}
}