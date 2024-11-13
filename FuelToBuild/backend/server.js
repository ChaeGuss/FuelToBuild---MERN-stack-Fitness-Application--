const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the Fitness Website API');
});

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

mongoose
  .connect(DB_URI)
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch(error => console.error(error));
