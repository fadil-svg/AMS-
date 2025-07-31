import User from "../models/userModel.mjs";

const registerStudent = async (req, res) => {
    const { name, email, id, role, Course } = req.body;

    try {
       
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("User already exists:", email);
            return res.status(400).json({ message: "User already exists" });
        }

       
        const user = new User({ name, email, id, role, Course });
        await user.save();

        console.log("User registered successfully:", user);
        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                Course: user.Course
            }
        });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export { registerStudent };
