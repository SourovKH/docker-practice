const express = require("express");
const fs = require("fs")

const app = express();

app.get("/", (req, res) => {
  const pwd = process.env.PWD;

  res.sendFile(`${pwd}/pages/index.html`);
  console.log(`${pwd}/pages/index.html`);
  console.log(fs.existsSync(`${pwd}/pages/index.html`));
});

app.use(express.static('./styles'))

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("----" + process.env.PORT);
  console.log(`app is listening on http://localhost:${port}`);
});
