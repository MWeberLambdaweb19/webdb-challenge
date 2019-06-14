// requiring the server api
const server = require('./api/server')

// setting the port 
const port = 5000;

// making the server listen on that port
server.listen(port, () => {
    console.log(`\n*API is running on http://localhost:${port} *\n`)
})
