const { celebrate, Joi } = require('celebrate');
const { isURL } = require('validator');

const createUserValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }).unknown(true),
});

const loginValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

const userValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    name: Joi.string().required().min(2).max(30),
  }),
});

const MovieValidation = celebrate({
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
    movieId: Joi.number().required(),
    nameRU: Joi.string().min(2).max(30).required(),
    nameEN: Joi.string().min(2).max(30).required(),
  }),
});

const MovieIdValidation = celebrate({
  params: Joi.object().keys({
    movieId: Joi.number(),
  }),
});

module.exports = {
  loginValidate,
  createUserValidate,
  userValidate,
  MovieValidation,
  MovieIdValidation,
};
