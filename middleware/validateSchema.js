export const validateSechema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ Error: error.errors.map((error) => error.message) });
  }
};

export const validateSechemaLogin = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ Error: error.errors.map((error) => error.message) });
  }
};
