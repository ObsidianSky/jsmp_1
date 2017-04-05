import 'babel-polyfill';

const testsContext = require.context('./src', true, /.js$/);
testsContext.keys().forEach(testsContext);