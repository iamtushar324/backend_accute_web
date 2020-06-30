const route = require("express").Router();

route.use("/register", require("./register").route);
route.use("/login", require("./login").route);
route.use("/profile", require("./profile").route);
route.use("/products", require("./products").route);
route.use("/accounts", require("./accounts").route);
route.use("/vouch", require("./vouch").route);
route.use("/debit", require("./debit").route);
route.use("/credit", require("./credit").route);

module.exports = { route };
