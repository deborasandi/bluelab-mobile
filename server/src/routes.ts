import express from 'express';
import PriceTableController from './controllers/PriceTableController'
import JobTypeController from './controllers/JobTypeController'
import JobPriceController from './controllers/JobPriceController'
import ClientController from './controllers/ClientController'
import ProductColorController from './controllers/ProductColorController'
import JobController from './controllers/JobController'
import UserController from './controllers/UserController'

const priceTableController = new PriceTableController()
const jobTypeController = new JobTypeController()
const jobPriceController = new JobPriceController()
const clientController = new ClientController()
const productColorController = new ProductColorController()
const jobController = new JobController()
const userController = new UserController()

const routes = express.Router();

routes.get('/pricetable', priceTableController.index)
routes.get('/jobtype', jobTypeController.index)
routes.get('/jobprice', jobPriceController.index)
routes.get('/client', clientController.index)
routes.get('/productcolor', productColorController.index)
routes.get('/job', jobController.index)
routes.get('/user', userController.index)

routes.get('/user/:username', userController.show);

export default routes
