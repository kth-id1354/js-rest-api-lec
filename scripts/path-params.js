const express = require('express');
const app = express();
const port = 8001;

app.get('/user/:id', (req, res) => res.send('The id is ' + req.params.id));

app.listen(port, () => console.log(`Server running at port ${port}!`));
