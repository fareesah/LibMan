const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Set up DB
const db = new sqlite3.Database('./db/libman.db');

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.post('/match', (req, res) => {
  const { seating, noise, feature } = req.body;

  const query = `
    SELECT * FROM libraries
    WHERE seating_capacity = ?
    AND noise_level = ?
    AND special_features LIKE ?
    LIMIT 1;
  `;

  db.get(query, [seating, noise, `%${feature}%`], (err, row) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Internal Server Error');
    }
    res.json(row || { message: 'No match found' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

