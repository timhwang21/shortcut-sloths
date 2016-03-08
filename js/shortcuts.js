
key('⌘+d', function() {
  console.log("You pressed select word!");
  return false;
});

key('ctrl+⌘+g', function() {
  console.log("You pressed select all words!");
  return false;
});

key('⌘+l', function() {
  console.log("You pressed select line!");
  return false;
});

key('⇧+⌘+l', function() {
  console.log("You pressed split line!");
  return false;
});

key('ctrl+⌘+up', function() {
  console.log("You pressed swap up!");
  return false;
});

key('ctrl+⌘+down', function() {
  console.log("You pressed swap down!");
  return false;
});

key('⇧+⌘+d', function() {
  console.log("You pressed duplicate line!");
  return false;
});

key('⌘+j', function() {
  console.log("You pressed join line!");
  return false;
});

key('⌘+/', function() {
  console.log("You pressed comment!");
  return false;
});

key('⇧+⌘+.', function() {
  console.log("You pressed close open tag!");
  return false;
});







$(document).ready(function() {
  console.log("Script loaded!");
});
