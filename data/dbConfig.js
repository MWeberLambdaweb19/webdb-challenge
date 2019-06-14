// Requiring knex so we can use its syntax
const knex = require('knex');

// Setting the configuration file
const knexConfig = require('../knexfile.js');

// Making a db constant to export and tie it all together (specifically to development object)

const db = knex(knexConfig.development);

// Sending the db out of the file

module.exports = db;