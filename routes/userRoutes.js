import express from "express";
import * as userController from "../controller/usersController.js";

const router = express.Router();

router.post("/register", userController.register);

export default router;
