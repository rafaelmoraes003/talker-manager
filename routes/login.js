const express = require('express');
const { validateEmail } = require('../middlewares/validateEmail');
const { validatePassword } = require('../middlewares/validatePassword');
const { generateToken } = require('../middlewares/generateToken');

const login = express.Router();

login.post('/', validateEmail, validatePassword, generateToken);

module.exports = login;