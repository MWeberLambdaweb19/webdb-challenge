// Setting up the db variable
const db = require('../../data/dbConfig.js');

// Exporting the functions
module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

// Find all actions
function find() {
    return db('actions');
}

// Find an action by its ID
function findById(id) {
    return db('actions').where({id}).first();
}

// Add an action to the database
function add(action) {
    return db('actions')
    .insert(action)
    .then(ids => {
        const [id] = ids;
        return db('actions')
        .where({id})
        .first();
    })
}

// Update an action by its ID
function update(id, changes) {
    return db('actions')
    .where({id})
    .update(changes)
    .then(() => {
        return db('actions')
        .where({id})
        .first();
    })
}

// Remove an action by its ID
function remove(id) {
    return db('dish')
    .where({id})
    .delete();
}
