const express = require("express");
const router = express.Router();
const {
  register,
  login,
  forgetPassword,
  resetPassword,
} = require("../controllers/user.controller");



// POST routes for form submissions
router.post("/register", register);
router.post("/login", login);
router.post("/forgetPassword", forgetPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
