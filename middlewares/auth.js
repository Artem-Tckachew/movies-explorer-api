const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

const { JWT_SECRET = 'dev-key' } = process.env;

module.exports = (req, res, next) => {
  if (!req.cookies.jwt) {
    throw new UnauthorizedError('Необходимо авторизоваться');
  } else {
    const token = req.cookies.jwt;
    let payload;

    try {
      payload = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      throw new UnauthorizedError('Необходимо авторизоваться');
    }
    req.user = payload;
    next();
  }
};
