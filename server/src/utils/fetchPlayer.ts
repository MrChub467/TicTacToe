import { InternalServerError } from "~/config/error.core";
import { Player } from "~/server/models/player";

const fetchPlayer = async (playerReq: PlayerRequest) => {
  console.log(playerReq);
  const player = await Player.findOne({playerId: playerReq.id}).exec();
  if (!player) {
    const newPlayer = new Player({playerId: playerReq.id, username: playerReq.username});
    newPlayer.save();
    return newPlayer.getPlayerDetails;
  }
  return player.getPlayerDetails;
};

export default fetchPlayer;
