/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.addPhase();
        this.activePhrase = null ;        

    }

   // add 5 phases
   addPhase() {
    const phrases = [];
    phrases.push(new Phrase('Apple'));
    phrases.push(new Phrase('Western'));
    phrases.push(new Phrase('You win'));
    phrases.push(new Phrase('Save the earth'));
    phrases.push(new Phrase('Ultra Runner'));
    return phrases; 
   }
   /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
   getRandomPhrase() {
        const selectPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[selectPhrase];

   }
   /**
   * Begins game by selecting a random phrase and displaying it to user
   */
   startGame() {
        const overlay  = document.getElementById('overlay');
        overlay.style.display = 'none';
        const randomPhrase = this.getRandomPhrase() ;
        randomPhrase.addPhraseToDisplay() ;
        this.activePhrase = randomPhrase ;

   };
   /**
    * Handle interaction when click the keyboard.
    */
   handleInteraction(e) {
        if (this.activePhrase.checkLetter(e)) {
            e.target.classList.add('chosen');           
            this.activePhrase.showMatchedLetter(e.target.textContent) ;
            if(this.checkForWin()) {
                this.gameOver(true);
            } 
        } else {
            e.target.classList.add('wrong');
            this.removeLife() ;
        }

   }

   /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const hideLetter = document.querySelectorAll("[class^='hide letter']");
        return  hideLetter.length == 0 ? true: false ;

    };

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        const heartRemove = document.querySelectorAll("img[src='images/liveHeart.png']");

        heartRemove[0].src = 'images/lostHeart.png' ;
        this.missed += 1 ; 
        if (this.missed === 5 ) {
            this.gameOver(false);
        }
    };

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay  = document.getElementById('overlay');
        overlay.style.removeProperty('display');
        const h1 = document.querySelector('#overlay > h1');
        const button = document.querySelector('#btn__reset');
        button.textContent = 'Play Again';
        function removeScreen() {
            const div = document.querySelector('#phrase') ;
            div.innerHTML = '<ul></ul>';
            const keys = document.querySelectorAll("[class^='key ']");
            for ( const key of keys) {
                key.className = 'key' ;
            }
            const heartResets = document.querySelectorAll("img[src='images/lostHeart.png']");
            for (const heart of heartResets) {
                heart.src = 'images/liveHeart.png' ;
            }
        } ;

        if(gameWon) {
            overlay.className = 'win';
            h1.textContent = 'You Win!' ;
            removeScreen() ;

        } else {
            overlay.className = 'lose';
            h1.textContent = 'Sorry, try again next Time!' ;
            removeScreen() ;
            
        }

    };

}