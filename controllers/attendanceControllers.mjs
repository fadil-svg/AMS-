
import Attendance from '../models/attendanceModel.mjs';

export const markAttendance = async (req, res) => {
  try {
    const { id, course, status } = req.body;

    if (!id || !course) {
      return res.status(400).json({ error: 'id and course are required' });
    }

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());


    const existingRecord = await Attendance.findOne({
      id,
      Date: {
        $gte: today,
        $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000),
      },
    });

    if (existingRecord) {
      return res.status(409).json({ error: 'Attendance already marked today.' });
    }

   
    const newAttendance = new Attendance({
      id,
      course,
      status: status || 'present',
      Date: now
    });

    await newAttendance.save();

    return res.status(201).json({ message: 'Attendance marked successfully', data: newAttendance });

  } catch (error) {
    console.error('Error marking attendance:', error);
    return res.status(500).json({ error: 'Server error' });
  }
};
