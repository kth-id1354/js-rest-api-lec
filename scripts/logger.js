const express = require('express');
const app = express();
const port = 8001;

app.use((req, res, next) => {
  const now = new Date();
  console.log(
      now.toLocaleDateString() +
      ' ' +
      now.toLocaleTimeString() +
      ': ' +
      req.method +
      ' ' +
      req.originalUrl +
      ' from ' +
      req.ip
  );
  next();
});

app.get('/', (req, res) => res.send('Server is up'));

app.listen(port, () => console.log(`Server running at port ${port}!`));
