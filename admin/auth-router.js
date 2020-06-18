require('dotenv').config()

const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Admin = require('../admin/auth-model.js')
const jwt = require('jsonwebtoken')

router.post('/register', (req, res) => {

    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Admin.add(user)
        .then(user => {
        res.status(201).json({ message: `Admin ${user.name} registered` });
        console.log("Registered")
        })
        .catch(error => {
        res.status(500).json(error);
        });
    });

router.post('/login', (req, res) =>{
  let {name, password} = req.body
  Admin.findBy({name})
  .first()
  .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user.name)
          res.status(200).json({message: `Welcome ${user.name}!`, token})
      } else {
          res.status(401).json({message: "This is not a registered user"})
      }
  })
  .catch(error => {
      res.status(500).json(error)
  })
})

router.get('/lemmesee', (req, res) => {
  Admin.getAll()
  .then(users => {
      return res.json(users)
  })
  .catch(error => {
      res.status(500).json(error);
    });
})

function generateToken(name) {
    const payload = {
      name
    }
    const options = {
      expiresIn: '4h'
    }
    const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, options)
    return accessToken
  }
  
  module.exports = router;