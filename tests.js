var simplePair = require('./index');
var Pair = simplePair.Pair;
var Pairs = simplePair.Pairs;
var assert = require('assert');

describe('Pair', function() {
  it('first-make law', function() {
    assert(Pair.first(Pair.make(1, 2)), 1);
  });

  it('second-make law', function() {
    assert(Pair.second(Pair.make(1, 2)), 2);
  });

  it('mapSecond', function() {
    var add2 = function(a) {
      return a + 2;
    };
    assert(Pair.mapSecond(add2, Pair.make(1, 2)), 4);
  });
});

describe('Pairs', function() {
  it('toMap fromMap law', function() {
    var m = { a: 1, b: 2 };
    assert.deepEqual(Pairs.toMap(Pairs.fromMap(m)), m);
  });

  it('toMap fromMap law (empty)', function() {
    var m = { };
    assert.deepEqual(Pairs.toMap(Pairs.fromMap(m)), m);
  });
});
