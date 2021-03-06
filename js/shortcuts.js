var shortcuts = {
  handleEnter: function(e) {
    if (e.keyCode == 13) {
      $( ".button" ).click();
    }
  },

  unbindAll: function() {
    key.unbind('⌘+d');
    key.unbind('ctrl+⌘+g');
    key.unbind('⌘+l');
    key.unbind('ctrl+l');
    key.unbind('ctrl+⌘+up');
    key.unbind('ctrl+⌘+down');
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
      var clicked = $( ".clicked" );
      clicked.not( ".jailed" ).removeClass( "sleepy surly" );
      clicked.not( ".jailed" ).not( ".savage" ).addClass( "shortcut" );
    });

    document.addEventListener('keydown', this.handleEnter, false);

    key('left', function() {
      var clicked = $( ".clicked" );
      var prev = clicked.prev().first();
      var prevRow = clicked.parent().prev().children();
      if (prev.length > 0 && 
        prev.not( ".surly" ).length > 0 &&
        prev.not( ".savage" ).length > 0 && 
        prev.not( ".clicked" ).length > 0) {
        prev.addClass( "clicked" );
        clicked.removeClass( "clicked" );
      } else if (prevRow.length > 0 && 
        prevRow.last().not( ".surly" ).length > 0 && 
        prevRow.last().not( ".savage" ).length > 0) {
        prevRow.last().addClass( "clicked" );
        clicked.removeClass( "clicked" );
      }
      return false;
    });

    key('right', function() {
      var clicked = $( ".clicked" );
      if (clicked.length === 0) {
        $( ".sloth" ).first().not( ".surly ").not( ".savage" ).addClass( "clicked" );
        return false;
      }

      var next = clicked.next().last();
      var nextRow = clicked.parent().next().children();
      if (next.length > 0 && 
        next.not( ".surly" ).length > 0 &&
        next.not( ".savage" ).length > 0 && 
        next.not( ".clicked" ).length > 0) {
        next.addClass( "clicked" );
        clicked.removeClass( "clicked" );
      } else if (nextRow.length > 0 && 
        nextRow.first().not( ".surly" ).length > 0 && 
        nextRow.first().not( ".savage" ).length > 0) {
        nextRow.first().addClass( "clicked" );
        clicked.removeClass( "clicked" );
      }
      return false;
    });

    key('escape', function() {
      var clicked = $( ".clicked" );
      if (clicked.length > 1) {
        $( ".clicked:not(:last)" ).removeClass( "clicked" );
      }
    });
  },

  loadLvl2: function() {
    key('⌘+d', function() {
      // console.log("You pressed select word!");
      var clicked = $( ".clicked" );
      if (clicked.length > 0) {
        var selectedClasses = $( this.returnSelectedClasses() );
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
      // console.log("You pressed select all words!");

      if ($( ".clicked ").length > 0) {
        var selectedClasses = $( this.returnSelectedClasses() );
        selectedClasses.not( ".clicked" ).addClass( "clicked" )
      }
      return false;
    }.bind(this));
  },

  loadLvl5: function() {
    key('⌘+l, ctrl+l', function() {
      // console.log("You pressed select line!");

      var clicked = $( ".clicked" );
      if (clicked.length < clicked.siblings().length) {
        clicked.siblings().addClass( "clicked" );
      } else {
        clicked.parent().next().children().addClass( "clicked" );
      }
      return false;
    });
  },

  loadLvl6: function() {
    key('⌘+/', function() {
      // console.log("You pressed comment!");
      var clicked = $( ".clicked" );
      if (clicked.length === $( ".clicked.jailed" ).length) {
        clicked.removeClass( "jailed" );
        clicked.addClass( "animated" );
      } else {
        clicked.addClass( "jailed" );
        clicked.removeClass( "animated" );
      }
      return false;
    });
  },

  loadLvl7: function() {
    key('ctrl+⌘+up', function() {
      // console.log("You pressed swap up!");
      var clicked = $( ".clicked" );
      var row = clicked.parent();
      if (row.prev().first().length > 0 && 
        $.inArray(row.prev().first()[0], row) === -1) {
        row.prev().first().before(row.detach());
      }
      return false;    
    });

    key('ctrl+⌘+down', function() {
      // console.log("You pressed swap down!");
      var clicked = $( ".clicked" );
      var row = clicked.parent();
      // debugger;
      if (row.next().last().length > 0 &&
        $.inArray(row.next().last()[0], row) === -1) {
        row.next().last().after(row.detach());
      }
      return false;
    });
  },
    

  tempLoadRest: function() {

    key('⇧+⌘+d', function() {
      // console.log("You pressed duplicate line!");
      var clicked = $( ".clicked" );
      var row = clicked.parent();
      row.after(row.clone());
      return false;
    });


  }
};

module.exports = shortcuts;