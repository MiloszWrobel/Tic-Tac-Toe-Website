import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleClick() {
    setIsEditing(true);
  }
  return (
    <li>
      <span className="player">
        {isEditing ? <input /> : <span className="player-name">{name}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}> Edit</button>
    </li>
  );
}
