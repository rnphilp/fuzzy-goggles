/** @jsxImportSource @emotion/react */

import { Grid } from '@mui/material';

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
};

const selectWord = noOfLetters => {
  const wordGroup = groupedWords[noOfLetters];
  const randomIndex = Math.round(Math.random() * wordGroup.length);
  return wordGroup[randomIndex].words;
};

function WordLock() {
  const noOfLetters = 4;
  const words = selectWord(noOfLetters);
  const guessedWords = [words[0], words[1], words[2]];
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      css={styles.grid}
    >
      <Grid item xs={12} md={6} css={styles.wordGrid}>
        <WordGrid
          words={words}
          guessedWords={guessedWords}
          css={styles.wordGrid}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <p>placeholder</p>
      </Grid>
    </Grid>
  );
}

export default WordLock;
