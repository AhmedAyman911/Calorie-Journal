const router = require("express").Router();
let User = require("../models/users.model.js");

// get user
router.route("/").get((req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json("Error get user: " + err));
});

// add user
router.route("/add").post((req, res) => {
    const username = req.body.username;
    const newUser = new User({
        username
    });

    newUser
        .save()
        .then(() => res.json("User added Successfully"))
        .catch((err) => res.status(400).json("Error adding user: " + err));
});

module.exports = router;