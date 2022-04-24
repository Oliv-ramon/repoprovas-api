import express, { json } from "express";
import cors from "cors";
import router from "./routes/index.js";

import "./setup.js"
import { errorHandlerMiddleware } from "./middlewares/index.js";

const app = express();
app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandlerMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`running on ${process.env.PORT}`);
})