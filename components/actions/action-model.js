const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db('actions');
}

function findById(id) {
    return db('actions').where({id}).first();
}

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

function remove(id) {
    return db('dish')
    .where({id})
    .delete();
}
