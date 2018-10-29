aemsync-webpack-plugin
=======

### Description

Webpack plugin used for uploading files to Adobe AEM. Updated for Adobe 6.4. It will upload files after manual change or webpack build finish.

For more information about AEMSync visit: https://github.com/gavoja/aemsync

### Installation

```
npm install @pjbrof/aemsync-webpack-plugin
```

### Usage

JavaScript
```
    var AemSyncPlugin = require('@pjbrof/aemsync-webpack-plugin');

    plugins: [
        new AemSyncPlugin({
            targets: [
                'http://admin:admin@localhost:4502',
                'http://admin:admin@localhost:4503'
            ],
            workingDir: './',
            exclude: '/node_modules/',
            interval: 300 //ms
        })
    ],
```

AEM Sync will be initialized only for webpack watch mode

```
webpack --watch 

```