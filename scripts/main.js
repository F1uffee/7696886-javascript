/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

lancerJeu()

let userInput = document.getElementById('inputEcriture')
console.log(userInput)

let userButton = document.getElementById('btnValiderMot')
console.log(userButton)

let proposalWord = document.querySelector('.zoneProposition')
console.log(proposalWord)

let displayScore = document.querySelector('.zoneScore')
console.log(displayScore)

let choicesButtons = document.querySelectorAll('.optionSource input')
console.log(choicesButtons)