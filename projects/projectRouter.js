const express = require('express');
const db = require('../data/helpers/projectModel');

const router = express.Router();

router.post("/", (req, res) => {
    db.insert(req.body)
    .then(project => {
        res.status(201).json(project);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ errorMessage: "Could not add the project"})
    })
})

router.put('/:id', function (req, res) {
    const id = req.params.id;
    db.update(id, req.body)
})