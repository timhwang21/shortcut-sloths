var shortcuts = {
  returnSelectedClasses: function() {
    var selectedClasses = $( ".clicked" ).last().attr( "class" ).split(" ");
    var index = selectedClasses.indexOf("clicked");
    if (index > -1) {
      selectedClasses.splice(index, 1);
    }
    return selectedClasses.map(klass=>"." + klass).join("");
  },

  loadHotKeys: function() {
    key('space', function() {
      $( ".clicked" ).toggleClass( "sleepy shortcut" );
    });

    // Select word
    key('⌘+d', function() {
      console.log("You pressed select word!");
      
      if ($( ".clicked ").length > 0) {
        var selectedClasses = this.returnSelectedClasses();
        var sameElements = $( ".clicked ").last().nextAll(this.returnSelectedClasses()).not( ".clicked ");

        if ( sameElements.length > 0) {
          sameElements.
            first().
            addClass( "clicked" )
        } else {
          $( selectedClasses ).not( ".clicked" ).
            first().
            addClass( "clicked" )
        }
      }
      return false;
    }.bind(this));

    key('ctrl+⌘+g', function() {
      console.log("You pressed select all words!");

      if ($( ".clicked ").length > 0) {
        var selectedClasses = this.returnSelectedClasses();
        $( selectedClasses ).not( ".clicked" ).
          addClass( "clicked" )
      }
      return false;
    }.bind(this));

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