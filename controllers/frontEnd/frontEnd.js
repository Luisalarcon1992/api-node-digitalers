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
    res.send('logout');
  }
}
