// Setting up the db variable
const db = require('../../data/dbConfig.js');

// Importing the support functions
const support = require('../support.js');

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
    return db('projects').then(project => {
        return project.map(project => support.projectBody(project));
    });
}

// Find a project by its ID
function findById(id) {
    let request = db('projects');

    if (id) {
        request.where('projects.id', id).first();
        
        const promises = [request, this.getActions(id)]; // sets the variable promises to an array of the request and the getActions function
        
        // Promise all returns a single promise after fulfilling all promises passed in as an parameter
        return Promise.all(promises).then(outcome => {
            let [project, actions] = outcome;

            if (project) {
                project.actions = actions; // this ties this function to the projectBody function
                return support.projectBody(project)
            } else {
                return null;
            }
        });
    }

    return null;

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

function getActions(project_id) {
    return db('actions')
    .where('project_id', project_id)
}