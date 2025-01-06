const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.get("*",function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(path.join(__dirname, "index.html"));
})