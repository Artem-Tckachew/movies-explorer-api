const mongoose = require('mongoose');
const { isURL } = require('validator');

const movieSchema = new mongoose.Schema({
  country: {
    required: true,
    type: String,
  },
  director: {
    required: true,
    type: String,
  },
  duration: {
    required: true,
    type: Number,
  },
  year: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isURL(v, { require_protocol: true }),
      message: 'Не валидная ссылка',
    },
  },
  trailer: {
    required: true,
    type: String,
    validate: {
      validator: (v) => isURL(v, { require_protocol: true }),
      message: 'Не валидная ссылка',
    },
  },
  thumbnail: {
    required: true,
    type: String,
    validate: {
      validator: (v) => isURL(v, { require_protocol: true }),
      message: 'Не валидная ссылка',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: Number,
    ref: 'movie',
    required: true,
    unique: true,
  },
  nameRU: {
    required: true,
    type: String,
  },
  nameEN: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('movie', movieSchema);
