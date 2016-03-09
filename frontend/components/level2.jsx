var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');


var Sloth = require('./sloth');

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
          <div>Great job! But wasn't it slow clicking on each individual sloth?</div>
          <div>Wouldn't it be great if you could simultaneously wake up multiple sloths?</div>
          <div>Try pressing 'command+D' when selecting a sloth!</div>
          <div>(You should be able to finish this level with 1 click and 5 shortcuts!)</div>

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
            <Sloth />
            <Sloth />
            <Sloth />
            <Sloth />
          </div>
        </section>
      </div>
    );
  }
});

module.exports = Level2;