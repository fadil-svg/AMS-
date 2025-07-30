import { Router } from "express";
import { markAttendance } from '../controllers/attendanceControllers.mjs';
import Attendance from "../models/attendanceModel.mjs";

const attendanceRouter = Router();
attendanceRouter.post('/mark', markAttendance);

export default attendanceRouter;