// Importing the required modules
const express = require('express');
const helmet = require('helmet');

// Importing the router files 
const actionRouter = require('../components/actions/action-router.js');
const projectRouter = require('../components/projects/project-router.js');

// Linking the server to the express module, creating server constant variable

const server = express();

// Making the server use our imports

server.use(helmet());
server.use(express.json());

// Making our routes for the server

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

// Making sure everything works initially (will require a comment-out of above routes)

server.get('/', (req, res) => {
    res.status(200).json({message: "Server is up and running!"})
})

// Kicking this thing out into the real world

module.exports = server;
