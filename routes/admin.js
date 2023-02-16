var express = require("express");
const productHelpers = require("../helpers/product-helpers");
var router = express.Router();
var productHelper = require("../helpers/product-helpers");

/* GET users listing. */
router.get("/", function (req, res, next) {
  let products = [
    {
      name: "Iphone 11",
      category: "Mobile",
      description: "This is good phone ",
      image:
        "https://cdn.dxomark.com/wp-content/uploads/medias/post-41148/oneplus7tpro-1024x768.jpg",
    },
    {
      name: "Redmi Note 9 Pro",
      category: "Mobile",
      description: "This is a good phone",
      image:
        "https://cdn.dxomark.com/wp-content/uploads/medias/post-41148/oneplus7tpro-1024x768.jpg",
    },
    {
      name: "One Plus 7T",
      category: "Mobile",
      description: "This is a good phone",
      image:
        "https://cdn.dxomark.com/wp-content/uploads/medias/post-41148/oneplus7tpro-1024x768.jpg",
    },
    {
      name: "Redmi Note 9 Pro",
      category: "Mobile",
      description: "This is a good phone",
      image:
        "https://cdn.dxomark.com/wp-content/uploads/medias/post-41148/oneplus7tpro-1024x768.jpg",
    },
  ];
  res.render("admin/view-products", { admin: true, products });
});

router.get("/add-product", function (req, res) {
  res.render("admin/add-product");
});

router.post("/add-product", (req, res) => {
  // console.log(req.body);
  // console.log(req.files.Image);
  productHelpers.addProduct(req.body, (id) => {
    res.render("admin/add-product");
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
module.exports = router;
