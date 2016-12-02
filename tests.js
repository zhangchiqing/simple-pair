var simplePair = require('./index');
var Pair = simplePair.Pair;
var Pairs = simplePair.Pairs;
var assert = require('assert');

describe('Pair', function() {
  it('first-make law', function() {
    assert.equal(Pair.first(Pair.make(1, 2)), 1);
  });

  it('second-make law', function() {
    assert.equal(Pair.second(Pair.make(1, 2)), 2);
  });

  var add2 = function(a) {
    return a + 2;
  };

  it('mapFirst', function() {
    var mapped = Pair.mapFirst(add2, Pair.make(1, 2));
    assert.equal(Pair.first(mapped), 3);
    assert.equal(Pair.second(mapped), 2);
  });

  it('mapSecond', function() {
    var mapped = Pair.mapSecond(add2, Pair.make(1, 2));
    assert.equal(Pair.first(mapped), 1);
    assert.equal(Pair.second(mapped), 4);
  });

  it('swap', function() {
    assert.deepEqual(Pair.swap(Pair.make(1, 2)), Pair.make(2, 1));
    assert.deepEqual(Pair.swap(Pair.swap(Pair.make(1, 2))), Pair.make(1, 2));
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
