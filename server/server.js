const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([
    {name: 'Jon', age: 53},
    {name: 'Kim', age: 57},
    {name: 'Haley', age: 21}
  ]);
});

app.listen(3000, () => {
  console.log('Listening port 3000...');
});

module.exports.app = app;