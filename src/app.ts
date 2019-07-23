const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
import * as path from 'path';

// Initialize knex and Objection
const knex = require('./models/db');

// Initialize express app
const app = express()
    .use(bodyParser.json())
    .set('json spaces', 2);

const expressSwagger = require('express-swagger-generator')(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PATCH, POST, GET, DELETE, OPTIONS')
    next();
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// List APIs
app.get('/', (req, res) => {
    res.render('index', { title: 'Hey', message: 'Hello there!' });
});

// Swagger config
const options = {
    basedir: __dirname, // app absolute path
    files: ['./routes/**/*.js'], // Path to the API handle folder
    swaggerDefinition: {
        basePath: '/api/v1',
        consumes: [
            'application/json',
        ],
        host: 'localhost:8080',
        info: {
            description: `This is a Inventory management application for CSIRO.
          This application will provide a platform of different users to manage their inventory.`,
            title: 'Galene API interface',
            version: '0.0.1',
        },
        produces: [
            'application/json',
        ],
        schemes: ['http', 'https'],
    },
};

// Setting up API docs on swagger
expressSwagger(options);

export default app;