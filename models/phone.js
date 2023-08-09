const db = require("../db");
const S = require("sequelize");


class Phone extends S.Model { }

Phone.init({
    contact: {
        type: S.DataTypes.STRING,
        allowNull: true,
    },
    info: {
        type: S.DataTypes.VIRTUAL,
        defaultValue: "Info number not avaible",
        get() {
            return "Number: " + this.getDataValue("contact")
        }
    },
    imei: {
        type: S.DataTypes.STRING,
        defaultValue: 0,
    }
},
    {
        sequelize: db, modelName: "phone"
    });



Phone.beforeCreate(phone => {
    let imei = Math.floor(Math.random() * 100)
    phone.imei = imei
})

module.exports = Phone;
