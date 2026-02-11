const db = require('./database');

db.connect();
db.query('SELECT * FROM users');
