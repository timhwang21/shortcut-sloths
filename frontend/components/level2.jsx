var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');

var Sloth = require('./sloth');
var ShortcutSloth = require('./shortcutSloth');


var Level2 = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    checkWin: React.PropTypes.func
  },

  componentDidMount: function() {
    Shortcuts.unbindAll();
    Shortcuts.loadLvl2();
  },

  render: function() {
    return (
      <div className="level">
        <section className="sidebar">
          <h1>SHORTCUT SLOTHS</h1>
          <h2>Level 2</h2>
          <p>Great job! But wasn't it slow clicking on each individual sloth?
             Wouldn't it be great if you could <em>wake up multiple sloths at a time?</em></p>
          <p><em>Select a sloth</em>, and press <em>'command + D'</em>!</p>
          <p>Remember to hit <em>space</em> to wake a sloth up!</p>
          <p>(You should be able to finish this level with <em>1 click</em> and <em>5 shortcuts</em>!)</p>

          <div className="button-row">
            <button 
              className="button" 
              onClick={this.context.checkWin.bind(null, 3)}>
              Next
            </button>
          </div>        </section>

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