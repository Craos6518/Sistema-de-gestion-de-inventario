const sequelize = require('../config/db');
const User = require('../models/userModel.js');
    
const users = [
    {
        username: 'Andres',
        email: 'f.martinez5@utp.edu.co',
        PASSWORD: 'admin123', // En un entorno real, usa un hash de contraseña
        role: 'admin',
        created_at: new Date(),
        updated_at: new Date()
    }
];
const seedUsers = async () => {
        try {
            await sequelize.sync({ force: true }); // Reinicia la base de datos
            await User.bulkCreate(users);
            console.log('Datos de usuarios insertados con éxito');
        } catch (error) {
            console.error('Error al insertar datos de usuarios:', error);
        }
    };
    
seedUsers();