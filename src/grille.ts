export class Grille {
  private lignes: number;
  private colonnes: number;
  private plateau: number[][];

  constructor(lignes = 6, colonnes = 7) {
    this.lignes = lignes;
    this.colonnes = colonnes;
    this.plateau = Array.from({ length: lignes }, () => Array(colonnes).fill(0));
  }
