import express from "express";
import cors from "cors";
import { reactRouters } from "./handlers";
import { initDB } from "./database/sql";

const app: express.Application = express();

// Middleware's
app.use(cors());
app.use(express.json());

(async () => {
  await initDB();

  // Routers
  reactRouters(app);

  // Error 404
  app.use((_req, res) => {
    res.status(404).send("This page not found");
  });
  // Listen
  app.listen(5500, () => {
    console.log("Server Running on Port 5500", "&&& Web on 3000");
  });
})();
