import { Router } from "express";
import { body } from "express-validator";
import { validateBody } from "../../middleware/validateBody";
import { subscribe } from "../controllers/subscribeToPush";

const router = Router();

router.post(
  "/subscribe",
  body("subscription.endpoint").isString(),
  body("subscription.keys.auth").isString(),
  body("subscription.keys.p256dh").isString(),
  validateBody,
  subscribe
);

export default router;
