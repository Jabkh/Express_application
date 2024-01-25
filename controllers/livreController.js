const livreModel = require('../models/livreModel');

exports.getListeLivres = async (req, res) => {
  try {
    const livres = await livreModel.getListeLivres();
    res.render('getListeLivres', { livres });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur interne du serveur');
  }
};

exports.getDetailsLivre = async (req, res) => {
  const livreId = req.params.id;

  try {
    const detailsLivre = await livreModel.getDetailsLivre(livreId);

    if (detailsLivre) {
      res.render('getDetailsLivre', { detailsLivre });
    } else {
      res.status(404).send('Livre non trouvé');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur interne du serveur');
  }
};

exports.ajoutLivre = async (req, res) => {
  try {
    const { titre, auteur } = req.body;
    await livreModel.ajoutLivre({ titre, auteur });
    res.render('ajoutLivre');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur interne du serveur');
  }
};

exports.rechercheLivresParAuteur = async (req, res) => {
  try {
    const auteurRecherche = req.params.auteur;
    const livresParAuteur = await livreModel.rechercheLivresParAuteur(auteurRecherche);
    res.render('rechercheLivresParAuteur', { livresParAuteur });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur interne du serveur');
  }
};
