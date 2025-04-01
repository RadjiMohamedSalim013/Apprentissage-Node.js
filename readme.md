# Apprentissage Node.js - Exercices Guidés  

Ce projet regroupe plusieurs exercices pratiques pour apprendre à utiliser **Node.js** à travers différentes fonctionnalités essentielles. Chaque tâche est enregistrée dans un fichier distinct pour une meilleure organisation.  

## Objectif du Projet  

L'objectif de ces exercices est de comprendre et maîtriser les concepts de base de Node.js à travers différentes mises en pratique :  

- Affichage d'un message dans la console  
- Création d'un serveur HTTP  
- Manipulation des fichiers avec le système de fichiers  
- Génération de mots de passe aléatoires  
- Envoi d'e-mails avec Node.js  

## Exercices Réalisés  

### Hello World  
Fichier : `hello-world.js`  
Ce programme affiche **HELLO WORLD** dans la console.  

### Création d'un Serveur HTTP  
Fichier : `server.js`  
Ce programme met en place un serveur HTTP sur le port **3000** qui affiche un message lorsqu’un utilisateur accède à **http://localhost:3000**.  

### Lecture et Écriture de Fichiers  
Fichier : `file-operations.js`  
- Création d'un fichier `welcome.txt` contenant le texte **Hello Node**  
- Lecture du fichier et affichage du contenu dans la console  

### Générateur de Mots de Passe  
Fichier : `password-generator.js`  
Utilisation de la bibliothèque **generate-password** pour générer un mot de passe aléatoire et l'afficher dans la console.  

### Envoi d'E-mails avec Nodemailer  
Fichier : `send-email.js`  
Utilisation de la bibliothèque **nodemailer** pour envoyer un e-mail via Gmail.  

## Configuration du Mot de Passe d'Application Gmail  

Pour envoyer un e-mail avec Nodemailer, il est nécessaire de générer un **mot de passe d'application Gmail** si la validation en deux étapes est activée.  

### Étapes pour Générer le Mot de Passe  

1. Accéder à son compte Google : [https://myaccount.google.com/](https://myaccount.google.com/)  
2. Activer la validation en deux étapes dans **Sécurité > Connexion à Google**  
3. Aller dans **Mots de passe d’application**  
4. Sélectionner **Mail** et **Autre (Node.js)**  
5. Générer le mot de passe et l'utiliser dans `send-email.js`  

Vidéo explicative : [Tutoriel YouTube](https://www.youtube.com/watch?v=kLlpZyz9Jzk)  

## Installation et Exécution  

### Cloner le Projet  

```bash
git clone https://github.com/nom-utilisateur/Apprentissage-Node.js.git
cd Apprentissage-Node.js
```

### Installer les Dépendances  

```bash
npm install
```

### Exécuter les Fichiers  

```bash
node hello-world.js
node server.js
node file-operations.js
node password-generator.js
node send-email.js
```