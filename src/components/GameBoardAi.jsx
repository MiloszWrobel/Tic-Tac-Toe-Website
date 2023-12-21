export default function GameBoardAi({ onSelectSquare, board, turns }) {
  function AiChoice(xRowindex, XColIndex) {
    if (turns === 8) {
      return;
    }
    let randomRow = Math.floor(Math.random() * 3);
    let randomCol = Math.floor(Math.random() * 3);
    if (randomRow === xRowindex && randomCol === XColIndex) {
      AiChoice(xRowindex, XColIndex);
    } else {
      if (!board[randomRow][randomCol]) {
        onSelectSquare(randomRow, randomCol);
        return;
      } else {
        AiChoice(xRowindex, XColIndex);
      }
    }
  }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => {
                    onSelectSquare(rowIndex, colIndex);
                    AiChoice(rowIndex, colIndex);
                  }}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
