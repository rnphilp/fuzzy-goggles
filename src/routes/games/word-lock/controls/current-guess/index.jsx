/** @jsxImportSource @emotion/react */

import PT from 'prop-types';
import { Chip } from '@mui/material';

function CurrentGuess({ text }) {
  return (
    <Chip
      label={text}
      color="primary"
      css={{ visibility: text ? 'visible' : 'hidden' }}
    />
  );
}

CurrentGuess.propTypes = {
  text: PT.string.isRequired,
};

export default CurrentGuess;
