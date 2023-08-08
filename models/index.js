const User = require("./user")
const Phone = require("./phone")

//Que trabajen==>
Phone.belongsTo(User, { as: "titular" })

module.exports = { User, Phone }