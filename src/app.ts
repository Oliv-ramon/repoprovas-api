import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()

const app = express();
app.use(json());
app.use(cors());
app.get("/", (req, res) => res.sendStatus(200));

app.listen(process.env.PORT, () => {
  console.log(`running on ${process.env.PORT}`);
})