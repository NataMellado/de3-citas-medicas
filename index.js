const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/routes');

// Static
app.use(express.static('public'));

// routes 
app.use('/', router);


// Configuración del servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

