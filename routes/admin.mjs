import { Router } from "express";
import { getUserById } from '../controllers/getUsers.mjs';
import { registerStudent } from '../controllers/addUsersControllers.mjs';
import { updateUser } from "../controllers/updateUsers.mjs";
import {requireAdmin} from '../middleware/authMiddleware.mjs';
import { bulkDeleteUsers } from "../controllers/deleteUser.mjs";
import { loginAdmin } from '../controllers/adminLogin.mjs';


const adminRouter = Router();
adminRouter.post('/login', loginAdmin);
adminRouter.post('/register', registerStudent);
adminRouter.get('/get-users/:userId', getUserById);
adminRouter.put('/update-users/:userId', updateUser);
adminRouter.delete('/bulk-delete', bulkDeleteUsers);


export default adminRouter;