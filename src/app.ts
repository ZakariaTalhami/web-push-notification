import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { errorHandler } from "./errors/defaultErrorHandler";
import { applyRouters } from "./routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

applyRouters(app);

app.use(errorHandler);

export default app;
