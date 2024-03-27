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
        // "gb-superset/global": ['./src/global.js'],
        "gb-superset/controls-style": ['./src/gb-superset/assets/styles/index.scss'],
        // "gutenkit/frontend-common": ['./src/styles/common.scss'],
        // "modules/icon-pack/index": ['./src/modules/icon-pack/index.js'],
    },
}
