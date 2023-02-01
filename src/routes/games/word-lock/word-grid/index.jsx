/** @jsxImportSource @emotion/react */
import PT from 'prop-types';

import Word from '../word';
import { arrangeWords, gridSize } from './helpers';

function WordGrid({ words, guessedWords }) {
  const config = {
    cellSize: 9,
    gap: 1,
  };

  const wordsCoordinates = arrangeWords(words);
  const { minX, minY, width, height } = gridSize(wordsCoordinates, config);
  const padding = config.cellSize / 2;
  const viewBoxDims = `${minX - padding} ${minY - padding} ${
    width + padding * 2
  } ${height + padding * 2}`;

  return (
    <svg viewBox={viewBoxDims}>
      {wordsCoordinates.map(({ word, coordinates, direction }) => (
        <Word
          key={word}
          word={word}
          hide={!guessedWords.includes(word)}
          coordinates={coordinates}
          direction={direction}
          config={config}
        />
      ))}
    </svg>
  );
}

WordGrid.propTypes = {
  words: PT.arrayOf(PT.string.isRequired).isRequired,
  guessedWords: PT.arrayOf(PT.string.isRequired).isRequired,
};

export default WordGrid;
