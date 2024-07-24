import { useState } from "react"

export default function Player( {name, symbol}) {
  const [namePlayer, setNamePlayer] = useState(name)
  const [isEditing, setIsEditing] = useState(false)

  function handleInput() {
    setIsEditing((editing)=> !editing) //must be function if wanna change state
    // console.log("triggered")
  }
  function handleChangeName(e){
    // console.log(e, "even
    setNamePlayer(e.target.value)
    // setNamePlayer((e.target.value)=> e.target.value)
  }

  let playerName = <span className="player-name">{namePlayer}</span>

  if (isEditing) {
    playerName = <input type="text" required value={namePlayer} onChange={handleChangeName}/>
  }
  return(
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleInput}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}