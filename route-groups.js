const router = require("express").Router();

router.use("/wallet", require("./app/routes/wallet.routes"));

module.exports = router;
