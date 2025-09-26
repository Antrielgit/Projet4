import { Partie } from "./partie.js";
import pkg from "prompt-sync";

const prompt = pkg();
const partie = new Partie();

console.log("🎮 Bienvenue dans le Puissance 4 !");
let tour = 0;
let partieEnCours = true;

while (partieEnCours) {
  console.log(`\n➡️  Tour ${tour + 1}`);
  partie.afficher();

  const colonne = parseInt(prompt(`Joueur ${partie.getJoueurActuel().id} (${partie.getJoueurActuel().symbole}), choisis une colonne (0-6) : `));

  if (isNaN(colonne) || colonne < 0 || colonne > 6) {
    console.log("❌ Colonne invalide, réessaie.");
    continue;
  }

  const joue = partie.jouer(colonne);

  if (partie.verifierVictoire()) {
  partie.afficher();
  console.log(`🎉 Joueur ${partie.getJoueurActuel().id} (${partie.getJoueurActuel().symbole}) gagne !`);
  partieEnCours = false;
  break;
}


  if (!joue) {
    console.log("⚠️ Colonne pleine, choisis-en une autre !");
    continue;
  }

  partie.changerJoueur();
  tour++;

  if (tour > 41) { // 42 cases = grille pleine
    console.log("🤝 Match nul !");
    partie.afficher();
    partieEnCours = false;
  }
}
