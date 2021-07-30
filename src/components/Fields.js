import React, { useState } from "react";
import {
  recursionClick
} from "../helpers";
let endMineSweeperGame = false;

const Fields = ({ row, column, value }) => {
  const [clicked, setClicked] = useState(false);
  const [flag, setFlag] = useState("");

  const handleClick = (e) => {
    const target = e.target;
    if (!flag) setClicked(true);
    if (!endMineSweeperGame) {
      if (value === "" && target.id === `${row}_${column}`)
        recursionClick(target, row, column);
      if (value === "x" && !flag) {
        endGame(target);
      }
    }
  };

  return (
    <td
      id={`${row}_${column}`}
      className={`cell ${clicked ? "clicked" : ""} ${
        value === "x" ? "bomb" : ""
      }`}
      onClick={handleClick}
    >
      {clicked && !flag ? value : ""}
      {flag}
    </td>
  );
};

export default Fields;


function endGame(target) {
  endMineSweeperGame = true;
  target.style.backgroundColor = "black";
  let cols = target.parentElement.children.length;
  let rows = target.parentElement.parentElement.children.length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (document.getElementById(`${i}_${j}`))
        document.getElementById(`${i}_${j}`).click();
    }
  }
  return;
}
