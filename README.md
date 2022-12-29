# Test technique - Développeur 

Les exercices qui vont suivre ont pour objectif d'évaluer votre connaissance de nodejs, la façon dont vous organisez votre code et raisonnez.

Pour pouvoir réaliser le tests, vous devez ces commandes :

- `npm install` to install all required dependencies
- Install MongoDB Community Edition (instructions) and run it
- `npm run seed` pour insérer les données dans mongodb
- `npm run dev` pour lancer le server local
- `npm test` pour lancer la suite de tests


L'intégralité de ce test porte sur un système de labyrinthe (maze) et de cases (boxes).
Des tables et données sont déjà présentes dans le projet : ``npm run seed``
L'authentification est gérée par passport.


## Exercice 1 - Ecrire une API REST

Ecrire une API REST CRUD sécurisée par une authentification par Bearer token pour les éléments suivants :

- Mazes
- Boxes

La partie authentification est déjà en place dans le projet, vous pouvez récupérer un Bearer token via :

- Endpoint : ``api/auth/login``
- Email : test@clacdesdoigts.com
- Mot de passe : password


## Exercice 2 - Algorithme de résolution de labyrinthe

Il existe deux tests unitaires dans ``test\maze.js`` qui sont commentés et qui testent une classe de résolution de labyrinthe.
Vous devez donc implémenter cette classe pour valider ces deux tests unitaires.
Le resolver devra retourner le nombre de cases minimum nécéssaire pour aller d'un point A (start) à un point B (end) dans un labyrinthe donné. 

Les labyrinthes et les cases sont déjà créés en base de données grace aux seeder.

Les cases autorisées pour se rentre de A à B doivent avoir l'attribut ``is_allowed`` à ``true``.
Il n'est possible de se déplacer que verticalement ou horizontalement, pas de diagonal possible.

Nous serons attentif de la logique mise en place pour cet algorithme et pourrons faire abstraction de sa performance.  
