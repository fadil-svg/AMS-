import Course from "../models/coursesModel.mjs";

export const createCourse = async (req, res) => {
    try {
        const { name, instructor, time } = req.body;

        const existingCourse = await courseSchema.findOne({ name });
        if (existingCourse) {
            return res.status(409).json({ message: "A course with this name already exists." });
        }

        const newCourse = await courseSchema.create({
            name,
            instructor,
            time
        });

        res.status(201).json(newCourse);

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const getCourses = async (req, res) => {
    try {
        const courses = await courseSchema.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateCourse = async (req, res) => {
    try {
        const { name, instructor, time } = req.params;
        const course = await courseSchema.findOneAndUpdate({ name, }, req.body, { new: true });
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.status(200).json(course);         
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteCourse = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await courseSchema.findByIdAndDelete(id);
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.status(200).json({ message: "Course deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getCourseById = async (req, res) => {
    try {
        const { id } = req.params;
        const course = await courseSchema.findById(id);
        if (!course) return res.status(404).json({ message: "Course not found" });
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};  