import express from 'express';

import config from './config';
const server = express();

server.use(express.static('public'));

server.listen(config.port, () => {
  console.info(`SERVER running on port ${config.port}`);
});
