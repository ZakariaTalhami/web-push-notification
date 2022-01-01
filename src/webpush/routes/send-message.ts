import { Router } from "express";
import { body } from "express-validator";
import { validateBody } from "../../middleware/validateBody";
import { sendMessage } from "../controllers/messaging";

const router = Router();

router.post(
  "/send-message",
  body("title").isString(),
  body("body").isString(),
  validateBody,
  sendMessage
);

export default router;
