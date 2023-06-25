const express = require("express");
const { authRouter, bookRouter, libraryRouter } = require("./routes");
const loggingMdw = require("./middleware/logging");
const { initializeDB } = require("./config/db-config");
const { checkAdminUser } = require("./controllers/auth.controller");

const PORT = 4000;

const app = express();

app.use(express.json());
app.use(loggingMdw);

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Ejercicio de entrega de NodeJs</h1>");
});

app.use("/user", authRouter);
app.use("/book", bookRouter);
app.use("/library", libraryRouter);

app.listen(PORT, async () => {
  await initializeDB();
  await checkAdminUser();
  console.log(`Server running in PORT ${PORT}`);
});