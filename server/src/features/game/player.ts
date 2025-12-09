import { player } from "../../server/middleware/zod/player";

class Player {
  private playerDetails: player;

  constructor(playerDetails: player) {
    this.playerDetails = playerDetails;
  }

  public getPlayerDetails() {
    return this.playerDetails;
  }

  public getPlayerId() {
    return this.playerDetails.Id;
  }
}

export default Player;
