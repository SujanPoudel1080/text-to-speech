import express from "express";

const router = express.Router();

import { newText } from "../controllers/textController.js";

router.route("/").post(newText);

export default router;
