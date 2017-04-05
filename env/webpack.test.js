const commonConfig = require('./webpack.common');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
    module: {
        rules: [
            {
                test: /isIterable/,
                use: [{
                    loader: 'imports?Symbol=>false'
                }]
            }
        ]
    }
});
