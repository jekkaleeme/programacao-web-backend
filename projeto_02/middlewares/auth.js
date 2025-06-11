module.exports = function (req, res, next) {
  if (!req.session || !req.session.userId) {
    return res.status(401).json({ error: 'Acesso não autorizado. Faça login para continuar.' });
  }
  next();
}