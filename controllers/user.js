import user from '../schema/userSechema.js';
import UserModel from '../models/user.js';
import bcrypt from 'bcrypt';
import Token from '../libs/token.js';

export default class UserController {
  static async postCreateUser(req, res) {
    const { mail, password, username } = req.body;

    const error = await user.validate({ username, password, mail });

    if (error)
      return res.send(400).json({
        Error:
          'Los datos brindados no cumplen con los requisitos necesarios para crear el usuario',
      });

    const tryRounds = 10;

    try {
      const hash = await bcrypt.hash(password, tryRounds);

      const newUser = new user({
        username,
        password: hash,
        mail,
      });

      const result = await UserModel.createUser(newUser);

      if (!result) {
        res.status(400).json({ Error: 'Usuario o mail ya existentes' });
      } else {
        const token = await Token.createToken({ id: result.insertedId });
        res.cookie('token', token, {
          httpOnly: true,
          maxAge: 1800000,
        });
        res.status(200).json({ Correcto: 'Usuario creado existosamente' });
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
      return res.status(400).json({ Error: 'Mail incorrecto' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ Error: 'Contraseña incorrecta' });
    }

    // Si el correo electrónico y la contraseña son válidos, generamos un token y respondemos
    const token = await Token.createToken({ id: user._id });
    res.cookie('token', token, {
      expires: new Date(Date.now() + 3600000),
      htppOnly: true,
    });
    res.json({
      id: user._id,
      username: user.username,
      mail: user.mail,
    });
  }
}
