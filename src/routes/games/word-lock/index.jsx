/** @jsxImportSource @emotion/react */

import { Grid } from '@mui/material';
import { useState, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

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

const selectWords = noOfLetters => {
  const wordGroup = groupedWords[noOfLetters];
  const randomIndex = Math.round(Math.random() * wordGroup.length);
  return {
    words: wordGroup[randomIndex].words,
    letters: wordGroup[randomIndex].letters,
  };
};

const checkIfPortrait = () => {
  if (window.screen?.orientation) {
    if (window.screen.orientation.type.includes('portrait')) return true;
    return false;
  }
  return window.orientation === 0 || window.orientation === 180;
};

function WordLock() {
  // TODO: move screen rotation to context at game level
  const [isPortrait, setIsPortrait] = useState(checkIfPortrait());

  if (window.screen?.orientation) {
    window.screen.orientation.onchange = () => {
      setIsPortrait(checkIfPortrait());
    };
  }

  const noOfLetters = 4;
  const [words, setWords] = useState([]);
  const [letters, setLetters] = useState([]);

  const setNewWords = numOfLetters => {
    const newWords = selectWords(numOfLetters);
    setWords(newWords.words);
    setLetters(newWords.letters);
  };

  useEffect(() => {
    setNewWords(noOfLetters);
  }, []);

  const [guessedWords, setGuessedWords] = useState([]);

  const handleGuess = guess => {
    const updatedGuesses = [...guessedWords];
    updatedGuesses.push(guess);
    setGuessedWords(updatedGuesses);
  };

  return (
    words.length && (
      <ErrorBoundary
        fallbackRender={({ resetErrorBoundary }) => {
          setNewWords(noOfLetters);
          resetErrorBoundary();
        }}
      >
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
            <WordGrid allWords={words} guessedWords={guessedWords} />
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            xs={6}
          >
            <Grid>
              <Controls letters={letters} submitGuess={handleGuess} />
            </Grid>
          </Grid>
        </Grid>
      </ErrorBoundary>
    )
  );
}

export default WordLock;
