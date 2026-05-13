import { Player } from '../src/player.js';

describe('Player', () => {

  test('Initialize player with 6 attempts by default', () => {
    const player = new Player();

    expect(player.attempts).toBe(6);
    expect(player.usedLetters).toEqual([]);
  });

  test('Initialize player setting the number of attempts', () => {
    const player = new Player(10);

    expect(player.attempts).toBe(10);
  });

  test('Add a letter to used list, when it was not already used', () => {
    const player = new Player();

    player.useLetter('a');

    expect(player.usedLetters).toContain('a');
    expect(player.usedLetters.length).toBe(1);
  });

  test('Do not add a letter to used list, when it is already used', () => {
    const player = new Player();

    player.useLetter('a');
    player.useLetter('a');

    expect(player.usedLetters).toEqual(['a']);
  });

  test('Reduce attempts left after fail', () => {
    const player = new Player();

    player.loseAttempt();

    expect(player.attempts).toBe(5);
  });

});