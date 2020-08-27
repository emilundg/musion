const MongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb+srv://emilundg:test123@musioncluster.bhlyo.mongodb.net/MusionDB?retryWri' +
        'tes=true&w=majority';

function db() {
    return MongoClient
        .connect(mongoURL, {useUnifiedTopology: true})
        .then(client => {
            const db = client.db('MusionDB');
            return db;
        })
        .catch(error => console.error(error));
}
module.exports = db();