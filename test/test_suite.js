test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
});

test("Child name is rendered", function() {
  expect(1);

  visit("/").then(function() {
    ok(find("div:contains(Pebbles)").length);
  });
});