"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieController = void 0;
const movie_service_1 = require("../services/movie.service");
const movieService = new movie_service_1.MovieService();
class MovieController {
    getMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movies = yield movieService.getAllMovies();
                res.json(movies);
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to fetch movies' });
            }
        });
    }
    searchMovies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = req.query.q;
                if (!query) {
                    return res.status(400).json({ error: 'Search query is required' });
                }
                const movies = yield movieService.searchMovies(query);
                res.json(movies);
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to search movies' });
            }
        });
    }
    createMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movie = yield movieService.createMovie(req.body);
                res.status(201).json(movie);
            }
            catch (error) {
                res.status(400).json({ error: 'Invalid movie data' });
            }
        });
    }
    updateMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const movie = yield movieService.updateMovie(req.params.id, req.body);
                if (!movie) {
                    return res.status(404).json({ error: 'Movie not found' });
                }
                res.json(movie);
            }
            catch (error) {
                res.status(400).json({ error: 'Invalid movie data' });
            }
        });
    }
    deleteMovie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const success = yield movieService.deleteMovie(req.params.id);
                if (!success) {
                    return res.status(404).json({ error: 'Movie not found' });
                }
                res.status(204).send();
            }
            catch (error) {
                res.status(500).json({ error: 'Failed to delete movie' });
            }
        });
    }
}
exports.MovieController = MovieController;
