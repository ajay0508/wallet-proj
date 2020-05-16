const router = require("express").Router();
const wallet  = require("../controllers/wallet/wallet.controller");

router.get("/list", wallet.getRequest);
router.get("/add", wallet.addWallet);
router.post("/add", wallet.setWallet);
router.put("/edit", wallet.editWallet);
router.delete("/delete", wallet.deleteWallet);

module.exports = router;
