// Setting up the db variable
const db = require('../../data/dbConfig.js');

// Exporting the functions
module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    getActions
}

// Find all projects
function find() {
    return db('projects');
}

// Find a project by its ID
function findById(id) {
    return db('projects').where({id}).first();
}

// Add a new project to the database
function add(project) {
    return db('projects')
    .insert(project)
    .then(ids => {
        const [id] = ids;
        return db('projects')
        .where({id})
        .first();
    })
}

// Update a project by its ID
function update(id, changes) {
    return db('projects')
    .where({id})
    .update(changes)
    .then(() => {
        return db('projects')
        .where({id})
        .first();
    })
}

// Remove a project by its ID
function remove(id) {
    return db('dish')
    .where({id})
    .delete();
}

function getActions(id) {
    return db('actions')
    .where('project_id', id)
    .then(() => {
        return db('actions')
    })
}