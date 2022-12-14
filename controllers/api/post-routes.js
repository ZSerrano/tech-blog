const router = require("express").Router();
const { Post } = require("../../models/");

router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({ userId: req.body.userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const [postRows] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (postRows > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
