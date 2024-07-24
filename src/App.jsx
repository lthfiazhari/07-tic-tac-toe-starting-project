import React from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* <Player name={"player one"} symbol={"O"}/> */}
          {/* <Player name={"player two"} symbol={"X"}/> */}
          <Player name="player one" symbol="X"/>
          <Player name="player two " symbol="O"/>
        </ol>
        <GameBoard />
      </div>
      log
    </main>
  )
}

export default App
