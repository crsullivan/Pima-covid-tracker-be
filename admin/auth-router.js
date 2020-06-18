require('dotenv').config()

const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Admin = require('../admin/auth-model.js')
const jwt = require('jsonwebtoken')

router.post('/register', (req, res) => {

  console.log("Register ")
  let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;
  
    Admin.add(user)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  router.post('/login', (req, res) => {
    let { name, password } = req.body;
    Admin.findBy({ name })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = getJwtToken(user.name, user.id);
          res.status(200).json({
            message: `Welcome ${user.name}!`,
            token
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

function getJwtToken(name, userId) {
    const payload = {
      name,
      userId
    }
    const options = {
      expiresIn: '4h'
    }
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, options)
    return accessToken
  }
  
  module.exports = router;