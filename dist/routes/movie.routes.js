"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movie_controller_1 = require("../controllers/movie.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
const movieController = new movie_controller_1.MovieController();
router.get('/movies', auth_middleware_1.verifyToken, movieController.getMovies);
router.get('/search', auth_middleware_1.verifyToken, movieController.searchMovies);
router.post('/movies', auth_middleware_1.verifyToken, auth_middleware_1.isAdmin, movieController.createMovie);
router.put('/movies/:id', auth_middleware_1.verifyToken, auth_middleware_1.isAdmin, movieController.updateMovie);
router.delete('/movies/:id', auth_middleware_1.verifyToken, auth_middleware_1.isAdmin, movieController.deleteMovie);
exports.default = router;
