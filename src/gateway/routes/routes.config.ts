const proxy = require('express-http-proxy');
const mylogger = require('../../common/log/winston');

exports.routesConfig = (app:any, { endpoints, proxies }:any) => {
	const proxyAddress = ({ domain, port }:any) => domain + ':' + port;
	app.use(
		endpoints.pictures,
		proxy(proxyAddress(proxies.pictures), {
			proxyReqPathResolver: (req:any) => req.originalUrl
		})
	);
};
