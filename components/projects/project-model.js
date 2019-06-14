const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    getActions
}

function find() {
    return db('projects');
}

function findById(id) {
    return db('projects').where({id}).first();
}

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