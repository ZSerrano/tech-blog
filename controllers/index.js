const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home.js");
const dashboardRoutes = require("./dashboard.js");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
