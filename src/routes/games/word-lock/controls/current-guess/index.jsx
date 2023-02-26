import PT from 'prop-types';
import { Chip } from '@mui/material';

function CurrentGuess({ text }) {
  return <Chip label={text} color="primary" />;
}

CurrentGuess.propTypes = {
  text: PT.string.isRequired,
};

export default CurrentGuess;
