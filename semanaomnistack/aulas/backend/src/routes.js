const express = require('express');

const OngController = require('./controllers/OngController');

const IncidentController = require('./controllers/IncidentController');

const ProfileController = require('./controllers/ProfileController');

const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/** login */
routes.post('/sessions', SessionController.create);

/** lista as ongs no DB */
routes.get('/ongs', OngController.index); /*chama o nome do método que voce criou em Controller */

/** insere no DB */
routes.post('/ongs', OngController.create);

/** lista os incidentes */
routes.get('/incidents', IncidentController.index);

/** Insere os incidentes */
routes.post('/incidents', IncidentController.create);

/** delet incidente */
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
