const http = require('http');  // Importation du module http

// Création du serveur
const server = http.createServer((req, res) => {
    res.statusCode = 200;  
    res.setHeader('Content-Type', 'text/html');  
    res.end('<h1>Hello Node !!!!</h1>\n');  // Réponse envoyée au client
});

// Le serveur écoute sur le port 3000
server.listen(3000, 'localhost', () => {
    console.log(`Serveur en cours d'exécution à http://localhost:3000/`);
});
