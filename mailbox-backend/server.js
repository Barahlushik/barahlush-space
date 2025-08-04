const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(bodyParser.json());
const db = new sqlite3.Database('./shouts.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS shouts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    message TEXT,
    reply TEXT,
    isPrivate INTEGER
  )`);
});

const router = express.Router();

router.get('/shouts', (req, res) => {
  const page = parseInt(req.query.page || '1');
  const size = parseInt(req.query.size || '6');
  const offset = (page - 1) * size;

  db.all(`SELECT COUNT(*) as count FROM shouts WHERE isPrivate = 0`, [], (err, countResult) => {
    if (err) return res.status(500).json({ error: err.message });
    const totalCount = countResult[0].count;
    const totalPages = Math.ceil(totalCount / size);

    db.all(
      `SELECT id, date, message, reply FROM shouts WHERE isPrivate = 0 ORDER BY id DESC LIMIT ? OFFSET ?`,
      [size, offset],
      (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ messages: rows, currentPage: page, totalPages });
      }
    );
  });
});

router.post('/shouts', (req, res) => {
  const { message, isPrivate } = req.body;
  const date = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Europe/Moscow',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(new Date()).replace(',', '');
  db.run(
    `INSERT INTO shouts (date, message, isPrivate) VALUES (?, ?, ?)`,
    [date, message, isPrivate ? 1 : 0],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ success: true, id: this.lastID });
    }
  );
});

app.use('/api', router);
app.listen(4444, () => console.log('Server running on http://localhost:4444'));
