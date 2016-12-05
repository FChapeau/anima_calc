# Anima Calc
Calculatrice en React pour le jeu de rôle Anima

## Installation (développement)
1. Assurez-vous d'avoir installé Node JS et NPM
2. Ouvrez un command prompt dans le dossier du projet  
3. `npm install -g gulp`
4. `npm install`
5. `gulp watch`

La tâche Gulp `watch` démarre Webpack en mode Watch pour compiler le front-end React dès qu'il détecte une modification au front-end et démarre le back-end avec Nodemon et le redémarre dès qu'il détecte une modification au back-end.

## Tâches Gulp
|**compile:client**|Roule Webpack|
|**start:dev**|Démarre les tâches `watch:client` et `watch:app`|
|**watch:client**|Roule Webpack en mode Watch|
|**watch:app**|Roule l'application avec Nodemon|