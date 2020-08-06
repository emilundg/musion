const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
    res.send('register');
});

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
                            hash
                        }, function (err) {
                            if (err) 
                                throw err;
                            res.json({username});
                        });
                })
            })
        })
})

// create a GET route
router.get('/users', async(req, res) => {
    // usersCollection     .find()     .toArray()     .then(results => {
    // res.send(results);     })     .catch(error => console.error(error));
    res.send('users')
});

module.exports = router;