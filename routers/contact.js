import { Router } from 'express';
import ContactController from '../controllers/contact.js';

export const ContactRouter = Router();

ContactRouter.post('/crear', ContactController.formContact);
