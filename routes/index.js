import express from 'express';
import request from 'request';
var router = express.Router();

/* POST category */
router.get('/', function(req, res) {
    var newurl = 'http://localhost:8081';
    request(newurl).pipe(res);
});

//module.exports = router;
export default router;