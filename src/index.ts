import { Partie } from "./partie.js";

console.log("🎮 Début de la partie !");

const partie = new Partie();

partie.getGrille().afficher();

partie.jouer(3); // Joueur 1 joue dans la colonne 3
partie.getGrille().afficher();

partie.changerJoueur();
partie.jouer(3); // Joueur 2 joue dans la colonne 3
partie.getGrille().afficher();

console.log("✅ Tests terminés !");
