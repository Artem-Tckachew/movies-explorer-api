const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { isURL } = require('validator');
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');

router.get('/movies', getMovies);
router.post('/movies', celebrate({
  body: Joi.object().keys({
    country: Joi.string().min(2).max(30).required(),
    director: Joi.string().min(2).max(30).required(),
    duration: Joi.number().required(),
    year: Joi.string().min(4).max(4).required(),
    description: Joi.string().min(2).max(150).required(),
    image: Joi.string().required().custom((value) => {
      if (!isURL(value)) {
        throw new Error('Ссылка некоректная');
      }
      return value;
    }),
    trailer: Joi.string().required().custom((value) => {
      if (!isURL(value)) {
        throw new Error('Ссылка некоректная.');
      }
      return value;
    }),
    thumbnail: Joi.string().required().custom((value) => {
      if (!isURL(value)) {
        throw new Error('Ссылка некоректная.');
      }
      return value;
    }),
    movieId: Joi.string().required(),
    nameRU: Joi.string().min(2).max(30).required(),
    nameEN: Joi.string().min(2).max(30).required(),
  }),
}), createMovie);

router.delete('/movies/:movieId', celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24),
  }),
}), deleteMovie);

module.exports = router;
