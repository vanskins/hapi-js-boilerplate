const Login = require('../routes/Login/endpoints');
const internals = {};

internals.routes = [].concat(Login.endpoints);

internals.init = function (server) {
    server.route(internals.routes);
};

module.exports = internals;