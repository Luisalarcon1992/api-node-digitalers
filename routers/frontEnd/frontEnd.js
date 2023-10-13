import { Router } from 'express';
import FrontEndController from '../../controllers/frontEnd/frontEnd.js';
import { verificarToken } from '../../middleware/jwt.validation.js';

export const frontEndRouter = Router();

frontEndRouter.get('/', FrontEndController.index);
frontEndRouter.get('/about', FrontEndController.about);
frontEndRouter.get('/registrar', FrontEndController.register);
frontEndRouter.get('/login', FrontEndController.login);
frontEndRouter.get('/contacto', FrontEndController.contact);
frontEndRouter.get('/propiedades', FrontEndController.propiedades);
frontEndRouter.get('/admin', verificarToken, FrontEndController.admin);
frontEndRouter.get('/logout', verificarToken, FrontEndController.logout);
