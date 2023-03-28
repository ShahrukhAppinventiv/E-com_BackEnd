const express = require('express');
const { signup } = require('../controller/adminController');
const app = express();

const adminRouter = express.Router();

adminRouter.post('/signup',signup)

module.exports = adminRouter