const jwt = require('jsonwebtoken');

const checkExpiration = (tokenTime, currentTime) => {
  const checkTime = tokenTime - currentTime;

  if (checkTime <= 0) {
    return false;
  } else return true;
};

const authTokens = (req, res, next) => {
  const cookies = req.headers.cookie;
  const accessToken = cookies.split('accessToken=')[1].split(';')[0];
  const refreshToken = cookies.split('refreshToken=')[1].split(';')[0];

  try {
    const accessTokenDecode = jwt.decode(accessToken);
    const refreshTokenDecode = jwt.decode(refreshToken);
    const currentTime = Date.now();
    const currentTimeSeconds = Math.floor(currentTime / 1000);
    const accessTokenValid = checkExpiration(
      accessTokenDecode.exp,
      currentTimeSeconds
    );

    const refreshTokenValid = checkExpiration(
      refreshTokenDecode.exp,
      currentTimeSeconds
    );

    if (accessTokenValid && refreshTokenValid) {
      res.locals.status = {
        auth: true,
        message: 'user has been authorized',
      };
    } else if (!accessTokenValid && refreshTokenValid) {
      const { firstName, lastName } = jwt.decode(accessToken);
      const newAccessToken = jwt.sign(
        {
          firstName: firstName,
          lastName: lastName,
        },
        process.env.JWT_ACCESS_SECRET,
        { expiresIn: '30s' }
      );
      res.cookie('accessToken', newAccessToken, { httpOnly: true });
      res.locals.status = {
        auth: true,
        message: 'a new access token has been issued',
      };
    } else {
      res.locals.status = {
        auth: false,
        message: 'access denied',
      };
    }
  } catch (err) {
    if (err) throw err;
  }
  next();
};

module.exports = {
  authTokens,
};
