import express, { RequestHandler, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.send("hallo");
});

app.listen(port, () => {
  console.log("listen on port 3001");
});
