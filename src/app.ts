import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";
import { errorHandler } from "./errors/defaultErrorHandler";
import { applyRouters } from "./routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

applyRouters(app);

app.use(errorHandler);

export default app;
