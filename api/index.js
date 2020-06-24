import express from 'express';
import data from '../src/devdata.json';
const router = express.Router();

router.get('/contests', (req, res) => {
  res.send({ contests: data.contests });
});

export default router;
