import { Router } from "express";
import HelloRouter from "./hello";

const router: Router = Router();

router.use("/hello", HelloRouter);

export default router;
