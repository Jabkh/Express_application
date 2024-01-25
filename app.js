const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');

// Définir le dossier public pour les fichiers statiques
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));



// Utilisation du routeur externe bookRoutes 
const bookRoutes = require('./routes/livreRoute');

app.use('/', bookRoutes);

// Port d'écoute
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`) 
})

// Texte HTML
app.get('/bienvenue', (req, res) => {
  res.send("<h1>Bienvenue à tous!</h1>")
});

// Contenu en JSON
app.get('/info', (req, res) => {
  const jsonData = {
    nom: "Benoit Lecoeuvre",
    age : 31,
    ville: "Lille"
  }
  res.json(jsonData)
});

// Code de statut personnalisé
app.get('/acces-interdit', (req, res) => {
  res.status(403).send("Accès interdit - Code 403");
});

// Redirection vers la page d'accueil
app.get('/redirection-accueil', (req, res) => {
  res.redirect("/");
});


app.get('/ajout-livre', (req, res) => {
  const cheminAjoutLivreHTML = path.join(__dirname, 'public', 'ajoutlivre.html');
  res.sendFile(cheminAjoutLivreHTML);
});

// Route par défaut
// app.get('*', (req, res) => {
//   res.status(404).send(`
//     <html>
//       <head>
//         <title>Page non trouvée</title>
//       </head>
//       <body>
//         <h1>404 - Page non trouvée</h1>
//         <p>Oups, la page que vous recherchez n'existe pas.</p>
//       </body>
//     </html>
//   `);
// });