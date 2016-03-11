var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');


var Sloth = require('./sloth');
var ShortcutSloth = require('./shortcutSloth');
var SavageSloth = require('./savageSloth');

var Level7 = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    checkWin: React.PropTypes.func,
    errorMsg: React.PropTypes.string
  },

  componentDidMount: function() {
    Shortcuts.unbindAll();
    Shortcuts.loadLvl2();
    Shortcuts.loadLvl3();
    Shortcuts.loadLvl5();
    Shortcuts.loadLvl6();
    Shortcuts.loadLvl7();
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
          <h2>Level 7</h2>
          <p>That's a LOT of <em>savage sloths!</em></p>
          <p>
            There is a single <em>sleepy sloth</em> at the bottom. 
            However, <em>'command + L'</em> only selects the <em>next line</em> -- not <em>previous lines</em>!
          </p>
          <p>
            If only you could get the <em>sleepy sloth</em> to the top...
          </p>
          <p>
            Try selecting the <em>sleepy sloth</em>, and pressing <em>'ctrl + command + up/down'</em>!
          </p>

          <div className="button-row">
            <button 
              className="button" 
              onClick={this.context.checkWin.bind(null, "end")}>
              Next
            </button>
          </div>
          <h2 className="error">{this.context.errorMsg}</h2>

        </section>

        <section className="board" style={{alignItems: "center"}}>
          <div className="row">
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
          </div>
          <div className="row">
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
          </div>
          <div className="row">
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
          </div>
          <div className="row">
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
          </div>
          <div className="row">
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
            <SavageSloth />
          </div>
          <div className="row">
            <Sloth />
          </div>

        </section>
      </div>
    );
  }
});

module.exports = Level7;