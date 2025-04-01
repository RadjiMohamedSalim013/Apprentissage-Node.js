const fs = require('fs');  // Importation du module fs

// Creation du fichier 'welcome.txt' et insertion  'Hello Node'
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;  
    console.log('Fichier welcome.txt créé avec succès!');
});



// Lire le fichier 'welcome.txt' et afficher son contenu
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;  
    console.log('Contenu du fichier welcome.txt :', data);
});
