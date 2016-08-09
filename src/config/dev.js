'use strict';

import baseConfig from './base';

let config = {
	appEnv: 'dev', // feel free to remove the appEnv property here
	api: 'http://localhost:20001/api'
};

export default Object.freeze(Object.assign({}, baseConfig, config));