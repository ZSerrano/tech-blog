const router = require("express").Router();
const { Post } = require("../models/");

router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: {
        userId: req.body.userId,
      },
    });

    res.render("all-posts-admin", {
      layout: "dashboard",
      posts,
    });
  } catch (err) {
    console.log(error);
  }
});

module.exports = router;
