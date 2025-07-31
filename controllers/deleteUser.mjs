import User from '../models/User.mjs';

export const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;

        
        if (req.user?.id === userId) {
            return res.status(400).json({ 
                success: false, 
                message: 'Cannot delete your own account' 
            });
        }

        const deletedUser = await User.findOneAndDelete({ id: userId });

        if (!deletedUser) {
            return res.status(404).json({ 
                success: false, 
                message: 'User not found' 
            });
        }

        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: { deletedUserId: userId }
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Error deleting user', 
            error: error.message 
        });
    }
};
