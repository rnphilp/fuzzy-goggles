/** @jsxImportSource @emotion/react */

import { Grid } from '@mui/material';
import { useState } from 'react';

import WordGrid from './word-grid';
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
  return wordGroup[randomIndex].words;
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
  const words = selectWord(noOfLetters);
  const guessedWords = [words[0], words[1], words[2]];
  return (
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
        <p>placeholder</p>
      </Grid>
    </Grid>
  );
}

export default WordLock;
