import { Router } from 'express';
import FrontEndController from '../../controllers/frontEnd/frontEnd.js';

export const frontEndRouter = Router();

frontEndRouter.get('/', FrontEndController.index);
frontEndRouter.get('/about', FrontEndController.about);
frontEndRouter.get('/register', FrontEndController.register);
frontEndRouter.get('/login', FrontEndController.login);
frontEndRouter.get('/logout', FrontEndController.logout);
