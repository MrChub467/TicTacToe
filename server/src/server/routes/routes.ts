import type { Application } from "express";
import testRoute from "../controllers/testRoute";
import matchMakingRoute from "../controllers/matchMakingRoute";
import lobbyRoute from "../controllers/lobbyRoute";

function appRoutes(app: Application) {
  app.use("/test", testRoute);
  app.use("/matchmaking", matchMakingRoute);
  app.use("/lobby", lobbyRoute);
}

export default appRoutes;
