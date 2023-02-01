import Cell from '../../../../../components/cell';

export default (word, hide, { coordinates, direction }, { cellSize, gap }) => {
  const spacing = cellSize + gap;
  const deltaX = direction === 'x' ? spacing : 0;
  const deltaY = direction === 'y' ? spacing : 0;

  return word.split('').map((letter, i) => {
    return (
      <Cell
        // eslint-disable-next-line react/no-array-index-key
        key={letter + i}
        x={coordinates[0] * spacing + i * deltaX}
        y={coordinates[1] * spacing + i * deltaY}
        value={hide ? '' : letter}
        cellSize={cellSize}
      />
    );
  });
};
