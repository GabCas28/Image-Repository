const config = require('./common/config/env.config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PicturesRouter = require('./pictures/routes.config.ts');
const morgan = require("morgan")
const myLogger = require("./common/log/winston")

app.use(morgan("combined", { "stream": myLogger.stream }));

app.use(bodyParser.json());

app.use(function (req: any, res: any, next: any) {
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

PicturesRouter.routesConfig(app);

app.get('*', function(req: any, res: any) {
    throw new Error('error thrown navigating to');
});

app.use(function(err:any, req:any, res:any, next:any) {
	myLogger.error(`${req.method} - ${err.message}  - ${req.originalUrl} - ${req.ip}`);
	next(err)
  })  
  
app.listen(config.port, function () {
	console.log('app listening at port %s', config.port);
});

// app.use(errorLogger);
module.exports = app