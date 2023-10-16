import User from '../models/schema//userSechema.js';
import UserModel from '../models/user.js';
import bcrypt from 'bcrypt';
import Token from '../libs/token.js';

export default class UserController {
  static async postCreateUser(req, res) {
    const { mail, password, username, roll } = req.body;

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
        roll,
      });

      const result = await UserModel.createUser(newUser);

      if (!result) {
        req.flash('errorMsg', 'Usuario o mail ya existente');
        res.redirect('/register');
      } else {
        const token = await Token.createToken({
          id: result.insertedId,
          roll: result.roll,
        });
        res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
        res.cookie('token', token, {
          httpOnly: true,
          maxAge: 36000000,
          secure: true,
          sameSite: 'lax',
          Credential: 'include',
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
      return res.redirect('/login');
    }
    if (user.roll === 'admin') {
      res.app.locals.userRoll = user.roll;
    } else {
      res.app.locals.userRoll = 'user';
    }
    // Si el correo electrónico y la contraseña son válidos, generamos un token y respondemos
    const token = await Token.createToken({ id: user._id, roll: user.roll });

    res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 36000000,
      secure: true,
      sameSite: 'None',
      credential: 'include',
    });
    res.redirect('/');
  }

  static async logoutUser(req, res) {
    res.app.locals.userRoll = null;
    res.redirect('/');
  }
}
