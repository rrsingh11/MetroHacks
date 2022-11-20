import express from 'express';
import request from 'request';
var router = express.Router();

/* POST category */
var proxy = new httpProxy.RoutingProxy();
router.all("/*", function(req, res) {
    console.log("old request url " + req.url)
    req.url = '/' + req.url.split('/').slice(2).join('/'); // remove the '/api' part
    console.log("new request url " + req.url)
    proxy.proxyRequest(req, res, {
        host: "localhost",
        port: 8081
    });
});
//module.exports = router;
export default router;