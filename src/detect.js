(function () {
  // Hueristics.
  var isNode = typeof process !== 'undefined' && process.versions && !!process.versions.node;
  var isBrowser = typeof window !== 'undefined';
  var isModule = typeof module !== 'undefined' && !!module.exports;

  console.log(isNode, isBrowser, isModule);

  // Export.
  var exports = (isModule ? exports : (this.detect = {}));
  exports.isNode = isNode;
  exports.isBrowser = isBrowser;
  exports.isModule = isModule;
}).call(this);