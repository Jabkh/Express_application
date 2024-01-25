const express = require('express');
const router = express.Router();
const livreController = require('../controllers/livreController');

router.get('/livres', livreController.getListeLivres);

router.get('/livres/:id', livreController.getDetailsLivre);

router.get('/ajout-livre', (req, res) => {
  res.render('ajoutlivre'); 
});

router.post('/ajout-livre', livreController.ajoutLivre);

router.get('/recherche-livre/auteur/:auteur', livreController.rechercheLivresParAuteur);

module.exports = router;
