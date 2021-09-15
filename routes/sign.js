const router = require('express').Router();
const { logout, createUser, login } = require('../controllers/users');
const { createUserValidate, loginValidate } = require('../middlewares/validation');

router.post('/signin', loginValidate, login);
router.post('/signup', createUserValidate, createUser);
router.delete('/signout', logout);

module.exports = router;
