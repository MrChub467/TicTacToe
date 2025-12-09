import express from "express";
import matchMakingService from "../services/matchmaking/matchMakingService";

const matchMakingRoute = express.Router();

matchMakingRoute.post("/add", matchMakingService.addToMatchService);
matchMakingRoute.get("/checkgame/:playerid", matchMakingService.checkNewGame);

export default matchMakingRoute;
