// models/livreModel.js
const fs = require('fs').promises;
const path = require('path');

const cheminLivresJSON = path.join(__dirname, '..', 'data', 'livres.json');

module.exports = {
  getListeLivres: async () => {
    try {
      const contenuFichier = await fs.readFile(cheminLivresJSON, 'utf-8');
      return JSON.parse(contenuFichier);
    } catch (err) {
      throw new Error('Erreur lors de la lecture du fichier JSON : ' + err.message);
    }
  },

  getDetailsLivre: async (livreId) => {
    try {
      const contenuFichier = await fs.readFile(cheminLivresJSON, 'utf-8');
      const livres = JSON.parse(contenuFichier);
      return livres.find((livre) => livre.id.toString() === livreId);
    } catch (err) {
      throw new Error('Erreur lors de la lecture du fichier JSON : ' + err.message);
    }
  },

  ajoutLivre: async (nouveauLivre) => {
    try {
      const contenuFichier = await fs.readFile(cheminLivresJSON, 'utf-8');
      const livres = JSON.parse(contenuFichier);

      // Générer un nouvel ID pour le livre
      const nouvelId = livres.length + 1;
      nouveauLivre.id = nouvelId;

      // Ajouter le nouveau livre à la liste
      livres.push(nouveauLivre);

      // Écrire la liste mise à jour dans le fichier JSON
      await fs.writeFile(cheminLivresJSON, JSON.stringify(livres, null, 2), 'utf-8');
    } catch (err) {
      throw new Error('Erreur lors de l\'ajout d\'un nouveau livre : ' + err.message);
    }
  },

  rechercheLivresParAuteur: async (auteurRecherche) => {
    try {
      const contenuFichier = await fs.readFile(cheminLivresJSON, 'utf-8');
      const tousLesLivres = JSON.parse(contenuFichier);
      return tousLesLivres.filter((livre) => livre.auteur === auteurRecherche);
    } catch (err) {
      throw new Error('Erreur lors de la recherche de livres par auteur : ' + err.message);
    }
  },
};
