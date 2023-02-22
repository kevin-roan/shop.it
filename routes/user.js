var express = require("express");
var router = express.Router();
var productHelpers = require("../helpers/product-helpers");
const userHelper = require("../helpers/user-helper");
var userHelpers = require("../helpers/user-helper");

const verifyLogin = (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("login");
  }
};
/* GET home page. */
router.get("/", async function (req, res, next) {
  let user = req.session.user;
  console.log(user);
  let cartCount = null;
  // when the user is not avail we cant access cart, so we need to check whether there is a user or not. by
  if (req.session.user) {
    cartCount = await userHelpers.getCartCount(req.session.user._id);
  }
  productHelpers.getAllProducts().then((products) => {
    res.render("user/view-products", {
      admin: false,
      products,
      user,
      cartCount,
    });
  });
});
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
  } else {
    res.render("user/login", { LoginErr: req.session.loginErr });
    req.session.loginErr = false;
  }
  res.render("user/login");
});
router.get("/signup", (req, res) => {
  res.render("user/signup");
});

router.post("/signup", (req, res) => {
  userHelper.doSignup(req.body).then((response) => {
    console.log(response);
    req.session.loggedIn = true;
    req.session.user = response.user;
    res.redirect("/");
  });
});

router.post("/login", (req, res) => {
  userHelper.doLogin(req.body).then((response) => {
    if (response.status) {
      req.session.loggedIn = true;
      req.session.user = response.user; // response.user is result form db
      res.redirect("/");
    } else {
      req.session.loginErr = true;
      res.redirect("/login");
    }
  });
});
router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/login");
});

router.get("/cart", verifyLogin, async (req, res) => {
  let products = await userHelpers.getCartProducts(req.session.user._id);
  console.log(products);
  res.render("user/cart", { products, user: req.session.user });
});

router.get("/add-to-cart/:id", verifyLogin, (req, res) => {
  let prodId = req.params.id;
  let userId = req.session.user._id;
  userHelpers.addToCart(prodId, userId).then(() => {
    res.json({ status: true });
    // res.redirect("/");
  });
});

router.post("/change-product-quantity", (req, res, next) => {
  userHelpers.changeProductQuantity(req.body).then((response) => {
    res.json(response);
  });
});

module.exports = router;
