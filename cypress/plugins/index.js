const db = require('../../server/db');

module.exports = (on, config) => {
    on('task', {
        clearDB() {
            db.then((dbInstance) => {
                dbInstance
                    .collection('users')
                    .deleteOne({"username": "musion_test_user"});
            });
            return null;
        }
    })
}