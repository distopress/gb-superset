const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
module.exports = {
    ...defaultConfig,
    ...{
        resolve: {
            alias: {
                '@blocks': path.resolve(__dirname, 'src/blocks/'),
                '@gb-superset': path.resolve(__dirname, 'src/gb-superset/'),
                'public': path.resolve(__dirname, 'public/')
            },
        }
    },
    entry: {
        ...defaultConfig.entry(),
        "my/global": ['./src/global.js'],
        // "gutenkit/frontend-common": ['./src/styles/common.scss'],
        // "modules/icon-pack/index": ['./src/modules/icon-pack/index.js'],
    },
}
