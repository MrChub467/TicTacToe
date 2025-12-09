import Button from "react-bootstrap/Button";
import TicTacToeBoard from "../features/TicTacToeBoard/TicTacToeBoard";
import useGameHooks from "../hooks/gameHooks";

const GamePage = () => {
  const { board, currBoard, setBoard } = useGameHooks();

  // TODO: fix one select till confirmed
  const onMove = (i: number, j: number) => {
    if (board[i][j] === "") {
      const newBoard = [...currBoard];
      newBoard[i][j] = "X";
      setBoard(newBoard);
    }
    console.log(board, currBoard);
  };
  return (
    <div className="">
      Games
      <TicTacToeBoard board={board} onMove={onMove} />
      <Button variant="outline-primary">Confirm Move</Button>
    </div>
  );
};

export default GamePage;
