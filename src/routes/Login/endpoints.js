'use strict';

const internals = {};
const Joi = require('joi');
const handlers = require('./handlers');

internals.endpoints = [
    {
        method: 'GET',
        path: '/api/login',
        options: {
            cors: true,
        },
        handler: handlers.login,
    },
];

module.exports = internals;
