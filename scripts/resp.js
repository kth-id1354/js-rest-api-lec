const express = require('express');
const app = express();
const port = 8001;


// app.get('/', (req, res) => res.status(404).end());
// app.get('/', (req, res) => res.end());
// app.get('/', (req, res) => res.json({param1: 'abc123'}));

const propName = 'param1';
app.get('/', (req, res) => res.json({[propName]: 'abc123'}));


app.listen(port, () => console.log(`Server running at port ${port}!`));
