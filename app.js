const express = require("express");
const fs = require("fs");

const app = express();

app.get("/other", (req, res) => {
  const pwd = process.env.PWD;
  
  res.sendFile(`${pwd}/public/pages/other.html`);
  console.log(`${pwd}/public/pages/other.html`);
  console.log(fs.existsSync(`${pwd}/public/pages/other.html`));
});

app.use(express.static("public"));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("----" + process.env.PORT);
  console.log(`app is listening on http://localhost:${port}`);
});
