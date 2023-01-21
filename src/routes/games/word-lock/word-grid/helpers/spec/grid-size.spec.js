import gridSize from '../grid-size';

describe('gridSize()', () => {
  const config = {
    cellSize: 1,
    gap: 0,
  };
  it('returns ones when passed a single letter at origin', () => {
    const word = { word: 'a', coordinates: [0, 0], direction: 'x' };
    expect(gridSize([word], config)).toStrictEqual({
      minX: 0,
      minY: 0,
      width: 1,
      height: 1,
    });
  });
  it('returns the location of the letter when passed a single letter', () => {
    const word = { word: 'a', coordinates: [5, -2], direction: 'x' };
    expect(gridSize([word], config)).toStrictEqual({
      minX: 5,
      minY: -2,
      width: 1,
      height: 1,
    });
  });
  it('returns the width of a word in the x direction', () => {
    const word = { word: 'abcd', coordinates: [0, 0], direction: 'x' };
    expect(gridSize([word], config)).toStrictEqual({
      minX: 0,
      minY: 0,
      width: 4,
      height: 1,
    });
  });
  it('returns the height of a word in the y direction', () => {
    const word = { word: 'abcd', coordinates: [0, 0], direction: 'y' };
    expect(gridSize([word], config)).toStrictEqual({
      minX: 0,
      minY: 0,
      width: 1,
      height: 4,
    });
  });
  it('returns the width and height of words in both directions', () => {
    const word1 = { word: 'abcd', coordinates: [0, 0], direction: 'x' };
    const word2 = { word: 'abcd', coordinates: [0, 0], direction: 'y' };
    expect(gridSize([word1, word2], config)).toStrictEqual({
      minX: 0,
      minY: 0,
      width: 4,
      height: 4,
    });
  });
  it('returns the width and height of words of multiple words', () => {
    const words = [
      { word: 'random', coordinates: [-3, 8], direction: 'x' },
      { word: 'words', coordinates: [0, 5], direction: 'x' },
      { word: 'forming', coordinates: [-3, 6], direction: 'y' },
      { word: 'crossword', coordinates: [0, 0], direction: 'y' },
      { word: 'grid', coordinates: [-1, 1], direction: 'x' },
    ];
    expect(gridSize(words, config)).toStrictEqual({
      minX: -3,
      minY: 0,
      width: 8,
      height: 13,
    });
  });
  it('returns the width and height of multiple words with non-zero config', () => {
    const cellSize = 9;
    const gap = 1;
    const nonZeroConfig = {
      cellSize,
      gap,
    };
    const word1 = { word: 'abcd', coordinates: [0, 0], direction: 'x' };
    const word2 = { word: 'abcd', coordinates: [0, 0], direction: 'y' };
    expect(gridSize([word1, word2], nonZeroConfig)).toStrictEqual({
      minX: 0,
      minY: 0,
      width: cellSize * 4 + gap * 3,
      height: cellSize * 4 + gap * 3,
    });
  });
});
