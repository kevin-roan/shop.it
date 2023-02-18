var express = require("express");
var productHelpers = require("../helpers/product-helpers");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  productHelpers.getAllProducts().then((products) => {
    console.log(products);
    res.render("admin/view-products", { admin: true, products });
  });
});

router.get("/admin-login", (req, res) => {
  res.render("admin/admin-login");
});

router.get("/add-product", function (req, res) {
  res.render("admin/add-product");
});

router.post("/add-product", (req, res) => {
  // console.log(req.body);
  // console.log(req.files.Image);
  productHelpers.addProduct(req.body, (id) => {
    // to store the image to a seperate folder with the name as id of inserted document
    let image = req.files.Image;
    image.mv("./public/product-images/" + id + ".jpg", (err, done) => {
      if (!err) {
        res.render("admin/add-product");
      } else {
        console.log(err);
      }
    });
  });
});

router.get("/delete-product/:id", (req, res) => {
  let prodId = req.params.id;
  console.log(prodId);
  productHelpers.deleteProduct(prodId).then((respone) => {
    res.redirect("/admin/");
  });
});
module.exports = router;
