'use strict';

const internals = {};

const crypto = require('crypto');
const User = require('../../database/models/User');

internals.login = async (request, h) => {
    const secret = 'alfred';
    const hash = crypto.createHmac('sha256', secret).update('vanskins').digest('hex');
    const data = {
        email: "vansabacajan@gmail.com",
        username: "vanalfred",
        password: hash,
    }
    const user = new User(data);
    user.save(function(err, result) {
        if (err) console.log('there something wrong');
        if (result) {
            console.log('success')
        }
    })

    return { hash }
}

module.exports = internals;