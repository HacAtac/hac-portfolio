const { User } = require("../models");

const userController = {
  getAllUsers: (req, res) => {
    User.find({}) //getting error cannot read property 'find' of undefined // why? // because we are trying to access the find method on the User model
      //we need to import the User model from the models folder
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  getUserById: (req, res) => {
    User.findById(req.params.id)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  },
  createUser: (req, res) => {
    User.create(req.body)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

module.exports = userController;
