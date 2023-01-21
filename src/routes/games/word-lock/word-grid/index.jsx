/** @jsxImportSource @emotion/react */

import Word from '../word';
import { arrangeWords, gridSize } from './helpers';

function WordGrid() {
  const words = ['random', 'words', 'forming', 'crossword', 'grid'];
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
          coordinates={coordinates}
          direction={direction}
          config={config}
        />
      ))}
    </svg>
  );
}

export default WordGrid;
