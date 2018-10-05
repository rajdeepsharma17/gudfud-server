const express = require('express');
const catalog = require('../../static/catalog');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    ok: true,
    result: catalog,
  });
});

module.exports = router;
