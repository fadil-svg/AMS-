import User from "../models/userModel.mjs";

export const requireAdmin = async (req, res, next) => {
    try {
        const adminId = req.user?.id; 
        
        if (!adminId) {
            return res.status(401).json({ 
                success: false, 
                message: 'Authentication required' 
            });
        }

        const admin = await User.findOne({ id: adminId });
        
        if (!admin || admin.role !== 'admin') {
            return res.status(403).json({ 
                success: false, 
                message: 'Admin access required' 
            });
        }

        next();
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Server error', 
            error: error.message 
        });
    }
};
