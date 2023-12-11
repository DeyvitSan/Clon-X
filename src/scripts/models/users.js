const { Sequelize, DataTypes } = require('sequelize');

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize('sys', 'root', 'Rubendario1', {
    host: 'localhost',
    dialect: 'mysql'
});

// Función para definir el modelo de usuario
function defineUserModel() {
    return sequelize.define('users', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}

module.exports = defineUserModel();
