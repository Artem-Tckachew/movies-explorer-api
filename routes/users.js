const router = require('express').Router();
const { userValidate } = require('../middlewares/validation');
const {
  getUser,
  updateUser,
} = require('../controllers/users');

router.get('/users/me', getUser);
router.patch('/users/me', userValidate, updateUser);

module.exports = router;
