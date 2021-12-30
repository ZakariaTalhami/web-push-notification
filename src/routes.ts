import { Express } from "express";
import { exampleRoutes } from "./example";

const allRoutes = [...exampleRoutes];

export async function applyRouters(app: Express) {
    allRoutes.forEach(router => {
        app.use(router);
    });
}
