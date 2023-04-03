/** @jsxImportSource @emotion/react */

import PT from 'prop-types';
import { useTheme } from '@mui/material/styles';

const themedStyles = theme => ({
  cell: {
    // stroke: 'red',
    // strokeWidth: 0.5,
    fill: theme.palette.primary.main,
  },
  emptyCell: {
    // stroke: 'red',
    // strokeWidth: 0.5,
    fill: '#E2E2E2',
    opacity: 0.75,
  },
  textStyles: {
    fill: theme.palette.primary.contrastText,
    font: `6px roboto`,
  },
});

function Cell({ x, y, value, cellSize }) {
  const theme = useTheme();
  const styles = themedStyles(theme);
  return (
    <>
      <rect
        x={x}
        y={y}
        height={cellSize}
        width={cellSize}
        rx="1"
        css={value ? styles.cell : styles.emptyCell}
      />
      <text
        x={x + cellSize / 2}
        y={y + 0.75 * cellSize}
        textAnchor="middle"
        css={styles.textStyles}
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
  // eslint-disable-next-line
  theme: PT.object,
};

export default Cell;
