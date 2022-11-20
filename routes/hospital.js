import express from 'express';
import hospitals from '../data/hospital.js';
var router = express.Router();

/* POST hospital */
router.post('/', async function(req, res) {
    res.json(await hospitals.create(req.body.name));
});

/* GET hospitals */
router.get('/', async function(req, res) {
   res.json(await hospitals.getAll());
});

/* GET hospital by id */
router.get('/id/:hospitalId', async function(req, res) {
    res.json(await hospitals.getById(req.params.hospitalId));
});

/* DELETE hospital by id */
router.delete('/id/:hospitalId', async function(req, res) {
    res.json(await hospitals.remove(req.params.hospitalId));
});

/* PUT hospital */
router.put('/id/:hospitalId', async function(req, res) {
    res.json(await hospitals.rename(req.params.hospitalId, req.body.name));
});

//module.exports = router;
export default router;