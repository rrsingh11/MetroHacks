import express from 'express';
import resources from '../../data/resources/resource.js';
var router = express.Router();

/* POST category */
router.post('/', async function(req, res) {
    res.json(await resources.create(req.body.name, req.body.unit, req.body.categoryId));
});

/* GET categories */
router.get('/', async function(req, res) {
    res.json(await resources.getAll());
});

/* GET category by id */
router.get('/id/:resourceId', async function(req, res) {
    res.json(await resources.getById(req.params.resourceId));
});

/* DELETE category by id */
router.delete('/id/:resourceId', async function(req, res) {
    res.json(await resources.remove(req.params.resourceId));
});

/* PUT category */
router.put('/id/:resourceId', async function(req, res) {
    res.json(await resources.rename(req.params.resourceId, req.body.name, req.body.unit));
});

//module.exports = router;
export default router;