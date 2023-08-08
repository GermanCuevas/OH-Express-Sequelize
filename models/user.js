const db = require("../db");
const S = require("sequelize");

class User extends S.Model {
    static findByEmail = function (email) {
        return User.findOne({
            where: {
                email: email
            }
        })
    };
    toLower = function () {
        (this.email = this.email.toLowerCase())
        return this.save() // este save asegura que el mail se guarde en minusculas tambien en la base de datos
    }
}

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
