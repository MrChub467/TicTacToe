import { move } from "~/server/middleware/zod/move";
import { player } from "../../server/middleware/zod/player";
import Board from "./board";
import Player from "./player";
import { BadRequestException } from "~/config/error.core";

class Game {
  private board: Board;
  private player1: Player;
  private player2: Player;
  private player1Turn: boolean;
  private winner: string | undefined;

  constructor(player1: player, player2: player) {
    this.board = new Board();
    this.player1 = new Player(player1);
    this.player2 = new Player(player2);
    this.player1Turn = true;
  }

  public getGameDetails() {
    const board = this.board.getGameBoard();
    const player1 = this.player1.getPlayerDetails();
    const player2 = this.player2.getPlayerDetails();
    const gameWinner = this.winner;
    return { board, player1, player2, gameWinner };
  }

  public makeMove(move: move) {
    let playerToMove: Player;
    let playerToWait: Player;
    if (this.player1Turn) {
      playerToMove = this.player1;
      playerToWait = this.player2;
    } else {
      playerToMove = this.player2;
      playerToWait = this.player1;
    }

    if (move.playerId != playerToMove.getPlayerId()) {
      if (move.playerId == playerToWait.getPlayerId()) {
        throw new BadRequestException("Not your turn bimbo");
      } else {
        throw new BadRequestException("This Id is not apart of this game");
      }
    }

    if (!(0 <= move.i && move.i < 3)) {
      throw new BadRequestException("'i' is not in bounds");
    }
    if (!(0 <= move.j && move.j < 3)) {
      throw new BadRequestException("'j' is not in bounds");
    }

    const symbol = this.player1Turn ? "X" : "O";
    const moved = this.board.setSquare(move.i, move.j, symbol);
    if (!moved) {
      throw new BadRequestException("Square already filled");
    }

    this.player1Turn = !this.player1Turn;
    this.winner = this.board.checkWinner();
  }
}

export default Game;
