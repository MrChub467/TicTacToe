import { useState } from "react";

const useGameHooks = () => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const currBoard = [...board];
  return { board, currBoard, setBoard };
};

export default useGameHooks;
