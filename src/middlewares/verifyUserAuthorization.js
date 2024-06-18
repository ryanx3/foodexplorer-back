const AppError = require("../utils/AppError");

function verifyUserAuthorization(roleToVerify) {
  return (req, res, next) => {
    const { role } = req.user;

    if (!roleToVerify.includes(role)) {
      throw new AppError("Não autorizado", 401);
    }

    return next();
  };
}

module.exports = verifyUserAuthorization;