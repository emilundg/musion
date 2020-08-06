const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const mongoURL = 'mongodb+srv://emilundg:test123@musioncluster.bhlyo.mongodb.net/MusionDB?retryWri' +
        'tes=true&w=majority';

// Use connect method to connect to the Server
MongoClient
    .connect(mongoURL, {useUnifiedTopology: true})
    .then(client => {
        console.log('Connected to Database');
        const db = client.db('MusionDB');
        const usersCollection = db.collection('users');

        // console.log that your server is up and running
        app.listen(port, () => console.log(`Listening on port ${port}`));

        // create a GET route
        app.get('/users', async(req, res) => {
            usersCollection
                .find()
                .toArray()
                .then(results => {
                    res.send(results);
                })
                .catch(error => console.error(error));

        });
    })
    .catch(error => console.error(error));
