/** @jsxImportSource @emotion/react */

import { Grid } from '@mui/material';
import WordGrid from './word-grid';

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

function WordLock() {
  return (
    <Grid container zeroMinWidth css={styles.grid}>
      <Grid item xs={12} md={6} css={styles.wordGridContainer}>
        <WordGrid />
      </Grid>
      <Grid item xs={12} md={6}>
        <p>placeholder</p>
      </Grid>
    </Grid>
  );
}

export default WordLock;
