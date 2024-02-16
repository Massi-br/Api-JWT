const router = require("express").Router();
const authRoutes = require("./users");
const mazesRoutes = require("./mazes");

router.use("/auth", authRoutes);
router.use("/mazes", mazesRoutes);

router.use(function (err, req, res, next) {
  if (err.name === "ValidationError") {
    return res.status(422).json({
      errors: Object.keys(err.errors).reduce(function (errors, key) {
        errors[key] = err.errors[key].message;

        return errors;
      }, {}),
    });
  }

  return next(err);
});

module.exports = router;
