/** @jsxImportSource @emotion/react */

import PT from 'prop-types';
import { layoutWord } from './helpers';

function Word({ word, hide, coordinates, direction, config }) {
  const cells = layoutWord(word, hide, { coordinates, direction }, config);
  return <g key={word}>{cells}</g>;
}

Word.propTypes = {
  word: PT.string.isRequired,
  hide: PT.bool.isRequired,
  coordinates: PT.arrayOf(PT.number).isRequired,
  direction: PT.string.isRequired,
  config: PT.shape({
    cellSize: PT.number.isRequired,
    gap: PT.number.isRequired,
  }).isRequired,
};

export default Word;
