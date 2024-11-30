
const express = require('express');
const jwt = require('jsonwebtoken')
const School = require('../model/schoolSchema')
const cookieParser = require('cookie-parser');
const router = express.Router();    
router.use(cookieParser());

const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)

        const rootUser = await School.findOne({_id: verifyToken._id, "tokens.token": token})

        if (!rootUser) {
            throw new Error('User not found!')
        }

        req.token = token
        req.rootUser = rootUser
        req.userID = rootUser._id

        next();

    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            // Handle expired token
            res.status(401).json({ error: 'Unauthorized: Token expired' });
            return;
        }
        // Handle other errors
        res.status(401).json({ error: 'Unauthorized: No valid token provided' });
        return;
    }
}

module.exports = Authenticate
