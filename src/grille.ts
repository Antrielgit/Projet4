export class Grille {
  private plateau: number[][];

  constructor(
    private lignes: number = 6,
    private colonnes: number = 7
  ) {
    this.plateau = Array.from({ length: lignes }, () =>
      Array(colonnes).fill(0)
    );
  }

  getPlateau(): number[][] {
    return this.plateau;
  }

  afficher(): void {
    console.log("\nPlateau actuel :");
    for (const ligne of this.plateau) {
      console.log(ligne.map(c => (c === 0 ? "." : c)).join(" "));
    }
    console.log("\n");
  }
}
