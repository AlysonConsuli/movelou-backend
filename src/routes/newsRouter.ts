import { Router } from "express";
import appHealth from "../controllers/newsController.js";

const newsRouter = Router();

newsRouter.get("/", appHealth);
export default newsRouter;
