'use strict';

const Hapi = require('hapi');
const Routes = require('./routes');

const internals = {};
const connection = { port: 5000, host: 'localhost' };

internals.server = Hapi.server(connection);
internals.server.register([]);

Routes.init(internals.server);

module.exports = internals.server;