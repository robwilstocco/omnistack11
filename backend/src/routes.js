const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const connection = require('./database/connection');
const routes = express.Router();

routes.post('/sessions',SessionController.create);

routes.get('/ongs', OngController.index); //listagem de ongs
routes.post('/ongs', OngController.create); // post para criar(cadastro)

routes.get('/profile',ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;