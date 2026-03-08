import style from "./board.module.css";
export default function Board() {
  return (
    <div className={style["container"]}>
      <p className={style["title"]}> Tic-Tac-Toe </p>
      <div className={style["board"]}>
        <div className={`${style["square"]}`}></div>
        <div className={`${style["square"]}`}></div>
        <div className={`${style["square"]}`}></div>
        <div className={`${style["square"]}`}></div>
        <div className={`${style["square"]}`}></div>
        <div className={`${style["square"]}`}></div>
        <div className={`${style["square"]}`}></div>
        <div className={`${style["square"]}`}></div>
        <div className={`${style["square"]}`}></div>
      </div>
    </div>
  );
}
