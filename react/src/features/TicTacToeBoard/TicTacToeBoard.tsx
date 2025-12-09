import "./TicTacToeBoard.scss";

interface Props {
  board: Array<Array<string>>;
  onMove: (i: number, j: number) => void;
}

const TicTacToeBoard = ({ board, onMove }: Props) => {
  return (
    <div className="board">
      {board.map((line, i) =>
        line.map((square, j) => {
          if (square === "O") {
            return (
              <div
                key={`${i}${j}`}
                className="square text-success"
                onClick={() => onMove(i, j)}
              >
                {square}
              </div>
            );
          }
          return (
            <div
              key={`${i}${j}`}
              className="square text-danger"
              onClick={() => onMove(i, j)}
            >
              {square}
            </div>
          );
        }),
      )}
    </div>
  );
};

export default TicTacToeBoard;
