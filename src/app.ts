import express from "express";

const app = express();

app.listen(4000, () => {
  console.log(`Server started listening on port 4000: http://localhost:4000/`);
});