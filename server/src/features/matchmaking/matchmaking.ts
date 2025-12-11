import Game from "../game/game";
import lobby from "../lobby/lobby";
import { BadRequestException, InternalServerError } from "~/config/error.core";
import fetchPlayer from "~/utils/fetchPlayer";

class MatchMaking {
  private waitlist: Array<PlayerRequest>;

  constructor() {
    this.waitlist = new Array<PlayerRequest>();
  }

  public addToWaitlist(playerRequesting: PlayerRequest) {
    for (let player of this.waitlist) {
      if (player.id === playerRequesting.id) {
        throw new BadRequestException("Player is already in waitlist");
      }
    }
    if (lobby.isInGame(playerRequesting.id)) {
      throw new BadRequestException("Player is already in a match");
    }
    this.waitlist.push(playerRequesting);
    this.tryInitMatch();
    return true;
  }

  private async tryInitMatch() {
    if (this.waitlist.length > 1) {
      let player1Req = this.waitlist.shift();
      let player2Req = this.waitlist.shift();
      if (!player1Req || !player2Req) {
        throw new InternalServerError("Failed to add players to a game");
      }
      let player1 = await fetchPlayer(player1Req);
      let player2 = await fetchPlayer(player2Req);
      if (player1 && player2) {
        let game = new Game(player1, player2);
        const gameId = lobby.createGame(game);
        lobby.addPlayerToMatch(player1.playerId, gameId);
        lobby.addPlayerToMatch(player2.playerId, gameId);
      } else {
        throw new Error("Matchmaking error");
      }
    }
  }
}

let matchMaker: MatchMaking = new MatchMaking();
export default matchMaker;
