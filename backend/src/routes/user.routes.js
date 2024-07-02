import { Router } from "express";
import { getUser, getUserFromDiscord, updateUser } from "../controllers/user.controller";

const router = Router()

router.post("/", (req, res) => getUserFromDiscord(req, res));
router.put("/:id", (req, res) =>updateUser(req, res));
router.get("/:id", (req, res) => getUser(req, res));

export default router;