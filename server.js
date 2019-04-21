'use strict';

const HapiServer = require('./src/config/hapi');
const Plugins = require('./src/config/plugins');
const init = async () => {
    require('./src/config/mongoDb');
    await HapiServer.register(Plugins.get());
    await HapiServer.start();
    console.log('Server running on %s', HapiServer.info.uri);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
init();