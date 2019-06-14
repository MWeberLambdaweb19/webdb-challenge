// Requiring express as it is the first thing that needs to be done
const express = require('express');

// Pulling the project model from its folder
const Projects = require('./project-model');

// Setting up the router variable
const router = express.Router();

// CREATE

router.post('/', (req, res) => {
    const {name} = req.body
    const {description} = req.body
    if (!description) {
        res.status(422).json({message: "Please add a project description"})
    }
    if (!name) {
        res.status(422).json({message: "Please add a project name"})
    }
    const body = req.body
    Projects.add(body)
    .then(body => {
        res.status(201).json(body)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// READ

router.get('/', (req, res) => {
    Projects.find()
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    Projects.findById(id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id/actions', (req, res) => {
    const {id} = req.params;
    Projects.getActions(id)
    .then(action => {
        res.status(200).json(action);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// UPDATE

router.put('/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    const {description} = req.body
    if (!description) {
        res.status(422).json({message: "Please update project description"})
    }
    if (!name) {
        res.status(422).json({message: "Please update project name"})
    }
    const changes = req.body
    Projects.update(id, changes)
    .then(updated => {
        if (updated) {
            res.status(200).json({success: true, updated})
        } else {
            res.status(404).json({message: "This project cannot be updated as it does not exist"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// DELETE

router.delete('/:id', (req, res) => {
    const {id} = req.params
    Projects.remove(id)
    .then(removed => {
        if(removed) {
            res.status(204).json()
        } else {
            res.status(404).json({success: false, message: "The project with the specified ID does not exist"})
        }
    })
    .catch(err => {
        res.status(500).json({success: false, err})
    })
})

module.exports = router;