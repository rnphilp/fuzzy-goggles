import Cell from '../../../../components/cell';

function WordGrid() {
  const cellVal = 'X';
  return (
    <svg viewBox="0 0 250 250">
      <Cell x={10} y={10} value={cellVal} />
    </svg>
  );
}

export default WordGrid;
