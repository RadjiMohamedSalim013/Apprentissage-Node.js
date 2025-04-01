const nodemailer = require('nodemailer');  // Importation de la bibliothèque nodemailer

// Créer un transporteur pour envoyer l'e-mail
const emailTransporter = nodemailer.createTransport({
    service: 'gmail',  // Utilisation de Gmail pour envoyer l'e-mail
    auth: {
        user: 'ton-adresse-email@gmail.com',  // Remplace avec ton adresse Gmail
        pass: 'ton-mot-de-passe application google'  // Remplace avec ton mot de passe (ou un mot de passe d'application si tu utilises la vérification en deux étapes)
    }
});

// Définir les options de l'e-mail
const emailOptions = {
    from: 'ton-adresse-email@gmail.com',  // L'adresse e-mail de l'expéditeur
    to: 'destinataire@example.com',  // L'adresse e-mail du destinataire
    subject: 'E-mail de test avec Node.js',  // L'objet de l'e-mail
    text: 'Salut, ceci est un e-mail envoyé via Node.js !'  // Le corps de l'e-mail
};

// Envoyer l'e-mail
emailTransporter.sendMail(emailOptions, (error, info) => {
    if (error) {
        console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
    } else {
        console.log('L\'e-mail a été envoyé avec succès:', info.response);
    }
});


