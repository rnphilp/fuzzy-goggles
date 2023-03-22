/** @jsxImportSource @emotion/react */

import PT from 'prop-types';
import { useEffect, useState } from 'react';

import Word from '../word';
import { arrangeWords, gridSize } from './helpers';

const styles = {
  svgBox: {
    height: '100%',
    width: '100%',
  },
};

const config = {
  cellSize: 9,
  gap: 1,
};

function WordGrid({ allWords, guessedWords }) {
  const [wordsLayout, setWordsLayout] = useState([]);

  useEffect(() => {
    const arrangedWords = arrangeWords(allWords);
    setWordsLayout(arrangedWords);
  }, [allWords]);

  const { minX, minY, width, height } = gridSize(wordsLayout, config);
  const padding = config.cellSize / 2;
  const viewBoxDims = `${minX - padding} ${minY - padding} ${
    width + padding * 2
  } ${height + padding * 2}`;

  const orderedWords = wordsLayout.sort((a, b) => {
    if (guessedWords.includes(a.word) > guessedWords.includes(b.word)) return 1;
    if (guessedWords.includes(a.word) < guessedWords.includes(b.word))
      return -1;
    return 0;
  });

  if (orderedWords.length)
    return (
      <svg viewBox={viewBoxDims} css={styles.svgBox}>
        {orderedWords.map(({ word, coordinates, direction }) => (
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
  allWords: PT.arrayOf(PT.string.isRequired).isRequired,
  guessedWords: PT.arrayOf(PT.string.isRequired).isRequired,
};

export default WordGrid;
