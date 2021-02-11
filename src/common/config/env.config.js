module.exports = {
	port: Number(process.env.SERVER_PORT) || 5000,
	appEndpoint: 'http://localhost:5000',
	apiEndpoint: 'http://localhost:5000',
	environment: 'dev',
	permissionLevels: {
		NORMAL_USER: 1,
		PAID_USER: 4,
		ADMIN: 2048
	},
	rabbit: {
		host: process.env.RABBITMQ_HOST || 'localhost',
		port: process.env.RABBITMQ_PORT || 5672
	},
	endpoints: {
		pictures: '/pictures',
	},
	proxies: {
		pictures: {
			domain: 'pictures',
			port: 3600
		},
	}
};