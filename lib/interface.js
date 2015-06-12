var Task = require('./tasks');

module.exports = {
    /**
     * mount to the name, if you don't provide a name, it will mount to root.
     * @param {string} path - raw fs-path
     * @param {string} name - name to mount
     * @param {function} [cb] - a callback function
     */
    mount: function ( path, name, cb ) {
        this._tasks.push({
            name: 'mount',
            run: Task.mount,
            params: [path, name]
        }, cb );
    },

    /**
     * unmount the name
     * @param {string} name - the mounting name
     */
    unmount: function ( name, cb ) {
        this._tasks.push({
            name: 'unmount',
            run: Task.unmount,
            params: [name],
        }, cb );
    },

    refresh: function ( url ) {
        var fspath = this._fspath(url);

        this._tasks.push({
            name: 'refresh',
            run: Task.refresh,
            params: [fspath],
        }, cb );
    },

    // TODO
    // import: function ( urlPattern ) {
    //     var fsPattern = this._fspath(urlPattern);
    //     if ( fsPattern === null ) {
    //         this.throw('normal', 'Invalid pattern %s', urlPattern);
    //     }

    //     this._tasks.push({
    //         name: 'import',
    //         run: Task.import,
    //         params: [fsPattern],
    //     }, cb );
    // },
};