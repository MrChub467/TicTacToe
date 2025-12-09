import { Request, Response } from "express";
import matchMaker from "~/features/matchmaking/matchmaking";
import { PlayerSchema } from "../../middleware/zod/player";
import HTTP_STATUS from "~/config/httpStatus";
import { DuplicateRequestException } from "~/config/error.core";
import lobby from "~/features/lobby/lobby";

class MatchMakingService {
  public addToMatchService(req: Request, res: Response) {
    const player = PlayerSchema.parse(req.body);
    const isAdded = matchMaker.addToWaitlist(player);
    if (!isAdded) {
      throw new DuplicateRequestException(
        "Player has already been added to queue",
      );
    }
    return res
      .status(HTTP_STATUS.CREATED)
      .json({ message: "Queued for a match" });
  }

  public checkNewGame(req: Request, res: Response) {
    const { playerid } = req.params;
    const isGameStart = lobby.getGameId(playerid);
    return res
      .status(HTTP_STATUS.OK)
      .json({ message: "Game has been found", data: { gameId: isGameStart } });
  }
}

const matchMakingService: MatchMakingService = new MatchMakingService();
export default matchMakingService;
