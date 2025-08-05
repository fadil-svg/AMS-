import { Router } from "express";
import { getUserById } from '../controllers/getUsers.mjs';
import { registerStudent } from '../controllers/addUsersControllers.mjs';
import { updateUser } from "../controllers/updateUsers.mjs";
import {requireAdmin} from '../middleware/authMiddleware.mjs';
import { bulkDeleteUsers } from "../controllers/deleteUser.mjs";
import { loginAdmin } from '../controllers/adminLogin.mjs';
import { createCourse, getCourses, getCourseById, deleteCourse} from "../controllers/coursesController.mjs";

const adminRouter = Router();
adminRouter.post('/login', loginAdmin);
adminRouter.post('/register', requireAdmin, registerStudent);
adminRouter.get('/get-users/:userId', requireAdmin, getUserById);
adminRouter.put('/update-users/:userId', requireAdmin, updateUser);
adminRouter.delete('/bulk-delete', requireAdmin, bulkDeleteUsers);
adminRouter.post('/create-course', requireAdmin, createCourse);
adminRouter.get('/get-courses', requireAdmin, getCourses);
adminRouter.get('/get-course/:id', requireAdmin, getCourseById);
adminRouter.delete('/delete-course/:id', requireAdmin, deleteCourse);


export default adminRouter;