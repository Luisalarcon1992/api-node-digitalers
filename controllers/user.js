import User from '../models/schema//userSechema.js';
import UserModel from '../models/user.js';
import bcrypt from 'bcrypt';
import Token from '../libs/token.js';

export default class UserController {
  static async postCreateUser(req, res) {
    const { mail, password, username } = req.body;

    const error = await User.validate({ username, password, mail });

    if (error) {
      req.flash(
        'errorMsg',
        'Los datos brindados no cumplen con los requisitos necesarios para crear el usuario',
      );
      res.redirect('/register');
    }

    const tryRounds = 10;

    try {
      const hash = await bcrypt.hash(password, tryRounds);

      const newUser = new User({
        username,
        password: hash,
        mail,
      });

      const result = await UserModel.createUser(newUser);

      if (!result) {
        req.flash('errorMsg', 'Usuario o mail ya existente');
        res.redirect('/register');
      } else {
        const token = await Token.createToken({ id: result.insertedId });
        res.cookie('token', token, {
          httpOnly: true,
          maxAge: 1800000,
        });
        res.redirect('/login');
      }
    } catch (error) {
      console.log('error' + error);
    }
  }

  static async loginUser(req, res) {
    const { mail, password } = req.body;

    const lowercaseMail = mail.toLowerCase();

    const user = await UserModel.getUserMail(lowercaseMail);

    if (!user) {
      req.flash('errorMsg', 'Mail o contraseña incorrecto');
      res.redirect('/login');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      req.flash('errorMsg', 'Mail o contraseña incorrecto');
      res.redirect('/login');
    }

    // Si el correo electrónico y la contraseña son válidos, generamos un token y respondemos
    const token = await Token.createToken({ id: user._id });
    res.cookie('token', token, {
      expires: new Date(Date.now() + 3600000),
      htppOnly: true,
    });
    res.redirect('/');
  }

  static async logoutUser(req, res) {
    res.cookies = '';
    res.redirect('/');
  }
}
