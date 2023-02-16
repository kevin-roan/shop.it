var express = require("express");
var router = express.Router();
var productHelpers = require("../helpers/product-helpers");
const userHelper = require("../helpers/user-helper");
var userHelpers = require("../helpers/user-helper");

/* GET home page. */
router.get("/", function (req, res, next) {
  let user = req.session.user;
  console.log(user);
  productHelpers.getAllProducts().then((products) => {
    res.render("user/view-products", { admin: false, products, user });
  });
});
router.get("/login", (req, res) => {
  res.render("user/login");
});
router.get("/signup", (req, res) => {
  res.render("user/signup");
});

router.post("/signup", (req, res) => {
  userHelper.doSignup(req.body).then((response) => {
    console.log(response);
  });
});

router.post("/login", (req, res) => {
  userHelper.doLogin(req.body).then((response) => {
    if (response.status) {
      req.session.loggedIn = true;
      req.session.user = response.user; // response.user is result form db
      res.redirect("/");
    } else {
      res.redirect("/login");
    }
  });
});
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});
module.exports = router;
