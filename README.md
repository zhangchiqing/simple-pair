# simple-pairs
simple pair implementation in Javascript

# Usage

```javascript
// [User]
var users = [
  { id: 1, name: 'userA' },
  { id: 2, name: 'userB' },
  { id: 3, name: 'userC' },
];

// [Photo]
var photos = [
  { userId: 1, photo: ' :) ' },
  { userId: 3, photo: ' :( ' },
  { userId: 2, photo: ' :-) ' },
  { userId: 2, photo: ' :-/ ' },
];

var Pair = require('simple-pair').Pair;
var Pairs = require('simple-pair').Pairs;
var R = require('ramda');

// Photo -> User? -> PhotoWithUser
var makePhotoWithUserName = function(photo, user) {
  return {
    userId: photo.userId,
    username: user ? user.name : null,
    photo: photo.photo,
  };
};

// [{ userId: UserId, photo: String, name: String }]
var photosWithMap = indexer(
  R.prop('id'),
  R.prop('id'),
  users,
  photos,
  makePhotoWithUserName
);

var indexer = function(
  idIndex,
  photoIndex,
  users,
  photos,
  makePhotoWithUserName
) {
  // Map UserId User
  var indexMap = R.indexOf(idIndex, users);
  return R.map(function(p) {
    // UserId
    var userId = photoIndex.userId;
    // User?
    var user = indexMap[userId];
    return makePhotoWithUserName(p, user);
  }, photos);
};
```

# API
```haskell
Pair.make :: a -> b -> Pair a b
Pair.first :: Pair a b -> a
Pair.second :: Pair a b -> b
Pair.mapFirst :: (a -> c) -> Pair a b -> Pair c b
Pair.mapSecond :: (b -> c) -> Pair a b -> Pair a c
Pair.swap :: Pair a b -> Pair b a

Pairs.fromMap :: Map a b -> [Pair a b]
Pairs.toMap :: [Pair a b] -> Map a b
```
