/** @jsxImportSource @emotion/react */

import PT from 'prop-types';

const rectStyles = {
  stroke: 'red',
  'stroke-width': 0.5,
  fill: 'green',
};

const textStyles = {
  fill: 'blue',
  font: `8px roboto`,
};

function Cell({ x, y, value, cellSize }) {
  return (
    <>
      <rect
        x={x}
        y={y}
        height={cellSize}
        width={cellSize}
        rx="1"
        css={rectStyles}
      />
      <text
        x={x + cellSize / 2}
        y={y + 0.75 * cellSize}
        textAnchor="middle"
        css={textStyles}
      >
        {value}
      </text>
    </>
  );
}

Cell.defaultProps = {
  value: '',
  cellSize: 10,
};

Cell.propTypes = {
  x: PT.number.isRequired,
  y: PT.number.isRequired,
  value: PT.string,
  cellSize: PT.number,
};

export default Cell;
