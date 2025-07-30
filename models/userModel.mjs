import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    id: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    Course: {
        type: String,
        required: false,
        trim: true
    }
});

const User = mongoose.model('User', UserSchema);

export default User;