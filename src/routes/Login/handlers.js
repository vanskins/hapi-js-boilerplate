'use strict';

const internals = {};

internals.login = async (request, h) => {
    const location = request.location // will be undefined

    return h.response(location)
}

module.exports = internals;