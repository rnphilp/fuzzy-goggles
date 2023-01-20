import placeWord from './place-word';

const shuffle = arr => arr.sort(() => 0.5 - Math.random());

const arrangeWords = (words, attempt = 0) => {
  const placedWords = [];
  try {
    return words.map(word => {
      const shuffledPlacedWords = shuffle(placedWords);
      const placedWord = placeWord(word, shuffledPlacedWords);
      placedWords.push(placedWord);
      return placedWord;
    });
  } catch (err) {
    if (attempt < 30) return arrangeWords(words, attempt + 1);
    throw err;
  }
};

export default arrangeWords;
