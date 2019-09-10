const express = require('express');
const app = express();
const port = 8001;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/msg', (req, res) => res.send('The body is "' + req.body.msg + '"'));

app.listen(port, () => console.log(`Server running at port ${port}!`));
