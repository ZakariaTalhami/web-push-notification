import { Router } from "express";
import { sayHellow } from "../controllers/exmaple";

const router = Router();

router.get('/example', sayHellow);

export default router;