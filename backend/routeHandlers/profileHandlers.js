const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const profileHandler = express.Router();
const User = require('../model/userModel.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authTokens } = require('../routeHandlers/authHandlers.js');

profileHandler.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    try {
      const { email, password, firstName, lastName } = req.body;
      const userExists = await User.exists({ email: email });
      console.log(userExists);
      if (userExists) {
        res.send('User is already registered. Please login to your account.');
      } else {
        const saltRounds = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, saltRounds);
        await User.insertMany({
          email: email,
          password: hashPassword,
          firstName: firstName,
          lastName: lastName,
        }).then(() => {
          res.send('User successfully created!');
        });
      }
    } catch (err) {
      res
        .status(500)
        .send('An error occured during the user creation process: ' + err);
    }
  })
);

profileHandler.post(
  '/login',
  expressAsyncHandler(async (req, res) => {
    try {
      const { email, password } = req.body;
      const checkForProfile = await User.exists({ email: email });
      if (checkForProfile) {
        const getProfile = await User.find({ email: email });
        const hashedPassword = getProfile[0].password;
        await bcrypt.compare(password, hashedPassword, (err, result) => {
          if (result) {
            // issue fresh access and refresh tokens to the user
            const accessToken = jwt.sign(
              {
                firstName: getProfile[0].firstName,
                lastName: getProfile[0].lastName,
              },
              process.env.JWT_ACCESS_SECRET,
              {
                expiresIn: '30s',
              }
            );

            const refreshToken = jwt.sign(
              {
                firstName: getProfile[0].firstName,
                lastName: getProfile[0].lastName,
              },
              process.env.JWT_REFRESH_SECRET,
              {
                expiresIn: '180s',
              }
            );

            res.cookie('accessToken', accessToken, { httpOnly: true });
            res.cookie('refreshToken', refreshToken, { httpOnly: true });

            res.status(200).send({
              auth: true,
              firstName: getProfile[0].firstName,
              lastName: getProfile[0].lastName,
            });
          } else {
            res.send({ auth: false });
          }
        });
      } else {
        res.send({ auth: false });
      }
    } catch (err) {}
  })
);

module.exports = profileHandler;
