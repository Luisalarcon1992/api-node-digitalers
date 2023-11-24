import Contact from '../models/schema/contactSchema.js';
import ContactModel from '../models/contact.js';

export default class ContactController {
  static async formContact(req, res) {
    const { name, email, subject, message } = req.body;

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    const contactCreated = ContactModel.postContact(newContact);
    console.log('##############');
    console.log(contactCreated);
    if (contactCreated) {
      req.flash('errorMsg', 'Contacto creado correctamente');
      return res.redirect('/');
    }
  }
}
