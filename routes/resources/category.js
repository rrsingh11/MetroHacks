import express from 'express';
import categories from '../../data/resources/category.js';
var router = express.Router();

/* POST category */
router.post('/', async function(req, res) {
    res.json(await categories.create(req.body.name));
});

/* GET categories */
router.get('/', async function(req, res) {
    res.json(await categories.getAll());
});

/* GET category by id */
router.get('/id/:categoryId', async function(req, res) {
    res.json(await categories.getById(req.params.categoryId));
});

/* DELETE category by id */
router.delete('/id/:categoryId', async function(req, res) {
    res.json(await categories.remove(req.params.categoryId));
});

/* PUT category */
router.put('/id/:categoryId', async function(req, res) {
    res.json(await categories.rename(req.params.categoryId, req.body.name));
});

//module.exports = router;
export default router;