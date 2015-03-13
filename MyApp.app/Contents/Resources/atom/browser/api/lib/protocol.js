// Generated by CoffeeScript 1.7.1
(function() {
  var EventEmitter, RequestFileJob, RequestStringJob, app, protocol;

  app = require('app');

  if (!app.isReady()) {
    throw new Error('Can not initialize protocol module before app is ready');
  }

  protocol = process.atomBinding('protocol').protocol;

  EventEmitter = require('events').EventEmitter;

  protocol.__proto__ = EventEmitter.prototype;

  protocol.RequestStringJob = RequestStringJob = (function() {
    function RequestStringJob(_arg) {
      var charset, data, mimeType;
      mimeType = _arg.mimeType, charset = _arg.charset, data = _arg.data;
      if (typeof data !== 'string' && !data instanceof Buffer) {
        throw new TypeError('Data should be string or Buffer');
      }
      this.mimeType = mimeType != null ? mimeType : 'text/plain';
      this.charset = charset != null ? charset : 'UTF-8';
      this.data = String(data);
    }

    return RequestStringJob;

  })();

  protocol.RequestFileJob = RequestFileJob = (function() {
    function RequestFileJob(path) {
      this.path = path;
    }

    return RequestFileJob;

  })();

  module.exports = protocol;

}).call(this);
