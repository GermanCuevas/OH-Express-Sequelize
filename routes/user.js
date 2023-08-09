const express = require("express");
const routerUser = express.Router();
const { User } = require("../models/index")


const checkAge = (req, res, next) => {
    const age = req.body.age
    if (age < 18) {
        return res.status(404).send("Not allow!")
    }
    next()
}


routerUser.post("/", checkAge, async (req, res) => {
    User.create(req.body).then(user => user.toLower()).then(user => res.status(201).send(user)).catch(err => console.log("error in create user, " + err))
    /* try {
        const user = await User.create(req.body)
        await user.toLower()
        console.log(user.toLower);
        res.status(201).send(user)
    } catch (err) {
        res.status(500).send("error " + err)
    } */
})

routerUser.get("/", (req, res) => {
    User.findAll().then((users) => {
        res.send(users)
    }).catch(err => console.log("Get All, " + err))
})

routerUser.get("/:email", (req, res) => {
    User.findByEmail(req.params.email).then(user => {
        res.send(user)
    }).catch(err => console.log("error in search by email " + err))
})

routerUser.put("/:id", (req, res) => {
    const { email } = req.body
    User.update({ email: email }, {
        where: {
            id: req.params.id
        },
        returning: true
    }).then(([rows, user]) => {
        res.status(202).send({ message: "Updated!", user: user[0] })
    }).catch(err => res.status(500).send("error in update, " + err))
})



module.exports = routerUser;