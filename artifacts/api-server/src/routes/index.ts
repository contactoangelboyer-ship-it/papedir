import { Router, type IRouter } from "express";
import healthRouter from "./health";
import conductoresRouter from "./conductores";

const router: IRouter = Router();

router.use(healthRouter);
router.use(conductoresRouter);

export default router;
