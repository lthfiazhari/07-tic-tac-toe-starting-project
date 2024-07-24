const intialGameBoard = [
  [null,null,null],
  [null,null,null],
  [null,null,null]
]

export default function GameBoard() {
  function show(input, inputt) {
    console.log(input, "ini input row")
    console.log(inputt, "ini input col")
  }
  return (
    <ol id="game-board">
      {intialGameBoard.map((row, indexRow) => (
        <li key={indexRow}>
          <ol>
            {row.map((col, indexCol) => (
              <li key={indexCol}>
                <button>{col} {show(indexRow, indexCol)}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}