module.exports = {
	floca: {
		appName: 'Trader',
		entityName: 'Client'
	},
	server: {
		active: true,
		port: 3006
	},
	harcon: {
		bender: {
			enabled: true
		},
		FireBender: {
			defs: require('./bending')
		}
	},
	radiation: {
		rest: {
			harconrpcPath: '/Client'
		},
		websocket: {
			socketPath: '/Client'
		}
	}
}
