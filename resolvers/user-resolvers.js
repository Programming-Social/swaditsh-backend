const jwt = require('jsonwebtoken');
const db = require('../database/models/index.js');
const { opts } = require('../utilities/passport');
let { User } = db

async function SignUp(req, res) {
  try {
    const { phone, pin } = req.body
    let findUserResponse = await User.findOne({
      where: { phone: phone },
    });

    if (findUserResponse) {
      res.status(409).json({
        success: false,
        message: 'User already exists'
      });
      return
    }

    /* Validate User with OTP */
    /* Validate User Pin */
    const newUserResponse = await User.create({ phone, pin });
    res.status(200).json({
      success: true,
      message: 'User created successfully',
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: 'Registration functionality is not available at the moment . Please try again after sometime .',
    })
  }
}

async function Login(req, res) {
  try {

    let { phone, pin } = req.body
    let findUserResponse = await User.findOne({
      where: {
        phone
      }
    })

    if (!findUserResponse) {
      res.status(404).json({
        success: false,
        message: `User does not exist ! please verify the phone number ${phone}`
      });
      return
    }

    if (pin !== findUserResponse.pin) {
      res.status(401).json({
        success: false,
        message: `Pin did not match please try again`
      });
      return
    }

    let authToken = jwt.sign({ id: findUserResponse.user_id }, opts.secretOrKey)

    res.status(200).json({
      success: true,
      message: 'Logged in successfully',
      data: {
        token: authToken,
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Login functionality is not available at the moment . Please try again after sometime .',
    })
  }
}

async function Profile(req, res) {
  try {
    res.status(200).json({
      success: true,
      message: 'Here is your profile'
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: 'Profile functionality is not available at the moment . Please try again after sometime .',
    })
  }
}

module.exports = {
  SignUp, Login, Profile
}