var jwt           = require('jsonwebtoken');
var passwordHash  = require('password-hash')
var User          = require('../models/user');
// var passport      = require('passport');
// var LocalStrategy = require('passport-local').Strategy;

module.exports = {
  register : (req, res, next) => {
    var hashed = passwordHash.generate(req.body.password)
    let user = {
      username : req.body.username,
      email : req.body.email,
      password : hashed
    }
    User.create(user,(err, user) => {
      if (err) {
        res.json({ err : err })
      } else {
        res.json({ data : user });
      }
    })
  },

  signin : (req, res, next) => {
    var pwd    = req.body.password
    var mail   = req.body.email
    var secret = 'qwerty123'
    User.find({ where : { email : mail } })
    .then(function (data) {
      if(passwordHash.verify(pwd, data.password)) {
        let token = jwt.sign({
          email: data.mail,
          username: data.username
        }, secret, {});
        res.json({token : token})
      } else {
        res.json({passerror: true})
      }
      }).catch(function (err) {
        if (err) {
          res.json({ err: err })
        }
      })
  },

  getUsers : (req, res, next) => {
    User.find({}, (err, users) => {
      if (err) {
        res.json({ err : err })
      } else {
        res.json({ data : users });
      }
    })
  },

  getOneUser : (req, res, next) => {
    User.findOne({
      username: req.params.username
    }, (err, user) => {
      if (err) {
        res.json(err)
      } else {
        res.json(user);
      }
    })
  },

  updateUser : (req, res, next) => {
    User.findOneAndUpdate({
      username: req.params.username
    }, req.body, {new: true}, (err, user) => {
      if (err) {
        res.json(err)
      } else {
        res.json(user)
      }
    })
  },

  deleteUser : (req, res, next) => {
    User.findOneAndRemove({
      username: req.params.username
    }, (err, user) => {
      if (err) {
        res.json(err)
      } else {
        res.json(user)
      }
    })
  }

}
