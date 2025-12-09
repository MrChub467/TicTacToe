import { Request, Response } from "express";
import HTTP_STATUS from "~/config/httpStatus";
import lobby from "~/features/lobby/lobby";
import { Move } from "../middleware/zod/move";
import { BadRequestException } from "~/config/error.core";

class LobbyService {
  public getGameData(req: Request, res: Response) {
    const { gameid } = req.params;
    const gameData = lobby.getGameData(gameid);
    return res
      .status(HTTP_STATUS.OK)
      .json({ message: "Game data retrieved", data: { gameData } });
  }

  public makeMove(req: Request, res: Response) {
    const { gameid } = req.params;
    const moveData = Move.parse(req.body);
    console.log(moveData);
    if (!moveData) {
      throw new BadRequestException("Incomplete request");
    }

    const game = lobby.getGameFromPlayerId(gameid);
    if (!game) {
      throw new BadRequestException("Game not found");
    }

    game.makeMove(moveData);
    return res.status(HTTP_STATUS.OK).json({ message: "Move succeeded" });
  }

  public retirePlayerFromGame(req: Request, res: Response) {
    const { playerid } = req.params;
    if (!playerid) {
      throw new BadRequestException("No Player Id parameter");
    }
    const isDisconnected = lobby.retirePlayerFromGame(playerid);
    if (!isDisconnected) {
      throw new BadRequestException("Failed to disconnect player from game");
    }
    return res.status(HTTP_STATUS.OK).json({ message: "Disconnect from game" });
  }
}

const lobbyService = new LobbyService();
export default lobbyService;
