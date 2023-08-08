const express = require("express");
const routerPhone = express.Router();
const { Phone } = require("../models/index");


//Que laburen ellos dentro de las rutas( usar , thens ...)
routerPhone.get("/", async (req, res) => {
    try {
        const phones = await Phone.findAll()
        res.send(phones)
    } catch (error) {
        res.status(404).send("Not found any phone")
    }
})

routerPhone.get("/:id", async (req, res) => {
    const id = req.params.id
    try {
        const onePhone = await Phone.findByPk(id)
        res.send(onePhone.info)
    } catch (error) {
        res.status(404).send("Error in the search, " + error)

    }
})
routerPhone.post("/:id", async (req, res) => {
    const { id } = req.params;
    const { contact, info } = req.body;
    try {
        const phone = await Phone.create({
            titularId: id,
            contact,
            info
        })
        res.status(201).send(phone)
    } catch (err) {
        res.status(500).send("error " + err)
    }
})

module.exports = routerPhone;