import placeWord from './place-word';
import { shuffle } from '../../../../../utils';

const arrangeWords = (words = [], attempt = 0, targetGridSize = null) => {
  const minGridSize = 5;
  const maxGridSize = 10;
  const gridSize = targetGridSize || Math.min(words.length, maxGridSize);
  const maxAttempts = 100;

  const placedWords = [];
  const shuffledWords = shuffle(words);

  shuffledWords.forEach(word => {
    if (placedWords.length <= maxGridSize) {
      const shuffledPlacedWords = shuffle(placedWords);
      try {
        const placedWord = placeWord(word, shuffledPlacedWords);
        placedWords.push(placedWord);
      } catch (err) {
        // do nothing
      }
    }
  });

  if (placedWords.length === gridSize) {
    return placedWords;
  }
  if (attempt < maxAttempts) return arrangeWords(words, attempt + 1, gridSize);
  if (gridSize > minGridSize) return arrangeWords(words, 0, gridSize - 1);
  throw Error({
    msg: 'failed to position grid',
    details: `failed to position a min. ${minGridSize} words in a grid after ${maxAttempts} attempts`,
    words,
  });
};

export default arrangeWords;
