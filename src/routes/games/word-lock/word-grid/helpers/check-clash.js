// returns an array of all the coordinates within a word
const wordCoordinates = ({ word, coordinates, direction }) => {
  return word.split('').map((_letter, i) => {
    return [
      direction === 'x' ? coordinates[0] + i : coordinates[0],
      direction === 'y' ? coordinates[1] + i : coordinates[1],
    ];
  });
};

// checks for a clash or adjacent clash between word and all of the otherWords
export default (word, otherWords) => {
  const coordinatesOfWord = wordCoordinates(word);
  const coordinatesOfOtherWords = otherWords.flatMap(wordCoordinates);

  return coordinatesOfWord.some(coordinate => {
    return coordinatesOfOtherWords.some(([x, y]) => {
      return (
        Math.abs(x - coordinate[0]) <= 1 && Math.abs(y - coordinate[1]) <= 1
      );
    });
  });
};
