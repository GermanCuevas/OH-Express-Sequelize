const User = require("./user")
const Phone = require("./phone")

Phone.belongsTo(User, { as: "titular" })

module.exports = { User, Phone }