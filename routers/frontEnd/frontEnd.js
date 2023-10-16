import { Router } from 'express';
import FrontEndController from '../../controllers/frontEnd/frontEnd.js';
import { verificarToken2 } from '../../middleware/jwt.validation.js';
import { allData } from '../../middleware/data.js';

export const frontEndRouter = Router();

frontEndRouter.get('/', allData, FrontEndController.index);
frontEndRouter.get('/about', allData, FrontEndController.about);
frontEndRouter.get('/registrar', FrontEndController.register);
frontEndRouter.get('/login', FrontEndController.login);
frontEndRouter.get('/contacto', allData, FrontEndController.contact);
frontEndRouter.get('/residencias', allData, FrontEndController.propertis);
frontEndRouter.get(
  '/admin',
  verificarToken2,
  allData,
  FrontEndController.admin,
);
frontEndRouter.get('/logout', FrontEndController.logout);
