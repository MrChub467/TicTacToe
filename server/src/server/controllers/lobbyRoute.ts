import express from "express";
import lobbyService from "../services/lobbyService";

const lobbyRoute = express.Router();

lobbyRoute.get("/gamestate/:gameid", lobbyService.getGameData);
lobbyRoute.post("/:gameid", lobbyService.makeMove);
lobbyRoute.post("/retireplayer/:playerid", lobbyService.retirePlayerFromGame);

export default lobbyRoute;
