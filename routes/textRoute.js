import express from "express";

const router = express.Router();

import { audioExport, newText, stop } from "../controllers/textController.js";

router.route("/").post(newText);
router.route("/export").post(audioExport);
router.route("/").get(stop);

export default router;
