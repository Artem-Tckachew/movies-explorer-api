const router = require('express').Router();
const { MovieValidation, MovieIdValidation } = require('../middlewares/validation');
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/movies', getMovies);
router.post('/movies', MovieValidation, createMovie);

router.delete('/movies/:_id', MovieIdValidation, deleteMovie);

module.exports = router;
