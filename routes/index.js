const router = require('express').Router();
const auth = require('../middlewares/auth');
const NotFoundError = require('../errors/NotFoundError');

router.use(require('./sign'));

router.use(auth);
router.use(require('./users'));
router.use(require('./movies'));

router.use('*', () => {
  throw new NotFoundError('Запрашиваемый ресурс не найден.');
});

module.exports = router;
