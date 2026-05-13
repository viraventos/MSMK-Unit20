import readline from 'readline';
import { Game } from './game.js';
import { WordService } from './word.service.js';
import { Renderer } from './renderer.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const wordService = new WordService('./words.txt');
const word = wordService.getRandomWord();
const game = new Game(word);

function loop() {
  Renderer.showWord(game.hidden);
  Renderer.showUsedLetters(game.player.usedLetters);
  console.log("Intentos:", game.player.attempts);

  rl.question("Letra: ", (input) => {
    const letter = input.toLowerCase();

    if (letter.length !== 1) {
      console.log("Introduce solo una letra");
      return loop();
    }

    game.guess(letter);

    if (game.isWin()) {
      console.log("🎉 Ganaste");
      rl.close();
      return;
    }

    if (game.isLose()) {
      console.log("💀 Perdiste. Era:", word);
      rl.close();
      return;
    }

    loop();
  });
}

loop();

