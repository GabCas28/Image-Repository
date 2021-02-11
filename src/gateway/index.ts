const config = require('../common/config/env.config');
const express = require('express');
const gateway = express();
const bodyParser = require('body-parser');
const GatewayRouter = require('./routes/routes.config.ts');
const morgan = require("morgan")
const myLogger = require("../common/log/winston")

gateway.use(morgan("combined", { "stream": myLogger.stream }));

gateway.use(bodyParser.json());

gateway.use(function (req: any, res: any, next: any) {
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

gateway.set('port', config.port);
GatewayRouter.routesConfig(gateway, config);

gateway.get('*', function (req: any, res: any) {
	throw new Error('error thrown navigating to');
});

gateway.use(myLogger.emitError);

gateway.listen(config.port, function () {
	console.log('app listening at port %s', config.port);
});

// app.use(errorLogger);
export { gateway }