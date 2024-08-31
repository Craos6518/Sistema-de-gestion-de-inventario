const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes'); // Importar las rutas de autenticación

require('dotenv').config(); // Cargar variables de entorno desde .env


const app = express();
// Configuración del middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

// Conectar a la base de datos MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
        process.exit(1); // Salir del proceso en caso de error de conexión
    }
    console.log('Conectado a la base de datos MySQL');
});

// Función para crear un usuario admin si no existe
function createAdminUser() {
    const adminUsername = 'admin';
    const adminEmail = 'admin@example.com';
    const adminPassword = 'admin123';  // En producción, usa una contraseña más segura

    // Verificar si el usuario admin ya existe
    db.query('SELECT * FROM users WHERE username = ?', [adminUsername], (err, results) => {
        if (err) {
            console.error('Error al verificar el usuario admin:', err);
            return;
        }

        if (results.length > 0) {
            console.log('El usuario admin ya existe.');
        } else {
            // Encriptar la contraseña antes de almacenarla
            const saltRounds = 10;
            bcrypt.hash(adminPassword, saltRounds, (err, hashedPassword) => {
                if (err) {
                    console.error('Error al encriptar la contraseña:', err);
                    return;
                }

                // Crear el usuario admin en la base de datos
                const sql = 'INSERT INTO users (username, email, PASSWORD, role) VALUES (?, ?, ?, ?)';
                const values = [adminUsername, adminEmail, hashedPassword, 'admin'];

                db.query(sql, values, (err, result) => {
                    if (err) {
                        console.error('Error al crear el usuario admin:', err);
                        return;
                    }
                    console.log('Usuario admin creado exitosamente.');
                });
            });
        }
    });
}

// Rutas para manejar el ingreso de productos
app.post('/add-product', (req, res) => {
    const { productName, productDescription, productPrice, productStock } = req.body;

    if (!productName || !productPrice || !productStock) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    const sql = 'INSERT INTO products (NAME, description, price, stock) VALUES (?, ?, ?, ?)';
    const values = [productName, productDescription, productPrice, productStock];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error al insertar el producto:', err);
            return res.status(500).json({ error: 'Error al insertar el producto en la base de datos' });
        }
        res.status(200).json({ message: 'Producto agregado correctamente', productId: result.insertId });
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;  // Usar el puerto del .env o por defecto el 3000
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});