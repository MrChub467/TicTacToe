import type { Application } from "express";
import testRoute from "../controllers/testRoute";
import matchMakingRoute from "../controllers/matchMakingRoute";
import lobbyRoute from "../controllers/lobbyRoute";

function appRoutes(app: Application) {
  const forerunner = "/api";
  app.use(`${forerunner}/test`, testRoute);
  app.use(`${forerunner}/matchmaking`, matchMakingRoute);
  app.use(`${forerunner}/lobby`, lobbyRoute);
}

export default appRoutes;
