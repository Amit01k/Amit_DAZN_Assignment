import mongoose, { Schema } from 'mongoose';
import { UserDocument } from '../types/user';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
}, {
  timestamps: true
});

export const UserModel = mongoose.model<UserDocument>('User', userSchema); 