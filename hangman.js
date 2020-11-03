//Variables
const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['bleu', 'super', 'autre', 'bizarre', 'difficile', 'drole', 'etrange', 'facile',
    'grace', 'impossible', 'jeune', 'juste', 'libre', 'malade', 'meme', 'pauvre', 'possible',
    'propre', 'rouge', 'sale', 'simple', 'tranquille', 'triste', 'vide', 'bonne', 'toute', 'doux',
    'faux', 'francais', 'gros', 'heureux', 'mauvais', 'serieux', 'vieux', 'vrai', 'ancien', 'beau',
    'blanc', 'certain', 'chaud', 'cher', 'clair', 'content', 'dernier', 'desole', 'different', 'droit',
    'entier', 'fort', 'froid', 'gentil', 'grand', 'haut', 'humain', 'important', 'joli', 'leger', 'long',
    'meilleur', 'mort', 'noir', 'nouveau', 'pareil', 'petit', 'plein', 'premier', 'pret', 'prochain', 'quoi',
    'seul', 'tout', 'vert', 'vivant'
];

const correctLetters = [];
const wrongLetters = [];

let selectedWord = words[Math.floor(Math.random() * words.length)];


//Affiche dans .word les lettres d'un mot choisi au hasard dans le tableau words[], si les mots correspondent -> affiche le message popup de victoire
function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord.split('').map(letter => `
            <span class="letter">
                ${correctLetters.includes(letter) ? letter : ''}
            </span>
        `).join('')}
    `;

    const innerWorld = wordEl.innerText.replace(/\n/g, '');

    if (innerWorld === selectedWord) {
        finalMessage.innerText = 'Félicitation tu as trouvé le mot caché !!';
        popup.style.display = 'flex';
    }
}


//Stock les mauvaises lettres dans le wrongLetters[], si le nombre de mauvaises lettres est égal au nombre de partie de corps -> affiche le message popup de défaite
function updateWrongLettersEl() {
    wrongLettersEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Mauvaises lettres</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;

        if (index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    })
    if (wrongLetters.length === figureParts.length) {
        setTimeout(() => {
            finalMessage.innerText = 'Malheureusement tu as perdu';
            popup.style.display = 'flex';
        }, 100);
    }
}


//Fonction d'affichage de notification
function showNotification() {
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}


//Récupère l'input rentré et lance différentes function en fonctions des cas de figure
window.addEventListener('keydown', e => {

    if (e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);

                displayWord();
            } else {
                showNotification();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);

                updateWrongLettersEl();
            } else {
                showNotification();
            }
        }
    }
});


//Bouton qui relance displayWord() et réinitialise ce qui a besoin de l'être
playAgainBtn.addEventListener('click', () => {
    correctLetters.splice(0);
    wrongLetters.splice(0);

    selectedWord = words[Math.floor(Math.random() * words.length)];

    displayWord();

    updateWrongLettersEl();

    popup.style.display = 'none';
})


//Fonction au lancement du script
displayWord();