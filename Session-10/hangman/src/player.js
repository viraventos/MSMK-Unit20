export class Player {
    constructor(maxAttempts = 5) {
      this.attempts = maxAttempts;
      this.usedLetters = [];
    }
  
    useLetter(letter) {
      if (!this.usedLetters.includes(letter)) {
        this.usedLetters.push(letter);
      }
    }
  
    loseAttempt() {
      this.attempts--;
    }
  }
  