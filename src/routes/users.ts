var express = require('express');
var router = express.Router();

/* GET users listing. */

let that = this;
router.get('/', function(req, res, next) {
  res.json({status: 'Yes, its working You can die in peace now!'});
});

export default router;
