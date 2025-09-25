import { Grille } from "./grille.js";
import { Joueur } from "./joueur.js";
export declare class Partie {
    private grille;
    private joueurs;
    private joueurActuel;
    constructor();
    getGrille(): Grille;
    changerJoueur(): void;
    jouer(colonne: number): boolean;
    afficher(): void;
    getJoueurActuel(): Joueur;
}
//# sourceMappingURL=partie.d.ts.map