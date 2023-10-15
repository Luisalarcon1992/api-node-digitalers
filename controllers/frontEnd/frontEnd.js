export default class FrontEndController {
  static async index(req, res) {
    let admin = res.app.locals.userRoll;
    let user = res.app.locals.userRoll;

    user === null ? (user = false) : (user = true);
    admin === 'admin' ? (admin = true) : (admin = false);

    console.log('############### INDEX  ##############');
    console.log(admin);
    console.log(user);
    res.render('index', {
      user,
      admin,
    });
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
    res.app.locals.userRoll = 'user';
    console.log('****************************');
    console.log(res.app.locals.userRoll);
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
