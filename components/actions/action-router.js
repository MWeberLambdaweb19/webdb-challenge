// Requiring express as it is the first thing that needs to be done
const express = require('express');

// Pulling the action model from its folder
const Actions = require('./action-model');

// Setting up the router variable
const router = express.Router();

// CREATE

router.post('/', (req, res) => {
    const {project_id} = req.body
    const {notes} = req.body
    const {description} = req.body
    if (!description) {
        res.status(422).json({message: "Please add an action description"})
    }
    if (!project_id) {
        res.status(422).json({message: "Please add a project_id to the action"})
    }
    if (!notes) {
        res.status(422).json({message: "Please add notes to the action"})
    }
    const body = req.body
    Actions.add(body)
    .then(body => {
        res.status(201).json(body)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// READ

router.get('/', (req, res) => {
    Actions.get()
    .then(action => {
        res.status(200).json(action);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/:id', (req, res) => {
    const {id} = req.params
    Actions.get(id)
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
    const {project_id} = req.body
    const {notes} = req.body
    const {description} = req.body
    if (!project_id) {
        res.status(422).json({message: "Please update project_id for this action"})
    }
    if (!description) {
        res.status(422).json({message: "Please update action description"})
    }
    if (!notes) {
        res.status(422).json({message: "Please update action notes"})
    }
    const changes = req.body
    Actions.update(id, changes)
    .then(updated => {
        if (updated) {
            res.status(200).json({success: true, updated})
        } else {
            res.status(404).json({message: "This action cannot be updated as it does not exist"})
        }
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

// DELETE

router.delete('/:id', (req, res) => {
    const {id} = req.params
    Actions.remove(id)
    .then(removed => {
        if(removed) {
            res.status(204).json()
        } else {
            res.status(404).json({success: false, message: "The action with the specified ID does not exist"})
        }
    })
    .catch(err => {
        res.status(500).json({success: false, err})
    })
})

module.exports = router;