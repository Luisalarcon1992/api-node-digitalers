export default class FrontEndController {
  static async index(req, res) {
    res.render('index');
  }

  static async about(req, res) {
    res.render('about');
  }

  static async register(req, res) {
    res.render('register');
  }

  static async login(req, res) {
    res.render('login');
  }

  static async logout(req, res) {
    res.redirect('/');
  }

  static async admin(req, res) {
    const context = {
      validCategories: [
        'Construcción',
        'Oficina',
        'Villa',
        'Departamento',
        'Casa',
      ],
    };

    const stateProperty = {
      state: ['En venta', 'Alquiler', 'Vendido', 'Alquilado'],
    };

    res.render('admin', {
      context,
      stateProperty,
    });
  }

  static async contact(req, res) {
    res.render('contact');
  }

  static async propertis(req, res) {
    res.render('propertis');
  }
}
