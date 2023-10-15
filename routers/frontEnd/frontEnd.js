import { Router } from 'express';
import FrontEndController from '../../controllers/frontEnd/frontEnd.js';
import { verificarToken2 } from '../../middleware/jwt.validation.js';

export const frontEndRouter = Router();

frontEndRouter.get('/', FrontEndController.index);
frontEndRouter.get('/about', FrontEndController.about);
frontEndRouter.get('/registrar', FrontEndController.register);
frontEndRouter.get('/login', FrontEndController.login);
frontEndRouter.get('/contacto', FrontEndController.contact);
frontEndRouter.get('/residencias', FrontEndController.propertis);
frontEndRouter.get('/admin', verificarToken2, FrontEndController.admin);
frontEndRouter.get('/logout', FrontEndController.logout);
