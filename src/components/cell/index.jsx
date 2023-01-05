/** @jsxImportSource @emotion/react */

import PT from 'prop-types';

const cellSize = 10;

const rectStyles = {
  stroke: 'red',
  'stroke-width': 0.5,
  fill: 'green',
};

const textStyles = {
  fill: 'blue',
  font: `10px roboto`,
};

function Cell({ x, y, value }) {
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
        y={y + 0.85 * cellSize}
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
};

Cell.propTypes = {
  x: PT.number.isRequired,
  y: PT.number.isRequired,
  value: PT.string,
};

export default Cell;
