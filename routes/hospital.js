import express from 'express';
import hospitals from '../data/hospital.js';
import availabilities from '../data/resources/availability.js';
var router = express.Router();

/* POST hospital */
router.post('/', async function(req, res) {
    res.json(await hospitals.create(req.body.name, req.body.latitude, req.body.longitude));
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
    res.json(await hospitals.rename(req.params.hospitalId, req.body.name, req.body.latitude, req.body.longitude));
});

/* GET resource availability */
router.get('/id/:hospitalId/resource/id/:resourceId', async function(req, res) {
    res.json(await availabilities.getByHospitalAndResource(req.params.hospitalId, req.params.resourceId));
});

/* POST resource availability */
router.post('/id/:hospitalId/resource/id/:resourceId', async function(req, res) {
    res.json(await availabilities.create(req.params.hospitalId, req.params.resourceId));
});

/* DELETE resource availability */
router.post('/id/:hospitalId/resource/id/:resourceId', async function(req, res) {
    res.json(await availabilities.removeByHospitalAndResource(req.params.hospitalId, req.params.resourceId));
});

/* PUT resource availability */
router.put('/id/:hospitalId/resource/id/:resourceId', async function(req, res) {
    res.json(await availabilities.update(req.params.hospitalId, req.params.resourceId, req.body.available, req.body.patients));
});

//module.exports = router;
export default router;