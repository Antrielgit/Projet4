import { Grille } from "./grille.js";
import { Joueur } from "./joueur.js";
export class Partie {
    grille;
    joueurs;
    joueurActuel; // "!" = sera défini dans le constructeur
    constructor() {
        this.grille = new Grille();
        this.joueurs = [new Joueur(1, "X"), new Joueur(2, "O")];
        this.joueurActuel = this.joueurs[0]; // "!" = pas undefined
    }
    getGrille() {
        return this.grille;
    }
    changerJoueur() {
        this.joueurActuel =
            this.joueurActuel.id === 1 ? this.joueurs[1] : this.joueurs[0];
    }
    jouer(colonne) {
        const plateau = this.grille.getPlateau();
        for (let i = plateau.length - 1; i >= 0; i--) {
            if (plateau[i][colonne] === 0) {
                plateau[i][colonne] = this.joueurActuel.id;
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
}
//# sourceMappingURL=partie.js.map