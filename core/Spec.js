define(function(require, exports, module) {
    var EventHandler = require('famous/core/EventHandler');

    function Spec(){
        this.spec = null;

        this._eventInput = new EventHandler();
        this._eventOutput = new EventHandler();
        EventHandler.setInputHandler(this, this._eventInput);
        EventHandler.setOutputHandler(this, this._eventOutput);

        this._eventInput.on('start', function(spec){
            this.spec = spec;
            this.emit('register');
        }.bind(this));

        this._eventInput.on('update', function(spec){
            this.spec = spec;
        }.bind(this));

        this._eventInput.on('end', function(spec){
            this.spec = spec;
            this.emit('unregister');
        }.bind(this));
    }

    Spec.prototype.get = function(){
        return this.spec;
    };

    module.exports = Spec;
});
