import express  from "express";
import checkwsp from "../controllers/check.controler.js";

const router = express.Router();

router.get('/', checkwsp);

export default router;