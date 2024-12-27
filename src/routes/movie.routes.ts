import { Router } from 'express';
import { MovieController } from '../controllers/movie.controller';
import { verifyToken, isAdmin } from '../middleware/auth.middleware';

const router = Router();
const movieController = new MovieController();

router.get('/movies', verifyToken, movieController.getMovies);
router.get('/search', verifyToken, movieController.searchMovies);
router.post('/movies', verifyToken, isAdmin, movieController.createMovie);
router.put('/movies/:id', verifyToken, isAdmin, movieController.updateMovie);
router.delete('/movies/:id', verifyToken, isAdmin, movieController.deleteMovie);

export default router; 