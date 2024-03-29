import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';

const app = express();
const __dirname = import.meta.dirname;

// Configuración de Handlebars
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);

app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`,
    extname: 'hbs'
}));


export default app;