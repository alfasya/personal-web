import { Router } from "express";

import { homeHandler } from "./home.handler.js"

const homeRouter = Router();

homeRouter.get("/", homeHandler);

export { homeRouter }