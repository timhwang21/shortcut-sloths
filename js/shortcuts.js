var shortcuts = {
  unbindAll: function() {
    key.unbind('⌘+d');
    key.unbind('ctrl+⌘+g');
    key.unbind('⌘+j');
    key.unbind('⌘+l');
    key.unbind('⇧+⌘+l');
    key.unbind('ctrl+⌘+up');
    key.unbind('ctrl+⌘+down');
    key.unbind('⌘+j');
    key.unbind('⌘+/');
  },

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
  },

  loadLvl2: function() {
    key('⌘+d', function() {
      console.log("You pressed select word!");
      
      if ($( ".clicked ").length > 0) {
        var selectedClasses = $( this.returnSelectedClasses() );
        var clicked = $( ".clicked" );
        var sameElements = clicked.last().nextAll(this.returnSelectedClasses()).not( ".clicked ");
        var startIdx = selectedClasses.index(clicked.last()) + 1; 

        if (startIdx < selectedClasses.length) {
          selectedClasses.slice(startIdx).first().addClass( "clicked" )
        } else {
          selectedClasses.not( ".clicked" ).first().addClass( "clicked" )
        }
      }
      return false;
    }.bind(this));
  },

  loadLvl3: function() {
    key('ctrl+⌘+g', function() {
      console.log("You pressed select all words!");

      if ($( ".clicked ").length > 0) {
        var selectedClasses = $( this.returnSelectedClasses() );
        selectedClasses.not( ".clicked" ).addClass( "clicked" )
      }
      return false;
    }.bind(this));
  },

  loadLvl4: function() {
    key('⌘+l', function() {
      console.log("You pressed select line!");

      var clicked = $( ".clicked" );
      // debugger;
      if (clicked.length < clicked.siblings().length) {
        clicked.siblings().addClass( "clicked" );
      } else {
        clicked.parent().next().children().addClass( "clicked" );
      }
      return false;
    }.bind(this));
  },
    

  tempLoadRest: function() {


    key('⌘+j', function() {
      console.log("You pressed join line!");
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
  }
};

module.exports = shortcuts;