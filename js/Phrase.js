/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase() ;

    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const chars = Array.from(this.phrase);
        const div = document.querySelector('#phrase > ul') ;
        for (const char of chars) {
            const letter = document.createElement('li');           
            if ( char !== ' ') {
            const liClass = `hide letter ${char}` ;
            this.drawHTMLPhrase(liClass,char);

            } else {
            this.drawHTMLPhrase('space',' ');           
            }
        }
    };

    /**
     * Draw <li> element method
     * @param {*} liClass    - class name of li 
     * @param {*} char       - a character in phrase 
     */
    drawHTMLPhrase(liClass,char) {
        const div = document.querySelector('#phrase > ul') ;
        const letter = document.createElement('li');  
        div.appendChild(letter);        
        letter.setAttribute('class',liClass );
        letter.innerHTML = char ;             

    }

    /**
     * Check selected letter matchs a letter in the phrase.
     * @return {boolean}  Boolean value indicating the letter is matched  (true) or not (false)
     */
    checkLetter(e) {
        const selectedKey = e.target.textContent ;
        return this.phrase.includes(selectedKey) ;
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const hideClass = `hide letter ${letter}` ;
        const showClass = `show letter ${letter}` ;
        const letterList = document.getElementsByClassName(hideClass);
        const letterArray = Array.from(letterList);

        for (let i = 0; i < letterArray.length; i++) {
            letterArray[i].className = showClass;
        }
     };

}