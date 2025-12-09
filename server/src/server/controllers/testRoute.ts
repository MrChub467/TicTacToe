import testHandler from "../services/testService";
import express from "express";

const testRoute = express.Router();

testRoute.get("/hi", testHandler);

export default testRoute;
