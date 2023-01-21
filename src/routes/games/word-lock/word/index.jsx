/** @jsxImportSource @emotion/react */

import PT from 'prop-types';
import { layoutWord } from './helpers';

function Word({ word, coordinates, direction, config }) {
  const cells = layoutWord(word, { coordinates, direction }, config);
  return <g key={word}>{cells}</g>;
}

Word.propTypes = {
  word: PT.string.isRequired,
  coordinates: PT.arrayOf(PT.number).isRequired,
  direction: PT.string.isRequired,
  config: PT.shape({
    cellSize: PT.number.isRequired,
    gap: PT.number.isRequired,
  }).isRequired,
};

export default Word;
