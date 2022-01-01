import { Express } from "express";
import { webPushRoutes } from "./webpush";

const allRoutes = [...webPushRoutes];

export async function applyRouters(app: Express) {
  allRoutes.forEach((router) => {
    app.use(router);
  });
}
