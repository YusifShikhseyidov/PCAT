const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const photo = {
    id: 1,
    name: 'City photo',
    desc: 'Realistic Photos',
  };
  res.status(202).send(photo);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
