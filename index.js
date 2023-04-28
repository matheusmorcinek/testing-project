const express = require('express')
const app = express()
const users = require('./users_db.json');

const apiBasePath = '/api/v1';

app.get(`${apiBasePath}/users/:userId`, function (req, res) {

  // Validate userId parameter
  const userId = Number(req.params.userId);

  // Check if number is NaN or not a finite number, or if it's negative
  if (isNaN(userId) || !isFinite(userId) || userId < 0) {
    return res.status(400).send({ error: 'Invalid userId parameter' });
  }

  // Check if number has more than 5 digits
  if (userId.toString().length > 5) {
    return res.status(400).send({ error: 'Invalid userId parameter' });
  }

  // Check if user exists
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).send({ error: 'User not found' });
  }

  // Send response
  res.send(user);
});

// // Validate request headers
// app.use(function (req, res, next) {
//   const authToken = req.headers.authorization;
//   if (!authToken || authToken !== 'my-secret-token') {
//     return res.status(401).send({ error: 'Unauthorized' });
//   }
//   next();
// });

// Handle errors
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({ error: 'Internal server error' });
});

app.listen(3000);