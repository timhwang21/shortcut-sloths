var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');

var Sloth = require('./sloth');
var ShortcutSloth = require('./shortcutSloth');

var Level2 = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    checkWin: React.PropTypes.func,
    errorMsg: React.PropTypes.string
  },

  componentDidMount: function() {
    Shortcuts.unbindAll();
    Shortcuts.loadLvl2();
  },

  componentWillUnmount: function() {
    Shortcuts.unbindAll();
  },

  render: function() {
    return (
      <div className="level">
        <section className="sidebar">
          <h1>SHORTCUT SLOTHS</h1>
          <h2>Level 2</h2>
          <p>Great job! But wasn't it slow clicking on each individual sloth?
             Wouldn't it be great if you could <em>wake up multiple sloths at a time?</em></p>
          <p><em>Click a sloth</em>, and press <em>'command + D'</em> to <em>select the next sloth of the same type</em>!</p>
          <p>Remember to hit <em>space</em> to wake a sloth up!</p>

          <div className="button-row">
            <button 
              className="button" 
              onClick={this.context.checkWin.bind(null, 3)}>
              Next
            </button>
          </div>
          <h2 className="error">{this.context.errorMsg}</h2>

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

module.exports = Level2;