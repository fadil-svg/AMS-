import { Router } from "express";
import { registerStudent } from '../controllers/authController.mjs';

const authRouter = Router();
authRouter.post('/register', registerStudent);

export default authRouter;