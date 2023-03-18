const fs = require('fs');
const _ = require('lodash');

const readFile = filepath =>
  fs.readFileSync(filepath).toString('UTF8').split('\n');

// removes words with numbers, capital letters and special characters
const removeInvalidWords = words =>
  words.filter(
    word => ![...word].some(letter => letter === letter.toUpperCase())
  );

const writeToFile = (data, filename) =>
  fs.writeFileSync(
    `${__dirname}/../../src/data/${filename}.json`,
    JSON.stringify(data)
  );

const findContainedWords = (letters, wordObjs) => {
  const words = [];
  wordObjs.forEach(wordObj => {
    if (letters.length > wordObj.letters.length) {
      const containsEveryLetter = wordObj.letters.every(letter => {
        return letters.includes(letter);
      });
      if (containsEveryLetter) {
        words.push(...wordObj.words);
      }
    }
  });
  return words;
};

const groupByLetters = allWords => {
  const filteredWords = allWords.filter(word => word.length > 2);
  const groupedWords = _.groupBy(filteredWords, word =>
    _.uniq([...word]).sort()
  );

  const wordObjs = Object.entries(groupedWords).map(([letters, words]) => {
    return {
      letters: letters.split(','),
      words,
    };
  });

  const wordsByLength = {};
  wordObjs.forEach(({ letters, words }) => {
    if (letters.length <= 5) {
      if (!wordsByLength[letters.length]) {
        wordsByLength[letters.length] = [];
      }
      const containedWords = findContainedWords(letters, wordObjs);
      const wordsToAdd = [...words, ...containedWords];
      wordsByLength[letters.length].push({ letters, words: wordsToAdd });
    }
  });
  return wordsByLength;
};

const runScript = filepath => {
  const allWords = readFile(filepath);
  const filteredWords = removeInvalidWords(allWords);
  writeToFile(filteredWords, 'words');

  const groupedWords = groupByLetters(filteredWords);
  writeToFile(groupedWords, 'grouped-words');
};

if (process.env.NODE_ENV !== 'test')
  runScript(`${__dirname}/data/brit-a-z.txt`);

module.exports = {
  findContainedWords,
};
