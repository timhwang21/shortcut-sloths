var shortcuts = {
  loadHotKeys: function() {
    key('space', function() {
      $( ".clicked" ).toggleClass( "sleepy shortcut" );
      return false;
    });

    key('⌘+d', function() {
      // Select word
      if ($( ".clicked ").length > 0) {
        var selected = $( ".clicked" ).last().attr( "class" ).split(" ");
        var index = selected.indexOf("clicked");
        if (index > -1) {
          selected.splice(index, 1);
        }
        selected = selected.map(klass=>"." + klass).join("");

        var sameElements = $( ".clicked" ).
            last().
            nextAll(selected).not( ".clicked" );
        // debugger;
        if ( sameElements.length > 0) {
          sameElements.
            first().
            addClass( "clicked" )
        } else {
          $( selected ).not( ".clicked" ).
            first().
            addClass( "clicked" )
        }
      }
      // debugger;

      return false;
      // if selected === undefined, do nothing
      // if selected is x, find next element of x
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
  }
};

module.exports = shortcuts;