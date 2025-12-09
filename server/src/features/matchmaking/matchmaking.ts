import Game from "../game/game";
import { player } from "../../server/middleware/zod/player";
import lobby from "../lobby/lobby";
import { BadRequestException } from "~/config/error.core";

class MatchMaking {
  private waitlist: Array<player>;

  constructor() {
    this.waitlist = new Array<player>();
  }

  public addToWaitlist(playerDetails: player) {
    for (let player of this.waitlist) {
      if (player.Id === playerDetails.Id) {
        throw new BadRequestException("Player is already in waitlist");
      }
    }
    if (lobby.isInGame(playerDetails.Id)) {
      throw new BadRequestException("Player is already in a match");
    }
    this.waitlist.push(playerDetails);
    this.tryInitMatch();
    return true;
  }

  private tryInitMatch() {
    if (this.waitlist.length > 1) {
      let player1 = this.waitlist.shift();
      let player2 = this.waitlist.shift();
      if (player1 && player2) {
        let game = new Game(player1, player2);
        const gameId = lobby.createGame(game);
        lobby.addPlayerToMatch(player1.Id, gameId);
        lobby.addPlayerToMatch(player2.Id, gameId);
      } else {
        throw new Error("Matchmaking error");
      }
    }
  }
}

let matchMaker: MatchMaking = new MatchMaking();
export default matchMaker;
