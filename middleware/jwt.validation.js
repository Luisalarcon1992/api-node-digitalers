import 'dotenv/config';
import jwt from 'jsonwebtoken';

const secret = process.env.SECRET_PASSWORD;
// Middleware para verificar si el token es válido
export function verificarToken(req, res, next) {
  const { token } = req.cookies;

  if (!token) {
    return res.redirect('login');
  }

  // Verifica el token utilizando la clase Token

  jwt.verify(token, secret, (err, user) => {
    if (err) return res.status(400).json({ error: 'Token inválido' });
    console.log('###########################');
    console.log(req);
    req.user = user;
    next();
  });

  // Si el token es válido, continúa con la siguiente ruta
}
