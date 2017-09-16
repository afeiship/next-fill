var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-fill');

describe('next/fill', function () {


  var array = [1, 2, 3];
  nx.fill(array, 'a');

  var rs2=nx.fill([4, 6, 8], '*', 1, 2);


  it('nx.fill will not change the length', function () {
    assert.equal(array.length, 3);
  });


  it('nx.fill a-a-a', function () {
    assert.equal(array.join('-'), 'a-a-a');
  });

  it("nx.fill nx.fill([4, 6, 8], '*', 1, 2)", function () {
    assert.deepEqual(nx.fill([4, 6, 8],'*', 1, 2), [4, '*', 8]);
  });

});
