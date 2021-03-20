const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb://localhost:27017/psy', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected')
});

// Routes
const auth = require('./routes/auth');

//Mount routes
app.use('/api/v1/auth', auth);

const port = 5050;
const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});

// Handle unhandled promise rejection
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
