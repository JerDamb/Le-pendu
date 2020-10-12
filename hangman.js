const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('word-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

//CREER UN TABLEAU PRE-REMPLIS AVEC DIFFERENTS MOTS 
const words = ["alphabet", "kitten", "blasphemy", "telephone", "sinkhole", "hammer", "technical", "banana",
    "elementary", "laptop", "excellent", "famous", "cheese", "actress", "landlord", "interest", "lipstick",
    "cardboard", "hungry", "inventory", "windblown", "attempt", "liquid", "tranquil", "effect", "digital",
    "strawberry", "clinic", "alchemy", "figure", "virtual", "melee", "gravity", "sugar", "piglet", "orange",
    "traumatized", "magnificent", "fallout", "elevator"
];

// SELECTIONNE UN MOT AU HASARD DANS LE TABLEAU WORDS
let selectedWord = words[Math.floor(Math.random() * words.length)];

const correctLetters = [];
const wrongLetters = [];

function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord.split('').map(letter => `
            <span class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </span>
        `).join('')}
    `
}

displayWord();



//UNE VARIABLE AVEC L'ALPHABET
// alphabet = "abcdefghijklmnopqrstuvwxyz".split(''),
//UNE VARIABLE VIDE POUR COMPARER AVEC LES MOTS DU TABLEAU
// motCherche = [],
//UNE VARIABLE POUR COMPTER LE NOMBRE D'ERREURS COMMISES
// erreurs = 0,
//UNE VARIABLE POUR INDIQUER LE NOMBRE D'ESSAIS QU'IL RESTE A FAIRE
// essais = 0;
//AFFICHER LE PENDU

//AU CHARGEMENT DE LA PAGE

//RECUPERER UN MOT AU HASARD DANS LE TABLEAU
//REMPLACER LES LETTRES DE CE MOT PAR DES "_"
//AFFICHER LE PENDU
//AFFICHER L'ENSEMBLE DES LETTRES DE L'ALPHABET
//AFFICHER LE TITRE
//AFFICHER LE NOMBRE D'ESSAIS, A 0
//AFFICHER LE NOMBRE D'ERREURS COMMISES, A 0

//COMPARER LA LETTRE SELECTIONNE AVEC CHAQUE LETTRE DU MOT DU TABLEAU
//SUPPRIMER LA LETTRE SELECTIONNE DE L'AFFICHAGE
//SI LA LETTRE SELECTIONNE = LA LETTRE DU TABLEAU
//LE "_" EST REMPLACE PAR LA LETTRE CORRESPONDANTE
//SINON SI
//AJOUTER 1 AU COMPTEUR D'ERREURS
//FAIRE PROGRESSER LE PENDU

//POUR CHAQUE ERREUR
//ANIMATION DU PENDU +1

//SI LE MOT EST TROUVE OU NOMBRE D'ERREURS >= 5
//STOPPER LA PARTE
//AFFICHER UN MESSAGE CORRESPONDANT
//AFFICHER LE MOT EN ENTIER
//AFFICHER LA DEFINITION
//PROPOSER UNE NOUVELLE PARTIE
//AJOUTER 1 AU COMPTEUR D'ESSAIS