const Login = require('../routes/Login/endpoints');
const internals = {};
const next = require('next');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const {
    pathWrapper,
    defaultHandlerWrapper,
    nextHandlerWrapper
} = require('./next-wrapper')
// Static routes for next
const nextRoutes = [
    {
        method: 'GET',
        path: '/about',
        handler: pathWrapper(app, '/about')
    },
    {
        method: 'GET',
        path: '/_next/{p*}' /* next specific routes */,
        handler: nextHandlerWrapper(app)
    },
    {
        method: 'GET',
        path: '/static/{p*}' /* use next to handle static files */,
        handler: nextHandlerWrapper(app)
    },
    {
        method: 'GET',
        path: '/{p*}' /* catch all route */,
        handler: defaultHandlerWrapper(app)
    }
]

internals.routes = nextRoutes.concat(Login.endpoints);
internals.init = function (server) {
    app.prepare().then(async () => {
        server.route(internals.routes);
    })
};

module.exports = internals;