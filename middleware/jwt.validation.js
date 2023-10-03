import Token from "../libs/token.js";

// Middleware para verificar si el token es válido
export function verificarToken(req, res, next) {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado." });
  }

  // Verifica el token utilizando la clase Token
  const decodedToken = Token.verifiedToken(token);

  if (!decodedToken) {
    return res.status(400).json({ error: "Token inválido." });
  }

  // Si el token es válido, continúa con la siguiente ruta
  next();
}
