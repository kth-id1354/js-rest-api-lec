const express = require('express');
const app = express();
const port = 8001;

const msgApi = express.Router(); // eslint-disable-line new-cap
msgApi.get('/:id', (req, res) =>
  res.send('returning msg ' + req.params.id)
);
msgApi.delete('/:id', (req, res) =>
  res.send('deleted msg ' + req.params.id)
);

app.use('/msg', msgApi);

app.listen(port, () => console.log(`Server running at port ${port}!`));
