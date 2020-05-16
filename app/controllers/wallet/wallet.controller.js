var walletData = [];
module.exports = {
    getRequest: (req, res) => {
        res.render("wallet/list", { walletData });
    },
    addWallet: (req, res) => {
        res.render("wallet/index", {APIURL});
    },
    setWallet: (req, res) => {
        walletData.push(req.body);
        res.render("wallet/list", { walletData });        
    },
    editWallet: (req, res) => {
        res.render("wallet/list", { walletData });
    },
    deleteWallet: (req, res) => {
        res.render("wallet/list", { walletData });
    }
};
