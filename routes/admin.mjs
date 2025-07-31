import { Router } from "express";
import { registerStudent } from '../controllers/authController.mjs';

const adminRouter = Router();
adminRouter.post('/register', registerStudent);
adminRouter.get('/get-users', getUsers);

export default adminRouter;