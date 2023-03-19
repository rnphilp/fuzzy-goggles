import placeWord from './place-word';
import { shuffle } from '../../../../../utils';

const arrangeWords = (words = [], attempt = 0) => {
  const minGridSize = 5;
  const maxAttempts = 100;

  const placedWords = [];
  const shuffledWords = shuffle(words);

  shuffledWords.forEach(word => {
    const shuffledPlacedWords = shuffle(placedWords);
    try {
      const placedWord = placeWord(word, shuffledPlacedWords);
      placedWords.push(placedWord);
    } catch (err) {
      // do nothing
    }
  });

  if (placedWords.length >= minGridSize) {
    return placedWords;
  }
  if (attempt < maxAttempts) return arrangeWords(words, attempt + 1);
  throw Error(
    `could not position a min. ${minGridSize} words in a grid after ${maxAttempts} attempts`
  );
};

export default arrangeWords;
