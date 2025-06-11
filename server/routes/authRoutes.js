import express from "express";
import { LoginUser, RegisterUser } from "../controllers/authController.js";

const router = express.Router();

//Auth endpoints
router.post("/register", RegisterUser);
router.post("/login", LoginUser);

export default router;