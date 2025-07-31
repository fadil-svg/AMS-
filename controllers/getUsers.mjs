import User from '../models/userModel.mjs';

export const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        
        const user = await User.findOne({ id: userId }).select('-__v');
        
        if (!user) {
            return res.status(404).json({ 
                success: false, 
                message: 'User not found' 
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Error fetching user', 
            error: error.message 
        });
    }
};

