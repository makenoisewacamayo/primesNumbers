import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';
import erastonenes from './erastonenes/algoritm';

dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT || 3000;
const app = express();

//parse application/json and look for raw text
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

// define a route handler for the default home page
app.get('/prime_number/:number', (req, res) => {
  const { number } = req.params;
  const n = Number(number);
  if (isNaN(n)) {
    res.status(500).json({ error: `${number} is not a number` });
  } else {
    const result = erastonenes(n);
    res.status(200).json(result);
  }
});

app.get('*', (req, res) => {
  res.status(500).json({ error: 'invalid path' });
});

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at http://localhost:${port}`);
});

// just for test
export default server;
