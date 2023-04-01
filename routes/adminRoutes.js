const express = require('express');
const { signup, signin, forgotPassword, resetPasswod, profile } = require('../controller/adminController');
const checkAdminAuth = require('../middleWare/authMiddleware');
const app = express();
const adminRouter = express.Router();

//public route
adminRouter.post('/signup',signup);
adminRouter.post('/signin',signin);
adminRouter.post('/forgotPassword',forgotPassword);
adminRouter.post('/resetPassword/:token',resetPasswod)

//private route

adminRouter.get('/profile',checkAdminAuth,profile)

module.exports = adminRouter