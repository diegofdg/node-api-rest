const express = require("express");

const PORT = 4000;

const app = express();

// Application Middlewares
app.use(express.json());

app.get("/user", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(PORT, async () => {
  console.log(`Server running in PORT ${PORT}`);
});