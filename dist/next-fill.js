(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.fill = function (inArray, inValue, inStart, inEnd) {
    var length = inArray.length;
    var start = inStart == null ? 0 : (+inStart || 0);
    if (start < 0) {
      start = -start > length ? 0 : (length + start);
    }
    var end = (inEnd === undefined || inEnd > length) ? length : (+inEnd || 0);
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : (end >>> 0);
    start >>>= 0;

    while (start < length) {
      inArray[start++] = inValue;
    }
    return inArray;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.fill;
  }

}());
