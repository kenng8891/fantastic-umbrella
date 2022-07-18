const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Category.findAll({
    include: [Tag],
  }).then((dbtag) => {
    res.json(dbtag);
  });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [Tag],
  }).then((dbtag) => {
    res.json(dbtag);
  });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create(req.body).then((dbtag) => {
    restore.json(dbtag);
  });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({
    where: {
      id: req.params.id,
    },
  }).then((dbtag) => {
    res.json(dbtag);
  });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  }).then((dbtag) => {
    res.json(dbtag);
  });
});

module.exports = router;
