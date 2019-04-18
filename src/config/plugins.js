'use strict';

const internals = {};
const options = {
    ops: {
        interval: 1000
    },
    reporters: {
        myConsoleReporter: [
            {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{ log: '*', response: '*' }]
            },
            {
                module: 'good-console'
            },
            'stdout'
        ]
    }
};
internals.plugins = () => {
    return [
        {
            plugin: require('hapi-geo-locate'),
            options: {
                enabledByDefault: true
            }
        },
        {
            plugin: require('good'),
            options,
        }
    ];
}
module.exports.get = internals.plugins;