/** @jsxImportSource @emotion/react */

import { Grid } from '@mui/material';

import WordGrid from './word-grid';
import { groupedWords } from '../../../data';

const styles = {
  grid: {
    width: '100vw',
    height: '100vh',
  },
  wordGridContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const selectWord = noOfLetters => {
  const wordGroup = groupedWords[noOfLetters];
  const randomIndex = Math.round(Math.random() * wordGroup.length);
  return wordGroup[randomIndex].words;
};

function WordLock() {
  const noOfLetters = 4;
  const words = selectWord(noOfLetters);
  const guessedWords = words;
  return (
    <Grid container zeroMinWidth css={styles.grid}>
      <Grid item xs={12} md={6} css={styles.wordGridContainer}>
        <WordGrid words={words} guessedWords={guessedWords} />
      </Grid>
      <Grid item xs={12} md={6}>
        <p>placeholder</p>
      </Grid>
    </Grid>
  );
}

export default WordLock;
