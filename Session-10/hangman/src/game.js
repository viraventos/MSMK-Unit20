import { Player } from './player.js';

export class Game {
  constructor(word) {
    this.word = word;
    this.hidden = Array(word.length).fill("_");
    this.player = new Player();
  }

  guess(letter) {
    let hit = false;

    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
        this.hidden[i] = letter;
        hit = true;
      }
    }

    this.player.useLetter(letter);

    if (!hit) {
      this.player.loseAttempt();
    }

    return hit;
  }

  isWin() {
    return !this.hidden.includes("_");
  }

  isLose() {
    return this.player.attempts <= 0;
  }
}
