var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');


var Sloth = require('./sloth');
var ShortcutSloth = require('./shortcutSloth');
var SurlySloth = require('./surlySloth');
var SavageSloth = require('./savageSloth');

var LevelEnd = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    checkWin: React.PropTypes.func
  },

  componentDidMount: function() {
    // Shortcuts.unbindAll();
    // Shortcuts.unbindSpace();
  },

  render: function() {
    return (
      <div className="level">
        <section className="sidebar">
          <h1>SHORTCUT SLOTHS</h1>
          <h2>That's it! Thanks for playing!</h2>

        </section>

        <section className="board" style={{alignItems: "center"}}>
          <div className="row">
            <Sloth />
            <ShortcutSloth />
            <SurlySloth />
            <SavageSloth />
            <Sloth />
            <ShortcutSloth />
          </div>
          <div className="row">
            <SurlySloth />
            <SavageSloth />
            <Sloth />
            <ShortcutSloth />
            <SurlySloth />
            <SavageSloth />
          </div>
          <div className="row">
            <Sloth />
            <ShortcutSloth />
            <SurlySloth />
            <SavageSloth />
            <Sloth />
            <ShortcutSloth />
          </div>
          <div className="row">
            <SurlySloth />
            <SavageSloth />
            <Sloth />
            <ShortcutSloth />
            <SurlySloth />
            <SavageSloth />
          </div>
          <div className="row">
            <Sloth />
            <ShortcutSloth />
            <SurlySloth />
            <SavageSloth />
            <Sloth />
            <ShortcutSloth />
          </div>
          <div className="row">
            <SurlySloth />
            <SavageSloth />
            <Sloth />
            <ShortcutSloth />
            <SurlySloth />
            <SavageSloth />
          </div>
        </section>
      </div>
    );
  }
});

module.exports = LevelEnd;