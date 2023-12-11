
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/users'); // Importa el modelo de usuario

// Ruta para iniciar sesión
router.post('/scripts/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Busca el usuario en la base de datos por email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Verifica la contraseña
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ message: 'Credenciales incorrectas' });
        }

        // Si las credenciales son correctas, genera un token de sesión
        const token = jwt.sign({ userId: user._id }, 'tu_secreto_secreto', { expiresIn: '1h' });

        // Devuelve el token como respuesta
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

module.exports = router;
