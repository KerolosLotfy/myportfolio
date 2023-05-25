import express from "express";

import { reactRouters } from "./handlers";
const app: express.Application = express();

// Middleware's

// Routers
reactRouters(app);

// Listen
app.listen(3000, () => {
  console.log("Server Running on Port 3000");
});
