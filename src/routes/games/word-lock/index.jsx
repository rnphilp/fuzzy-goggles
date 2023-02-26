/** @jsxImportSource @emotion/react */

import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';

import WordGrid from './word-grid';
import Controls from './controls';
import { groupedWords } from '../../../data';

const styles = {
  grid: {
    width: '100vw',
    height: '100vh',
  },
  wordGrid: {
    height: '100%',
    width: '100%',
  },
  wordGridPortrait: {
    height: '50vh',
    width: '100%',
  },
};

const selectWord = noOfLetters => {
  const wordGroup = groupedWords[noOfLetters];
  const randomIndex = Math.round(Math.random() * wordGroup.length);
  return {
    words: wordGroup[randomIndex].words,
    letters: wordGroup[randomIndex].letters,
  };
};

function WordLock() {
  // TODO: move screen rotation to context at game level
  const [isPortrait, setIsPortrait] = useState(
    window.screen.orientation.type.includes('portrait')
  );

  window.screen.orientation.onchange = () => {
    if (window.screen.orientation.type.includes('portrait'))
      return setIsPortrait(true);
    return setIsPortrait(false);
  };

  const noOfLetters = 4;
  const [words, setWords] = useState([]);
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const newWords = selectWord(noOfLetters);
    setWords(newWords.words);
    setLetters(newWords.letters);
  }, []);

  const [guessedWords, setGuessedWords] = useState([]);

  const handleGuess = guess => {
    const updatedGuesses = [...guessedWords];
    updatedGuesses.push(guess);
    setGuessedWords(updatedGuesses);
  };

  return (
    words.length && (
      <Grid
        container
        direction={isPortrait ? 'column' : 'row'}
        justifyContent="center"
        alignItems="center"
        flexWrap="nowrap"
        css={styles.grid}
      >
        <Grid
          item
          xs={6}
          css={isPortrait ? styles.wordGridPortrait : styles.wordGrid}
        >
          <WordGrid words={words} guessedWords={guessedWords} />
        </Grid>
        <Grid item xs={6}>
          <Controls letters={letters} submitGuess={handleGuess} />
        </Grid>
      </Grid>
    )
  );
}

export default WordLock;
