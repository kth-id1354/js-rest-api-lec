const express = require('express');
const app = express();
const port = 8001;

app.get('/', (req, res) => res.send('Server is up'));

app.listen(port, () => console.log(`Server running at port ${port}!`));
