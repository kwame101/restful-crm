import express from 'express';
import config from './config';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const server = express();

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect(config.mongodbUri, {
    useMongoClient: true
});

//bodyparser setup
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

routes(server);

//serve static files
server.use(express.static('public/assets'));

server.get('/', (req, res) =>
    res.send(`we are on port ${config.port}`)
);

server.listen(config.port, config.host, () => {
    console.info('Express listening on port', config.port);
});