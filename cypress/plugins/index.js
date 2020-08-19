const db = require('../../server/db');

module.exports = (on, config) => {
    on('task', {
        clearDB() {
            db.then((dbInstance) => {
                dbInstance
                    .collection('users')
                    .drop();
            });
            return null;
        }
    })
}