import 'babel-polyfill';

const testsContext = require.context('./src', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);