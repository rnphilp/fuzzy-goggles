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

const groupByLetters = allWords => {
  const groupedWords = _.groupBy(allWords, word => _.uniq([...word]).sort());
  const popularGroups = {};
  Object.entries(groupedWords).forEach(([letters, words]) => {
    if (words.length > 5) {
      const lettersArr = letters.split(',');
      if (!popularGroups[lettersArr.length]) {
        popularGroups[lettersArr.length] = [];
      }
      popularGroups[lettersArr.length].push({ letters: lettersArr, words });
    }
  });
  return popularGroups;
};
const runScript = filepath => {
  const allWords = readFile(filepath);
  const filteredWords = removeInvalidWords(allWords);
  writeToFile(filteredWords, 'words');

  const groupedWords = groupByLetters(filteredWords);
  writeToFile(groupedWords, 'grouped-words');
};

runScript(`${__dirname}/data/english-word-list.txt`);
