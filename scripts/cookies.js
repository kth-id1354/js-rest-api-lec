const express = require('express');
const app = express();
const port = 8001;

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
  res.cookie('myCookie', 'the cookie value');
  res.send('Cookie was set');
});

app.get('/show-cookies', (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies);
});

app.listen(port, () => console.log(`Server running at port ${port}!`));
