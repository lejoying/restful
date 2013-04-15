/**
 * Date: 2013.04.15
 * The url route mapping of the restful API web request.
 *
 * demo1:
 *  http://127.0.0.1:8061/api2/access/get
 *  http://127.0.0.1:8061/api2/access/reset?i=0
 *
 * demo2:
 *  http://127.0.0.1:8061/api2/redis/get
 *  http://127.0.0.1:8061/api2/redis/reset?i=0
 *
 */
var requestHandlers = require("./requestHandlers");

var routemap = {
    "get":{
        "/api2/access/:operation":requestHandlers.demo1,
        "/api2/redis/:operation":requestHandlers.demo2
    },
    "post":{
    },
    "put":{
    },
    "del":{
    }
};

module.exports = routemap;