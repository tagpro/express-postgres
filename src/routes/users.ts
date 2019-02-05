var express = require('express');
var router = express.Router();
import {User} from '../models/models';

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy'}]});
});

export default router;
