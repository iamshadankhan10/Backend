const jwt = require("jsonwebtoken");

async function identifyUser(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Token not provided, unauthorized access",
    });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({
      message: "User not autharized",
    });
  }

  req.user = decoded;
  console.log("req.user:", req.user);
  next();
}

module.exports = {
  identifyUser,
};
