var R = require('ramda');
var Pair = {
  // a -> b -> Pair a b
  make: R.pair,
  // Pair a b -> a
  first: R.nth(0),
  // Pair a b -> b
  second: R.nth(1),
  // (a -> c) -> Pair a b -> Pair c b
  mapFirst: R.curry(function(fn, pair) {
    return Pair.make(fn(Pair.first(pair)), Pair.second(pair));
  }),
  // (b -> c) -> Pair a b -> Pair a c
  mapSecond: R.curry(function(fn, pair) {
    return Pair.make(Pair.first(pair), fn(Pair.second(pair)));
  }),
  // Pair a b -> Pair b a
  swap: function(pair) {
    return Pair.make(Pair.second(pair), Pair.first(pair));
  },
};

var Pairs = {
  // Map a b -> [Pair a b]
  fromMap: R.toPairs,
  // [Pair a b] -> Map a b
  toMap: function(pairs) {
    return R.reduce(function(m, pair) {
      m[Pair.first(pair)] = Pair.second(pair);
      return m;
    }, {}, pairs);
  },
};

exports.Pair = Pair;
exports.Pairs = Pairs;
