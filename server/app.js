import express from "express";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World３２!");
});

app.get("/api/test", (req, res) => {
  const response = {
    code: "0001",
    message: "test!!!",
  };
  res.send(JSON.stringify(response));
});

// public配下は静的ファイルを置ける
app.use(
  express.static(path.join(dirname(fileURLToPath(import.meta.url)), "public")),
);
