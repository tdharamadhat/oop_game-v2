/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game ;
const button = document.getElementById('btn__reset');
document.addEventListener('click', e => {
    if (e.target.id === 'btn__reset') {
        game = new Game() ;
        game.startGame() ;
        //console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`); //debug
    } else if (e.target.className === 'key') {
        game.handleInteraction(e) ;
    }
});



