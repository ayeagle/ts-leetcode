const movements = [
  { x: 0, y: 1 },
  { x: 0, y: -1 },
  { y: 0, x: -1 },
  { y: 0, x: 1 },
  { x: 1, y: 1 },
  { x: 1, y: -1 },
  { y: 1, x: -1 },
  { y: -1, x: -1 },
];

function canMove(x: number, y: number, len: number, grid: number[][]): boolean {
  return x >= 0 && y >= 0 && x <= len && y <= len && grid[x][y] !== 1;
}

function shortestPathBinaryMatrix(grid: number[][]): number {
  const len = grid.length - 1;

  if (grid[len][len] === 1 || grid[0][0] === 1) {
    return -1;
  }

  const queue: { x: number; y: number; count: number }[] = [
    { x: 0, y: 0, count: 1 },
  ];
  grid[0][0] = 1;

  while (queue.length > 0) {
    const position = queue.pop();
    if (position) {
      if (position.y === len && position.x === len) {
        return position.count;
      } else {
        for (let move of movements) {
          const newX = position.x + move.x;
          const newY = position.y + move.y;

          if (canMove(newX, newY, len, grid)) {
            queue.unshift({ x: newX, y: newY, count: position.count + 1 });
            grid[newX][newY] = 1;
          }
        }
      }
    }
  }
  return -1;
}
