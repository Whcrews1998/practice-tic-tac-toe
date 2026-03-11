import {useState} from "react";
import style from "./board.module.css";

export default function Board() {
  const currentPlayer = "X";

  const [board, setBoard] = useState(new Array(9).fill(null));

  function displayBoard() {
    return board.map( (value, index) => {
      return (
        <div key={index} className={style["square"]}>
          {value}
        </div>
      );
    })
  }

  return (
    <div className={style["container"]}>
      <p className={style["title"]}> Tic-Tac-Toe </p>
      <div className={style["board"]}>
        {displayBoard()}
        {/* <div className={`${style["square"]}`}>{board[0]}</div> */}
        {/* <div className={`${style["square"]}`}>{board[1]}</div> */}
        {/* <div className={`${style["square"]}`}>{board[2]}</div> */}
        {/* <div className={`${style["square"]}`}>{board[3]}</div> */}
        {/* <div className={`${style["square"]}`}>{board[4]}</div> */}
        {/* <div className={`${style["square"]}`}>{board[5]}</div> */}
        {/* <div className={`${style["square"]}`}>{board[6]}</div> */}
        {/* <div className={`${style["square"]}`}>{board[7]}</div> */}
        {/* <div className={`${style["square"]}`}>{board[8]}</div> */}
      </div>
    </div>
  );
}
