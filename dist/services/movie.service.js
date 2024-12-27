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
exports.MovieService = void 0;
const movie_model_1 = require("../models/movie.model");
class MovieService {
    getAllMovies() {
        return __awaiter(this, void 0, void 0, function* () {
            return movie_model_1.MovieModel.find().sort({ createdAt: -1 });
        });
    }
    searchMovies(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return movie_model_1.MovieModel.find({
                $or: [
                    { title: { $regex: query, $options: 'i' } },
                    { genre: { $regex: query, $options: 'i' } }
                ]
            });
        });
    }
    createMovie(movieData) {
        return __awaiter(this, void 0, void 0, function* () {
            return movie_model_1.MovieModel.create(movieData);
        });
    }
    updateMovie(id, movieData) {
        return __awaiter(this, void 0, void 0, function* () {
            return movie_model_1.MovieModel.findByIdAndUpdate(id, movieData, { new: true });
        });
    }
    deleteMovie(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield movie_model_1.MovieModel.findByIdAndDelete(id);
            return !!result;
        });
    }
}
exports.MovieService = MovieService;
