import { Game } from '../src/game.js';

describe('Game', () => {

  test('hits letter', () => {
    const game = new Game("test");

    const result = game.guess("t");

    expect(result).toBe(true);
    expect(game.hidden).toEqual(["t", "_", "_", "t"]);
  });

  test('when fails letter, it reduces player remaining attempts', () => {
    const game = new Game("test");

    game.guess("x");

    expect(game.player.attempts).toBe(5);
  });

  test('detects game victory', () => {
    const game = new Game("a");

    game.guess("a");

    expect(game.isWin()).toBe(true);
  });

  test('detects game defeat', () => {
    const game = new Game("a");

    for (let i = 0; i < 6; i++) {
      game.guess("x");
    }

    expect(game.isLose()).toBe(true);
  });

});
