import mongoose, { Schema } from 'mongoose';
import { MovieDocument } from '../types/movie';

const movieSchema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  rating: { type: Number, required: true, min: 0, max: 10 },
  streamingLink: { type: String, required: true }
}, {
  timestamps: true
});

// Add index for search functionality
movieSchema.index({ title: 'text', genre: 'text' });

export const MovieModel = mongoose.model<MovieDocument>('Movie', movieSchema); 