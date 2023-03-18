const { findContainedWords } = require('..');

describe('findContainedWords()', () => {
  it('does not return words that have a larger number of letters', () => {
    const wordObj = {
      words: ['betters'],
      letters: ['b', 'e', 'r', 's', 't'],
    };
    expect(findContainedWords(['b', 'e', 's', 't'], [wordObj])).toStrictEqual(
      []
    );
  });
  it('does not return words that have a smaller but different number of letters', () => {
    const wordObj = {
      words: ['bag'],
      letters: ['a', 'b', 'g'],
    };
    expect(findContainedWords(['b', 'e', 's', 't'], [wordObj])).toStrictEqual(
      []
    );
  });
  it('should return a word that has a subset of the letters provided', () => {
    const wordObj = {
      words: ['bee'],
      letters: ['b', 'e'],
    };
    expect(findContainedWords(['b', 'e', 's', 't'], [wordObj])).toStrictEqual(
      wordObj.words
    );
  });
  it('should return words that has a subset of the letters provided', () => {
    const wordObj = {
      words: ['set', 'test'],
      letters: ['e', 's', 't'],
    };
    expect(findContainedWords(['b', 'e', 's', 't'], [wordObj])).toStrictEqual(
      wordObj.words
    );
  });
  it('should return words from different subsets of the letters provided', () => {
    const wordObjs = [
      {
        words: ['bee'],
        letters: ['b', 'e'],
      },
      {
        words: ['set', 'test'],
        letters: ['e', 's', 't'],
      },
    ];
    expect(findContainedWords(['b', 'e', 's', 't'], wordObjs)).toStrictEqual([
      ...wordObjs[0].words,
      ...wordObjs[1].words,
    ]);
  });
  it('should return only the words from different subsets of the letters provided', () => {
    const wordObjs = [
      {
        words: ['bee'],
        letters: ['b', 'e'],
      },
      {
        words: ['bag'],
        letters: ['a', 'b', 'g'],
      },
      {
        words: ['set', 'test'],
        letters: ['e', 's', 't'],
      },
    ];
    expect(findContainedWords(['b', 'e', 's', 't'], wordObjs)).toStrictEqual([
      ...wordObjs[0].words,
      ...wordObjs[2].words,
    ]);
  });
});
