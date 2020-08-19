const db = require('../../server/db');

module.exports = (on, config) => {
    on('task', {
        clearDB() {
            console.log(message)
            return db;
        }
    })
}