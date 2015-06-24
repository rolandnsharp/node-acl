var test = require('tape');
var allowed = require('../lib/allow');

test('admin shoud have acces to admin, author and guest', function(t) {
  t.plan(3);
  t.equal(allowed('admin', 'admin'), true);
  t.equal(allowed('admin', 'author'), true);
  t.equal(allowed('admin', 'guest'), true);
});

test('author shoud have acces to admin, author and guest', function(t) {
  t.plan(3);
  t.equal(allowed('author', 'admin'), false);
  t.equal(allowed('author', 'author'), true);
  t.equal(allowed('author', 'guest'), true);
});
