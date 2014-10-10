(function () {
  // Hueristics.
  var isNode = typeof process !== 'undefined' && process.versions && !!process.versions.node;
  var isBrowser = typeof window !== 'undefined';
  var isModule = typeof module !== 'undefined' && !!module.exports;
  var isNodeWebkit = false; //taken from http://videlais.com/2014/08/23/lessons-learned-from-detecting-node-webkit/
	
  //Is this Node.js? 
  if(isNode) {
    //If so, test for Node-Webkit
    try {
      isNodeWebkit = (typeof require('nw.gui') !== "undefined");
    } catch(e) {
      isNodeWebkit = false;
    }
  }

  // Export.
  var detect = (isModule ? exports : (this.detect = {}));
  detect.isNode = isNode;
  detect.isBrowser = isBrowser;
  detect.isModule = isModule;
  detect.isNodeWebkit = isNodeWebkit;
}).call(this);
