const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Importa las rutas de autenticación

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Conectar a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'Andres',
    password: 'Morado82.*',
    database: 'inventario'
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Obtener todos los productos
app.get('/api/products', (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Agregar un nuevo producto
app.post('/api/products', (req, res) => {
    const { NAME, description, price, stock } = req.body;
    const query = 'INSERT INTO products (NAME, description, price, stock) VALUES (?, ?, ?, ?)';
    db.query(query, [NAME, description, price, stock], (err, result) => {
        if (err) throw err;
        res.json({ id: result.insertId });
    });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


// Usar rutas de autenticación
app.use('/api/auth', authRoutes);

module.exports = app