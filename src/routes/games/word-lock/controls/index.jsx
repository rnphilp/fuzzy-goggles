/** @jsxImportSource @emotion/react */

import PT from 'prop-types';
import { useState } from 'react';
import { Stack, IconButton, Grid } from '@mui/material';
import { KeyboardReturn } from '@mui/icons-material';

import Buttons from './buttons';
import CurrentGuess from './current-guess';

function Controls({ letters, submitGuess }) {
  const [currentGuess, setCurrentGuess] = useState('');
  const updateGuess = e => {
    setCurrentGuess(`${currentGuess}${e}`);
  };
  const handleSubmit = () => {
    submitGuess(currentGuess);
    setCurrentGuess('');
  };
  return (
    <Grid container item direction="column" alignItems="center" spacing={4}>
      <Grid item>
        <CurrentGuess text={currentGuess} />
      </Grid>
      <Grid item>
        <Stack spacing={2} direction="row">
          <Buttons letters={letters} handleClick={updateGuess} />
          <IconButton
            color="secondary"
            aria-label="submit"
            onClick={handleSubmit}
          >
            <KeyboardReturn />
          </IconButton>
        </Stack>
      </Grid>
    </Grid>
  );
}

Controls.propTypes = {
  letters: PT.arrayOf(PT.string.isRequired).isRequired,
  submitGuess: PT.func.isRequired,
};

export default Controls;
