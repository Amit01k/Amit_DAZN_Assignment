import express from 'express';
import mongoose from 'mongoose';
import movieRoutes from './routes/movie.routes';
import authRoutes from './routes/auth.routes';
import { config } from './config/config';

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api', movieRoutes);

mongoose
  .connect(config.mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = 4001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`MongoDB URI: ${config.mongoUri}`);
});

export default app;
