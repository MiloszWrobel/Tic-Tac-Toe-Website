export default function GameOver({ winner, onRestart, onMenu }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={onRestart}>Rematch</button>
        <button onClick={onMenu}>Go back to Menu</button>
      </p>
    </div>
  );
}
