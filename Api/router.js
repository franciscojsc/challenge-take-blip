const express = require("express");
const router = express.Router();

const listRepos = require("./controllers/listRepos");

router.get("/repo/:username", (req, res) => listRepos(req, res));

module.exports = router;
