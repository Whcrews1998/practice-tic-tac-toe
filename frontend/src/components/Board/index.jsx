import {useState, useEffect} from "react";
import style from "./board.module.css";

let currentPlayer = "X";

export default function Board() {

  const [board, setBoard] = useState(new Array(9).fill(null));

  function displayBoard() {
    return board.map( (value, index) => {
      return (
        <div key={index} className={style["square"]} onClick={() => tickTile(index)}>
          {value}
        </div>
      );
    })
  }

  function checkForWinnner() {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];


    let hasWon = false;
    for (let val of winningPatterns) {
      const [a, b, c] = val;      
      if (board[a] == null || board[b] == null || board[c] ==null)
        continue;
      if (board[a] === board[b] && board[b] === board[c])
        hasWon = true;
    }

    // Check if winner found.
    if (hasWon) {
      alert("Winner!");
      return;
    }
    // Check if all tiles are uses up.
    if (!board.includes(null)) {
      alert("Tie!");
    }
  }

  useEffect(() => {
    checkForWinnner();
  }, [board]);

  async function tickTile(index) {
    if (board[index] !== null) return;

    const newBoard = structuredClone(board);
    newBoard[index] = currentPlayer;

    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    setBoard(newBoard);

    return;
  }

  function resetGame() {
    setBoard(new Array(9).fill(null));
    currentPlayer = "X";
  }

  return (
    <div className={style["container"]}>
      <p className={style["title"]}> Tic-Tac-Toe </p>
      <div className={style["board"]}>
        {displayBoard()}
      </div>
      <p> Player {currentPlayer}'s Turn</p>
      <button type="button" onClick={resetGame}>Reset Game</button>
    </div>
  );
}
