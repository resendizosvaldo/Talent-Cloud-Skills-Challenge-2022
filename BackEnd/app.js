const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');



const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: "*",
}))
// MySql all connection data is modified for security
const connection = mysql.createConnection({
  host: 'host.mysql.database.azure.com',
  user: 'user',
  password: 'Password',
  database: 'database',
  ssl: true
});

// Route
app.get('/', (req, res) => {
  res.send('BIENVENIDO A MI API');
});

// all customers
app.get('/customers', (req, res) => {
  const sql = 'SELECT id, username FROM balo.authmee';

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('Not result');
    }
  });
});

app.get('/customers/:id', (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM customers WHERE id = ${id}`;
  connection.query(sql, (error, result) => {
    if (error) throw error;

    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('Not result');
    }
  });
});


// Check connect
connection.connect(error => {
  if (error) throw error;
  console.log('Database server running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
