import placeWord from '../place-word';

const horizontalWord = {
  word: 'word',
  coordinates: [0, 0],
  direction: 'x',
};

const verticalWord = { ...horizontalWord, direction: 'y' };

const secondWord = {
  word: 'duel',
  coordinates: [4, 0],
  direction: 'y',
};

describe('placeWord()', () => {
  it('returns a word at the origin when there are no placed words', () => {
    const placedWord = placeWord('word', []);
    expect(placedWord).toStrictEqual({
      word: 'word',
      coordinates: [0, 0],
      direction: expect.any(String),
    });
    expect(['x', 'y']).toContain(placedWord.direction);
  });
  it('places the second word in the opposite direction to the first', () => {
    expect(placeWord('mock', [horizontalWord])).toMatchObject({
      word: 'mock',
      direction: 'y',
    });

    expect(placeWord('mock', [verticalWord])).toMatchObject({
      word: 'mock',
      direction: 'x',
    });
  });
  it('the words are placed with overlapping letters', () => {
    expect(placeWord('mock', [horizontalWord])).toStrictEqual({
      word: 'mock',
      coordinates: [1, -1],
      direction: 'y',
    });

    expect(placeWord('mock', [verticalWord])).toStrictEqual({
      word: 'mock',
      coordinates: [-1, 1],
      direction: 'x',
    });
  });
  it('positions the new word relative to the existing one', () => {
    const movedHorizontalWord = {
      ...horizontalWord,
      coordinates: [10, 10],
    };
    expect(placeWord('mock', [movedHorizontalWord])).toStrictEqual({
      word: 'mock',
      coordinates: [11, 9],
      direction: 'y',
    });
  });
  it('positions a third word across the first existing word', () => {
    expect(placeWord('mock', [horizontalWord, secondWord])).toStrictEqual({
      word: 'mock',
      coordinates: [1, -1],
      direction: 'y',
    });
  });
  it('positions a third word across the second existing word', () => {
    expect(placeWord('mock', [secondWord, horizontalWord])).toStrictEqual({
      word: 'mock',
      coordinates: [1, -1],
      direction: 'y',
    });
  });
  it('throws an error when there are no matching characters', () => {
    const testFunction = () => {
      placeWord('fact', [horizontalWord, secondWord]);
    };
    expect(testFunction).toThrow(Error('No matching characters found'));
  });
});
