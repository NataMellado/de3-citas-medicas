import express from 'express';
import app from './app.js';
import router from './routes/routes.js';
const port = 3000;

// Configura las rutas antes de iniciar el servidorapp.use(express.static('public'));
app.use(express.static('public'));
app.use('/', router);

// Configuración del servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

