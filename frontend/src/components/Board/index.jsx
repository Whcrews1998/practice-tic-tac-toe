import {useState, useEffect} from "react";
import style from "./board.module.css";


export default function Board() {

  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [gameOver, setGameOver] = useState(false);
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

    if (hasWon) {
      setGameOver(true);
      return;
    }

    setCurrentPlayer((currentPlayer === "X") ? "O" : "X");


  }

  useEffect(() => {
    checkForWinnner();
  }, [board]);

  async function tickTile(index) {
    if (gameOver) return;
    if (board[index] !== null) return;

    const newBoard = structuredClone(board);
    newBoard[index] = currentPlayer;

    setBoard(newBoard);

    return;
  }

  function resetGame() {
    setGameOver(false);
    setBoard(new Array(9).fill(null));
    setCurrentPlayer("X");
  }

  function gameStatus() {
    if (gameOver) return "Player " + currentPlayer + " won!";
    else return "Player " + currentPlayer + "'s turn.";
  }

  return (
    <div className={style["container"]}>
      <p className={style["title"]}> Tic-Tac-Toe </p>
      <div className={style["board"]}>
        {displayBoard()}
      </div>
      <p className={style["playerTurn"]}>{gameStatus()}</p>
      <button type="button" onClick={resetGame}>Reset Game</button>
    </div>
  );
}
