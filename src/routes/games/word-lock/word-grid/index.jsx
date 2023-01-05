import Cell from '../../../../components/cell';

const layoutWord = (word, cellSize, gap) => {
  const spacing = cellSize + gap;
  return word.split('').map((letter, i) => {
    return (
      <Cell
        x={10 + (i + 1) * spacing}
        y={10}
        value={letter}
        cellSize={cellSize}
        key={letter}
      />
    );
  });
};

function WordGrid() {
  const word = 'abcdefghijklmnopqrstuvwxyz';
  const cells = layoutWord(word, 9, 1);
  return <svg viewBox="0 0 300 300">{cells}</svg>;
}

export default WordGrid;
