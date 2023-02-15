var express = require("express");
var router = express.Router();

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
  console.log(req.body);
  console.log(req.files.Image);
});
module.exports = router;
