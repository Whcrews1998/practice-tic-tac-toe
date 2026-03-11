import {useState} from "react";
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

  function tickTile(index) {
    if (board[index] !== null) return;

    const newBoard = structuredClone(board);
    newBoard[index] = currentPlayer;

    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    setBoard(newBoard);
    return;
  }

  return (
    <div className={style["container"]}>
      <p className={style["title"]}> Tic-Tac-Toe </p>
      <div className={style["board"]}>
        {displayBoard()}
      </div>
    </div>
  );
}
