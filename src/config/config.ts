import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 4001,
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/movie-lobby',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key'
}; 