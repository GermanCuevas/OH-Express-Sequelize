const db = require("../db");
const S = require("sequelize");

class User extends S.Model { }

User.init({
    name: {
        type: S.DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: S.DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: S.DataTypes.STRING,
        allowNull: false
    }
},
    {
        sequelize: db, modelName: "user"
    });


module.exports = User;
