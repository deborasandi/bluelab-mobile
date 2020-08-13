import express from 'express'

import ZirconiaController from './controllers/ZirconiaController'
import PmmaController from './controllers/PmmaController'
import CeraController from './controllers/CeraController'
import PolimaxController from './controllers/PolimaxController'
import PeekController from './controllers/PeekController'
import DissilicatoController from './controllers/DissilicatoController'
import FresaController from './controllers/FresaController'
import ItemController from './controllers/ItemController'

const routes = express.Router()

const zirconiaController = new ZirconiaController()
const pmmaController = new PmmaController()
const ceraController = new CeraController()
const polimaxController = new PolimaxController()
const peekController = new PeekController()
const dissilicatoController = new DissilicatoController()
const fresaController = new FresaController()
const itemController = new ItemController()

routes.get('/zirconia', zirconiaController.index)
routes.get('/zirconia/:id', zirconiaController.show)
routes.post('/zirconia', zirconiaController.create)
routes.put('/zirconia/:id', zirconiaController.update)
routes.delete('/zirconia/:id', zirconiaController.delete)

routes.get('/pmma', pmmaController.index)
routes.get('/pmma/:id', pmmaController.show)
routes.post('/pmma', pmmaController.create)
routes.put('/pmma/:id', pmmaController.update)
routes.delete('/pmma/:id', pmmaController.delete)

routes.get('/cera', ceraController.index)
routes.get('/cera/:id', ceraController.show)
routes.post('/cera', ceraController.create)
routes.put('/cera/:id', ceraController.update)
routes.delete('/cera/:id', ceraController.delete)

routes.get('/polimax', polimaxController.index)
routes.get('/polimax/:id', polimaxController.show)
routes.post('/polimax', polimaxController.create)
routes.put('/polimax/:id', polimaxController.update)
routes.delete('/polimax/:id', polimaxController.delete)

routes.get('/peek', peekController.index)
routes.get('/peek/:id', peekController.show)
routes.post('/peek', peekController.create)
routes.put('/peek/:id', peekController.update)
routes.delete('/peek/:id', peekController.delete)

routes.get('/dissilicato', dissilicatoController.index)
routes.get('/dissilicato/:id', dissilicatoController.show)
routes.post('/dissilicato', dissilicatoController.create)
routes.put('/dissilicato/:id', dissilicatoController.update)
routes.delete('/dissilicato/:id', dissilicatoController.delete)

routes.get('/fresa', fresaController.index)
routes.get('/fresa/:id', fresaController.show)
routes.post('/fresa', fresaController.create)
routes.put('/fresa/:id', fresaController.update)
routes.delete('/fresa/:id', fresaController.delete)

routes.get('/item', itemController.index)
routes.get('/item/:id', itemController.show)
routes.post('/item', itemController.create)
routes.put('/item/:id', itemController.update)
routes.delete('/item/:id', itemController.delete)

export default routes
