import style from "./board.module.css";
export default function Board() {
  return (
    <div className={style["container"]}>
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
  );
}
