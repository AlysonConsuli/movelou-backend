import { Router } from "express";
import newsRouter from "./newsRouter.js";

const router = Router();
router.use(newsRouter);

export default router;
