const express = require('express');
const { validateEmail } = require('../helpers/validateEmail');
const { validatePassword } = require('../helpers/validatePassword');
const { generateToken } = require('../helpers/generateToken');

const login = express.Router();

login.post('/', validateEmail, validatePassword, generateToken);

module.exports = login;