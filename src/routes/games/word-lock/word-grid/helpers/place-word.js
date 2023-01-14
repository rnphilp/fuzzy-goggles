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

  let matchingExistingWord;
  let matchIndexOfExistingWord;
  let matchIndexOfNewWord;

  const matchFound = placedWords.some(placedWord => {
    const { word: existingWord } = placedWord;

    return word.split('').some((letter, i) => {
      const indexOfMatch = existingWord.indexOf(letter);
      if (indexOfMatch !== -1) {
        matchingExistingWord = placedWord;
        matchIndexOfExistingWord = indexOfMatch;
        matchIndexOfNewWord = i;
        return true;
      }
      return false;
    });
  });

  if (!matchFound) {
    throw Error('Cannot place word. No matching characters found');
  }

  const { coordinates: existingCoordinates, direction: existingDirection } =
    matchingExistingWord;

  const direction = existingDirection !== 'x' ? 'x' : 'y';

  const coordinates = [
    direction === 'x'
      ? existingCoordinates[0] - matchIndexOfNewWord
      : existingCoordinates[0] + matchIndexOfExistingWord,
    direction === 'y'
      ? existingCoordinates[1] - matchIndexOfNewWord
      : existingCoordinates[1] + matchIndexOfExistingWord,
  ];

  return {
    word,
    coordinates,
    direction,
  };
};
