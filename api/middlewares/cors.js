'use strict';

module.exports = function (req, res, next) {
   
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:2016');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization,Accept-Language');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
    
};