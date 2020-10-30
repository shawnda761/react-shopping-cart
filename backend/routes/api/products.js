const router = require("express").Router();
let Product = require("../../models/product.model");

router.route("/").get((req, res) => {
  Product.find()
    .then((products) => res.json(products))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  // const newProduct = new Product({
  //   image: req.body.image,
  //   title: req.body.title,
  //   description: req.body.description,
  //   availableSizes: req.body.availableSizes,
  //   price: req.body.price,
  // });
  const newProduct = new Product(req.body);

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json("Product deleted!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").put((req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      // product.image = req.body.image;
      // product.title = req.body.title;
      // product.description = req.body.description;
      // product.availableSizes = req.body.availableSizes;
      // product.price = req.body.price;
      product = req.body;

      product
        .save()
        .then(() => res.json("Product upated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
