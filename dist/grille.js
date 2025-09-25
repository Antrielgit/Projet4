export class Grille {
    lignes;
    colonnes;
    plateau;
    constructor(lignes = 6, colonnes = 7) {
        this.lignes = lignes;
        this.colonnes = colonnes;
        this.plateau = Array.from({ length: lignes }, () => Array(colonnes).fill(0));
    }
    getPlateau() {
        return this.plateau;
    }
    afficher() {
        console.log("\nPlateau actuel :");
        for (const ligne of this.plateau) {
            console.log(ligne.map(c => (c === 0 ? "." : c)).join(" "));
        }
        console.log("\n");
    }
}
//# sourceMappingURL=grille.js.map