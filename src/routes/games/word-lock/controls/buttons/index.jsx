import PT from 'prop-types';
import { Stack, Button } from '@mui/material';

export default function Buttons({ letters, handleClick }) {
  return (
    <Stack spacing={2} direction="row">
      {letters.map(letter => (
        <Button
          key={letter}
          size="large"
          variant="contained"
          sx={{ borderRadius: 28 }}
          onClick={() => handleClick(letter)}
        >
          {letter}
        </Button>
      ))}
    </Stack>
  );
}

Buttons.propTypes = {
  letters: PT.arrayOf(PT.string.isRequired).isRequired,
  handleClick: PT.func.isRequired,
};
