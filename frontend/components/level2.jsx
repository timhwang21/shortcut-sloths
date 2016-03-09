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
          <div>Level 2</div>
          <div>Great job! But wasn't it slow clicking on each individual sloth?</div>
          <div>What if you could select many sloths and simultaneously wake them up?</div>
          <div>Try using 'command+D' when selecting a sloth!</div>
          <div>(You should be able to finish this level with 1 click and 5 shortcuts!)</div>

          <button onClick={this.context.checkWin.bind(null, 2)}>Next</button>
        </section>

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