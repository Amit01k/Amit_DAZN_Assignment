import { Request, Response } from 'express';
import { MovieService } from '../services/movie.service';

const movieService = new MovieService();

export class MovieController {
  async getMovies(req: Request, res: Response) {
    try {
      const movies = await movieService.getAllMovies();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch movies' });
    }
  }

  async searchMovies(req: Request, res: Response) {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.status(400).json({ error: 'Search query is required' });
      }

      const movies = await movieService.searchMovies(query);
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: 'Failed to search movies' });
    }
  }

  async createMovie(req: Request, res: Response) {
    try {
      const movie = await movieService.createMovie(req.body);
      res.status(201).json(movie);
    } catch (error) {
      res.status(400).json({ error: 'Invalid movie data' });
    }
  }

  async updateMovie(req: Request, res: Response) {
    try {
      const movie = await movieService.updateMovie(req.params.id, req.body);
      if (!movie) {
        return res.status(404).json({ error: 'Movie not found' });
      }
      res.json(movie);
    } catch (error) {
      res.status(400).json({ error: 'Invalid movie data' });
    }
  }

  async deleteMovie(req: Request, res: Response) {
    try {
      const success = await movieService.deleteMovie(req.params.id);
      if (!success) {
        return res.status(404).json({ error: 'Movie not found' });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete movie' });
    }
  }
} 