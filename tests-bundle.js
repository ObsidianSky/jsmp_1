import 'babel-polyfill';

const context = require.context('./src', true, /\.js$/);
context.keys().forEach(context);