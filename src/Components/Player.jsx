import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [finalName, setFinalName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function changeInput(event) {
    setFinalName(event.target.value);
  }
  function changeValue() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, finalName);
    }
  }
  let btnCaption = "Edit";
  let playerName = <span className="player-name">{finalName}</span>;
  if (isEditing) {
    playerName = (
      <input type="text" required value={finalName} onChange={changeInput} />
    );
    btnCaption = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={changeValue}>{btnCaption}</button>
      {/* {btnCaption} instead --> {isEditing ? 'Save': 'Edit';} */}
    </li>
  );
}
