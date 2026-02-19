import { Router } from "express";

import { projectsHandler } from "./projects.handler.js";

const projectsRouter = Router();

projectsRouter.get("/", projectsHandler);

export { projectsRouter }