const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const db = require('./db');

db.then((dbInstance) => {
    const usersCollection = dbInstance.collection('users');
    app.locals.users = usersCollection;
});

app.use(express.json());
app.use(cors());
app.use('/api/users', require('../routes/api/users'));
app.use('/api/search', require('../routes/api/search'));
app.listen(port, () => console.log(`Listening on port ${port}`));