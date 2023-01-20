import checkClash from './check-clash';

const placeFirstWord = word => {
  const i = Math.round(Math.random());
  return {
    word,
    coordinates: [0, 0],
    direction: ['x', 'y'][i],
  };
};

export default (word, placedWords) => {
  if (!placedWords.length) {
    return placeFirstWord(word);
  }

  let newWord;

  const matchFound = placedWords.some(placedWord => {
    const { word: existingWord } = placedWord;

    return word.split('').some((letter, i) => {
      const indexOfMatch = existingWord.indexOf(letter);
      if (indexOfMatch !== -1) {
        const matchingExistingWord = placedWord;

        const {
          coordinates: existingCoordinates,
          direction: existingDirection,
        } = matchingExistingWord;
        const direction = existingDirection !== 'x' ? 'x' : 'y';
        const coordinates = [
          direction === 'x'
            ? existingCoordinates[0] - i
            : existingCoordinates[0] + indexOfMatch,
          direction === 'y'
            ? existingCoordinates[1] - i
            : existingCoordinates[1] + indexOfMatch,
        ];

        newWord = {
          word,
          coordinates,
          direction,
        };

        const otherPlacedWords = placedWords.filter(
          x => x.word !== existingWord
        );
        const clashes = checkClash(newWord, otherPlacedWords);
        if (!clashes) return true;
        return false;
      }
      return false;
    });
  });

  if (!matchFound) {
    throw Error(
      `Cannot place word "${word}". No matching characters found in a location that does not clash`
    );
  }

  return newWord;
};
