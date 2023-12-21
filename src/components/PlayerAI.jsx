export default function PlayerAI({ symbol, isActive }) {
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">AI Player</span>
        <span className="player-symbol">{symbol}</span>
      </span>
    </li>
  );
}
