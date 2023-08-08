const express = require("express");
const morgan = require("morgan");
const { User, Phone } = require("./models/index");
const db = require("./db/index")
const router = require("./routes/index")

const app = express();

app.use(express.json())
app.use(morgan("tiny"))
app.use("/api", router)



db.sync({ force: false })
    .then(() => {
        console.log("Base de datos sincronizada");
        app.listen(3000, () => {
            console.log("Escuchando puerto 3000");
        });
    })
    .catch((err) => {
        console.error("Error al sincronizar la base de datos:", err);
    });

module.exports = app