// letters render with width and height from origin at top left
export default (words, { cellSize, gap }) => {
  let minX;
  let maxX;
  let minY;
  let maxY;

  words.forEach(({ word, coordinates, direction }) => {
    const [startX, startY] = coordinates;
    const endX = direction === 'x' ? startX + word.length - 1 : startX;
    const endY = direction === 'y' ? startY + word.length - 1 : startY;
    if (minX === undefined || startX < minX) minX = startX;
    if (minY === undefined || startY < minY) minY = startY;
    if (maxX === undefined || endX > maxX) maxX = endX;
    if (maxY === undefined || endY > maxY) maxY = endY;
  });
  return {
    minX: minX * (cellSize + gap),
    minY: minY * (cellSize + gap),
    width: (maxX - minX) * (cellSize + gap) + cellSize,
    height: (maxY - minY) * (cellSize + gap) + cellSize,
  };
};
