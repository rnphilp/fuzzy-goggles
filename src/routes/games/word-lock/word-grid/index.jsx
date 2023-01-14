import Cell from '../../../../components/cell';
import { arrangeWords } from './helpers';

const layoutWord = (word, { coordinates, direction }, { cellSize, gap }) => {
  const spacing = cellSize + gap;
  const deltaX = direction === 'x' ? spacing : 0;
  const deltaY = direction === 'y' ? spacing : 0;

  return word.split('').map((letter, i) => {
    return (
      <Cell
        x={coordinates[0] * spacing + i * deltaX}
        y={coordinates[1] * spacing + i * deltaY}
        value={letter}
        cellSize={cellSize}
        key={letter}
      />
    );
  });
};

function WordGrid() {
  const words = ['cupboard', 'cheese', 'fridge', 'motor', 'chair', 'table'];
  const config = {
    cellSize: 9,
    gap: 1,
  };

  const wordsCoordinates = arrangeWords(words);
  const svgWords = wordsCoordinates.map(({ word, coordinates, direction }) => {
    const cells = layoutWord(word, { coordinates, direction }, config);
    return <g key={word}>{cells}</g>;
  });
  return <svg viewBox="-150 -150 300 300">{svgWords}</svg>;
}

export default WordGrid;
