import { Movie } from '../types/movie';
import { MovieModel } from '../models/movie.model';

export class MovieService {
  async getAllMovies(): Promise<Movie[]> {
    return MovieModel.find().sort({ createdAt: -1 });
  }

  async searchMovies(query: string): Promise<Movie[]> {
    return MovieModel.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { genre: { $regex: query, $options: 'i' } }
      ]
    });
  }

  async createMovie(movieData: Movie): Promise<Movie> {
    return MovieModel.create(movieData);
  }

  async updateMovie(id: string, movieData: Partial<Movie>): Promise<Movie | null> {
    return MovieModel.findByIdAndUpdate(
      id,
      movieData,
      { new: true }
    );
  }

  async deleteMovie(id: string): Promise<boolean> {
    const result = await MovieModel.findByIdAndDelete(id);
    return !!result;
  }
} 