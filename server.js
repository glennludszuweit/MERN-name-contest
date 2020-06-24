import express from 'express';
import apiRouter from './api';
const sassMiddleware = require('node-sass-middleware');
import path from 'path';

import config from './config';
const server = express();

server.use(
  sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
  })
);

server.set('view engine', 'pug');
server.set('views', path.join(__dirname, 'views'));

server.get('/', (req, res) => {
  res.render('index');
});

server.use('/api', apiRouter);
server.use(express.static(path.join(__dirname, 'public')));

server.listen(config.port, () => {
  console.info(`SERVER running on port ${config.port}`);
});
