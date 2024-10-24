const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app = express();
const port = process.env.port || 3000;

// Load enviroment variables from .env file
dotenv.config()

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Atlas connected!'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
