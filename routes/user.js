var express = require("express");
var router = express.Router();

/* GET home page. */
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
  res.render("index", { products, admin: false });
});

module.exports = router;
