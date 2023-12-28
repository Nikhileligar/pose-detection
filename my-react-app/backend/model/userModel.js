import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'username is required'],
        unique: true
    },
    last_name: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'required field'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'required field'],
        unique: true
    },
    isVerfied: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
});

const User = mongoose.models.customusers || mongoose.model ("customusers", userSchema)
export default User;