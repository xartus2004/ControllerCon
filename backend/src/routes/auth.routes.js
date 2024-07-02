const { Router } = require("express");
const { discordAuth, checkUserFromToken, checkEventOwner, checkProfileOwner } = require("../controllers/auth.controller");

const router = Router();

router.get("/discord/redirect", (req, res) => discordAuth(req, res));
router.get("/discord/user", (req, res) => checkUserFromToken(req, res));
router.get("/check/event/:id", (req, res) => checkEventOwner(req, res));
router.get("/check/profile/:id", (req, res) => checkProfileOwner(req, res));

module.exports = router;