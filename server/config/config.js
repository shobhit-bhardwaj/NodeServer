var config = {
	environment : process.env.NODE_ENV || 'development',	//'development',

	development : {
		NODE_PATH : '',

		serverConfig : {
			port : 8896
		},

		mongoConfig : {
			urlString : 'mongodb://localhost/PokerNS'
		},

		logConfig : {
			log_file_path : '../../log/poker_node_log.log',
			file_level : 'info',
			file_max_size : 5242880,	//5MB
			file_max_files : 5,

			console_level : 'debug'
		}
	},
	production : {
		NODE_PATH : '',

		serverConfig : {
			port : 5000
		},

		mongoConfig : {
			urlString : 'mongodb://localhost/PokerNS'
		},

		logConfig : {
			log_file_path : '../../log/poker_node_log.log',
			file_level : 'info',
			file_max_size : 5242880,	//5MB
			file_max_files : 5,

			console_level : 'debug'
		}
	}
}

var configuration = {};
if(config.environment === 'development') {
	configuration = config['development'];
	global.NODE_PATH = configuration.NODE_PATH;
} else if(config.environment === 'production') {
	configuration = config['production'];
	global.NODE_PATH = configuration.NODE_PATH;
}
module.exports = configuration;