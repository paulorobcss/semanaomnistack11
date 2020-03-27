const express = require('express');

const OngController = require('./controllers/Ong_Controller');
const IncidentController = require('./controllers/Incident_Controller');
const ProfileController = require('./controllers/Profile_Controller');
const SessionController = require('./controllers/Session_Controller');

// desacoplando o módulo de rotas em uma variável
const routes = express.Router();

/* métodos http
    get: buscar uma informação do back-end
    post: criar uma informação no back-end
    put: alterar uma informação no back-end
    delete: deletar uma informação do back-end  
*/

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;