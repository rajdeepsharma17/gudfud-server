const cors = require('cors');
const express = require('express');

const config = require('../../dev-config');
const CatalogRouter = require('../routes/catalog');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/catalog', CatalogRouter);
app.use(function(req, res) {
  res.status(404).json({
    ok: false,
    result: null,
  });
});

app.listen(config.server.port, err => {
  if (err) {
    console.error('Could not start server', err);
    return;
  }

  console.log(`Started gudfud-server at ${config.server.port}`);
});
