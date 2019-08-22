const express = require('express');

const PORT = process.env.PORT || 4000;
const db = require('./data/dbConfig.js');
const helmet = require('helmet');
const accountRouter = require('./data/accounts/accountRouter.js');
const server = express();

server.use(express.json());
server.use(helmet());
server.use('/api/accounts/', accountRouter);

server.get('/', (req, res) => {
    res.send('The server is running!');
});

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });


module.exports = server;