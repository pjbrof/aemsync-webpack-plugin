var aemsync = require('aemsync');

var initAemSyncWatcher = function(options){
    var targets = options.targets || 'http://admin:admin@localhost:4502';
    var interval = options.interval || 300;
    var exclude = options.exclude || '';
    var workingDir = options.workingDir || './';

    var pipeline = new aemsync.Pipeline(options);
    var watcher = new aemsync.Watcher();

    pipeline.start();
    
    options.callback = (localPath) => {
        pipeline.enqueue(localPath);
    }

    watcher.watch(options);
};

function AemSyncPlugin(options) {
    this.options = options;
}

AemSyncPlugin.prototype.apply = function () {
    if(process.argv.indexOf('--watch') != -1){
        initAemSyncWatcher(this.options);
    }
};

module.exports = AemSyncPlugin;