const express = require("express");
const cors = require("cors");
const router = require("./router");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(port, () => {
  console.log(`Server listen in port ${port}`);
});
