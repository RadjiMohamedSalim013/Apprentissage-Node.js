const generatePassword = require('generate-password');  // Importation de la bibliothèque

// Générer un mot de passe avec 10 caractères, incluant des lettres, des chiffres et des symboles
const password = generatePassword.generate({
    length: 10,             // Longueur du mot de passe
    numbers: true,          // Inclure des chiffres
    symbols: true,          // Inclure des symboles
    uppercase: true,        // Inclure des lettres majuscules
    lowercase: true         // Inclure des lettres minuscules
});

console.log('Mot de passe généré:', password);  // Afficher le mot de passe généré
