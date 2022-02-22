const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
} = require("../../controllers/user-controller");

//router for / methods
router.route("/").get(getAllUsers).post(createUser);

router.route("/:id").get(getUserById);

//route for post createuser
router.route("/").post(createUser);

module.exports = router;
