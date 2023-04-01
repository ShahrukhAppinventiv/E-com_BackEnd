const jwt = require('jsonwebtoken');
const Admin = require('../model/adminModel');
require('dotenv').config();


const checkAdminAuth = async (req, res, next) => {
    const { token } = req.headers
    if (token) {
        try {
            const adminInfo = jwt.verify(token, process.env.SECRETKEY);
            req.user = await Admin.findById(adminInfo.id).select("-password")
            next()
        } catch (err) {
            next(err)
        }
    }
    else {
        res.status(400).json({
            code: 400,
            message: "unauthorized request"
        })
        next()
    }


}

module.exports = checkAdminAuth