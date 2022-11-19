import express from 'express';
var router = express.Router();

/* GET hospitals */
router.get('/', function(req, res) {
    res.json({test: "test"});
});

//module.exports = router;
export default router;