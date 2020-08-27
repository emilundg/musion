const config = require('../../config');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
    const {users} = req.app.locals;
    const {username, password} = req.query;
    users
        .findOne({username})
        .then(user => {
            if (user) 
                return res.status(400).json({msg: 'User already exist'});
            
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) 
                        throw err;
                    users
                        .insertOne({
                            username,
                            password: hash
                        }, function (err, doc) {
                            if (err) 
                                throw err;
                            const token = jwt.sign({
                                id: doc
                            }, config.JWT_SECRET, {expiresIn: 3600});
                            if (!token) 
                                throw Error('Couldnt sign the token');
                            res
                                .status(200)
                                .json({
                                    token,
                                    user: {
                                        id: doc,
                                        name: username
                                    }
                                });
                        });
                });
            });
        });
});

router.post('/login', (req, res) => {
    const {users} = req.app.locals;
    const {username, password} = req.query;
    users
        .findOne({username})
        .then(user => {
            if (!user) 
                return res.status(400).json({msg: 'User already exist'});
            bcrypt
                .compare(password, user.password)
                .then(isMatch => {
                    if (!isMatch) 
                        return res.status(400).json({msg: 'Invalid credentials'});
                    
                    const token = jwt.sign({
                        id: user._id
                    }, config.JWT_SECRET, {expiresIn: 3600});
                    if (!token) 
                        throw Error('Couldnt sign the token');
                    res
                        .status(200)
                        .json({
                            token,
                            user: {
                                id: user._id,
                                name: username
                            }
                        });
                })
        })
});

module.exports = router;