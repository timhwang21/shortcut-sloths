var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');


var Sloth = require('./sloth');
var ShortcutSloth = require('./shortcutSloth');
var SavageSloth = require('./savageSloth');

var Level6 = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    checkWin: React.PropTypes.func
  },

  componentDidMount: function() {
    Shortcuts.unbindAll();
    Shortcuts.loadLvl2();
    Shortcuts.loadLvl3();
    Shortcuts.loadLvl5();
    Shortcuts.loadLvl6();
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
          <h2>Level 6</h2>
          <p>Oh no! These sloths are <em>REALLY</em> angry!</p>
          <p>Savage sloths <em>cannot be reasoned with</em>! There is only one way to deal with them...</p>
          <h3>JAIL THEM.</h3>
          <p>Use <em>'command-/'</em> to <em>throw a selected sloth in jail</em>!</p>
          <p>(How did you <em>select unselectable sloths</em> before?)</p>
          <p>Make sure to <em>free any innocent sloths</em> before moving on!</p>

          <div className="button-row">
            <button 
              className="button" 
              onClick={this.context.checkWin.bind(null, "end")}>
              Next
            </button>
          </div>
        </section>

        <section className="board" style={{alignItems: "center"}}>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row">
            <Sloth />
            <ShortcutSloth />
            <Sloth />
            <ShortcutSloth />
            <Sloth />
            <ShortcutSloth />
          </div>
          <div className="row">
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
          </div>

        </section>
      </div>
    );
  }
});

module.exports = Level6;