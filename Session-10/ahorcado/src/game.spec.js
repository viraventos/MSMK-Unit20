import { Game } from '../src/game.js';

describe('Game', () => {

  test('acierto de letra', () => {
    const game = new Game("test");

    const result = game.guess("t");

    expect(result).toBe(true);
    expect(game.hidden).toEqual(["t", "_", "_", "t"]);
  });

  test('fallo de letra reduce intentos', () => {
    const game = new Game("test");

    game.guess("x");

    expect(game.player.attempts).toBe(5);
  });

  test('detecta victoria', () => {
    const game = new Game("a");

    game.guess("a");

    expect(game.isWin()).toBe(true);
  });

  test('detecta derrota', () => {
    const game = new Game("a");

    for (let i = 0; i < 6; i++) {
      game.guess("x");
    }

    expect(game.isLose()).toBe(true);
  });

});
