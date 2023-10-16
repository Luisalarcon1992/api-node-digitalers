import 'dotenv/config';
import jwt from 'jsonwebtoken';

const secret = process.env.SECRET_PASSWORD;
// Middleware para verificar si el token es válido
export function verificarToken(req, res, next) {
  const { token } = req.cookies;
  res.header('Access-Control-Allow-Origin', 'http://localhost:4000/');

  if (!token) {
    return res.redirect('login');
  }

  // Verifica el token utilizando la clase Token

  jwt.verify(token, secret, (err, user) => {
    if (err) return res.status(400).json({ error: 'Token inválido' });
    req.user = user;
    // Si el token es válido, continúa con la siguiente ruta
    next();
  });
}

export function verificarToken2(req, res, next) {
  const { token } = req.cookies;
  if (!token) {
    return res
      .status(401)
      .json({ message: 'Acceso denegado. Token no proporcionado' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;

    if (req.user.roll !== 'admin') {
      return res
        .status(403)
        .json({ message: 'Acceso denegado. No eres administrador' });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
}
