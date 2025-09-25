import { Partie } from "./partie.js";


const partie = new Partie();

console.log("🎮 Début de la partie !");
partie.jouer(3); // Joueur 1 joue dans la colonne 3
partie.jouer(3); // Joueur 2 joue dans la colonne 3
partie.jouer(2); // Joueur 1 joue dans la colonne 2

console.log("✅ Tests terminés !");
