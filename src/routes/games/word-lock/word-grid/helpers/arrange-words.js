import placeWord from './place-word';

const shuffle = arr => arr.sort(() => 0.5 - Math.random());

export default words => {
  const placedWords = [];
  return words.map(word => {
    const shuffledPlacedWords = shuffle(placedWords);
    const placedWord = placeWord(word, shuffledPlacedWords);
    placedWords.push(placedWord);
    return placedWord;
  });
};
