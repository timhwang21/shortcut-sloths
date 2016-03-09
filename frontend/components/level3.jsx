var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');

var Sloth = require('./sloth');
var ShortcutSloth = require('./shortcutSloth');

var Level3 = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    checkWin: React.PropTypes.func
  },

  componentDidMount: function() {
    Shortcuts.unbindAll();
    Shortcuts.loadLvl2();
    Shortcuts.loadLvl3();
    document.addEventListener('keydown', this.handleEnter, false);
  },

  componentWillUnmount: function() {
    Shortcuts.unbindAll();
    document.removeEventListener('keydown', this.handleEnter, false)
  },

  handleEnter: function(e) {
    if (e.keyCode == 13) {
      $( ".button" ).click();
    }
  },


  render: function() {
    return (
      <div className="level">
        <section className="sidebar">
          <h1>SHORTCUT SLOTHS</h1>
          <h2>Level 3</h2>
          <p>Nice! But we can go even faster! Is it possible to <em>select all sloths of the same type?</em></p>
          <p><em>Select a sloth</em>, then press <em>'ctrl + command + G'</em>!</p>
          <p>(You can also use the <em>arrow keys</em> to move <em>left</em> and <em>right</em>!)</p>

          <div className="button-row">
            <button 
              className="button" 
              onClick={this.context.checkWin.bind(null, 4)}>
              Next
            </button>
          </div>        
        </section>

        <section className="board" style={{alignItems: "center"}}>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row">
            <Sloth />
            <Sloth />
            <ShortcutSloth />
            <Sloth />
            <Sloth />
            <ShortcutSloth />
          </div>
          <div className="row">
            <ShortcutSloth />
            <Sloth />
            <Sloth />
            <ShortcutSloth />
            <Sloth />
            <Sloth />
          </div>
        </section>
      </div>
    );
  }
});

module.exports = Level3;