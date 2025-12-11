import mongoose from "mongoose";

export interface IPlayer {
  playerId: string;
  username: string;
  mmr?: number;
}

const playerSchema = new mongoose.Schema(
  {
    playerId: { unique: true, type: String, required: true },
    username: { type: String, required: true },
    mmr: { type: Number, default: 600 },
  },
  {
    virtuals: {
      getPlayerDetails: {
        get() {
          const player: IPlayer = {
            playerId: this.playerId,
            username: this.username,
            mmr: this.mmr,
          };
          return player;
        },
      },
    },
  },
);

export const Player = mongoose.model("Player", playerSchema);
