import ClientController from './controllers/ClientController';
import express from 'express';

const clientController = new ClientController();

const routes = express.Router();

routes.get('/client', clientController.index);

export default routes
