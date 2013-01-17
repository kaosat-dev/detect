(function () {
  // Hueristics.
  var isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
  var isBrowser = typeof window !== 'undefined';
  var isModule = typeof module !== 'undefined' && module.exports;

  // Export.
  var exports = (isModule || (this.detect = {}));
  exports.isNode = isNode;
  exports.isBrowser = isBrowser;
  exports.isModule = isModule;
}).call(this);