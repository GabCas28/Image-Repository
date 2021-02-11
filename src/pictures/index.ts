const config = require('../common/config/env.config');
const express = require('express');
const pictures = express();
const bodyParser = require('body-parser');
const PicturesRouter = require('./routes.config.ts');
const morgan = require("morgan")
const myLogger = require("../common/log/winston")

pictures.use(morgan("combined", { "stream": myLogger.stream }));

pictures.use(bodyParser.json());

pictures.use(function (req: any, res: any, next: any) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
	res.header('Access-Control-Expose-Headers', 'Content-Length');
	res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
	if (req.method === 'OPTIONS') {
		return res.send(200);
	} else {
		myLogger.info("URL: %s", req.url);
		myLogger.info("BODY:", req.body);
		return next();
	}
});

PicturesRouter.routesConfig(pictures);

pictures.get('*', function (req: any, res: any) {
	throw new Error('error thrown navigating to');
});

pictures.use(function (err: any, req: any, res: any, next: any) {
	myLogger.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
	next(err)
})

pictures.listen(config.proxies.pictures.port, function () {
	console.log('app listening at port %s', config.proxies.pictures.port);
});

export { pictures }