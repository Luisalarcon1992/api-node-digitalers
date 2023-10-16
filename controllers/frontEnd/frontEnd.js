export default class FrontEndController {
  static async index(req, res) {
    let admin = res.app.locals.userRoll;
    let user = res.app.locals.userRoll;
    const data = res.data;
    user === null ? (user = false) : (user = true);
    admin === 'admin' ? (admin = true) : (admin = false);
    res.render('index', {
      user,
      admin,
      data,
    });
  }

  static async about(req, res) {
    const data = res.data;
    res.render('about', {
      data,
    });
  }

  static async register(req, res) {
    res.render('register');
  }

  static async login(req, res) {
    res.render('login');
  }

  static async logout(req, res) {
    res.app.locals.userRoll = 'user';
    res.redirect('/');
  }

  static async admin(req, res) {
    const { roll } = req.user;
    if (roll === 'admin') {
      res.app.locals.userRoll = roll;
    }
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
      state: ['Venta', 'Alquiler', 'Vendido', 'Alquilado'],
    };

    res.render('admin', {
      context,
      stateProperty,
    });
  }

  static async contact(req, res) {
    const data = res.data;

    res.render('contact', {
      data,
    });
  }

  static async propertis(req, res) {
    let admin = res.app.locals.userRoll;
    let user = res.app.locals.userRoll;
    const data = res.data;
    user === null ? (user = false) : (user = true);
    admin === 'admin' ? (admin = true) : (admin = false);
    res.render('propertis', {
      admin,
      data,
      user,
    });
  }
}
