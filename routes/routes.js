import express from 'express';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import _ from 'lodash';
import chalk from 'chalk';




const router = express.Router();
const apiURL = 'https://randomuser.me/api/';
const usuarios = [];
const formatDate = "MMMM Do YYYY";
const formatTime = "h:mm:ss a";




// Rutas
router.get('/', (req, res) => {
    res.render('home');
});


router.get('/newPatient', (req, res) => {
    res.render('newPatient');
});


router.post('/newPatient', async (req, res) => {
    try {
        const userApi = await axios.get(apiURL);
        const data = userApi.data.results;
        const firstName = data[0].name.first;
        const lastName = data[0].name.last;
        const gender = data[0].gender;
        const id = uuidv4().slice(0, 8);
        const date = moment().format(formatDate);
        const time = moment().format(formatTime);
        usuarios.push({ firstName, lastName, gender, date, time, id });

        res.render('newPatient', { nombre: firstName, apellido: lastName, genero: gender, id, fecha: date, hora: time});
        console.log(chalk.blue(`Nombre: ${firstName} - Apellido: ${lastName} - Género: ${gender} - ID: ${id} - Fecha: ${date} - Hora: ${time}`));

    } catch (error) {
        console.error(error);
        res.status(500).send('Error al añadir paciente');
    }
});


router.get('/patientList', async (req, res) => {
    try {
        const genderUser = _.partition(usuarios, (user) => {
            return user.gender === 'female'
        });

        res.render('patientList', { genderUser });
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener lista de pacientes');
    }
});




// Ruta para manejar errores 404
router.use((req, res, next) => {
    res.status(404).send("Página no encontrada");
});





export default router;