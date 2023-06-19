const express = require("express");
const { authRouter, bookRouter, libraryRouter } = require("./routes");
const loggingMdw = require("./middleware/logging");
const { initializeDB } = require("./config/db-config");

const PORT = 4000;

const app = express();

// Application Middlewares
app.use(express.json());
app.use(loggingMdw);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.use("/user", authRouter);
app.use("/book", bookRouter);
app.use("/library", libraryRouter);

app.listen(PORT, async () => {
  await initializeDB();
  console.log(`Server running in PORT ${PORT}`);
});