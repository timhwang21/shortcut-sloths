var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');


var Sloth = require('./sloth');

var Level1 = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    checkWin: React.PropTypes.func
  },

  componentDidMount: function() {
    Shortcuts.unbindAll();
  },

  render: function() {
    return (
      <div className="level">
        <section className="sidebar">
          <h1>SHORTCUT SLOTHS</h1>
          <h2>Level 1</h2>
          <div>Oh no! The regularly active shortcut sloths have turned into sleepy sloths! It's your job to wake them up!</div>
          <div>(Click each sloth, and press space to transform them from a sleepy sloth to a shortcut sloth!)</div>

          <div className="button-row">
            <button 
              className="button" 
              onClick={this.context.checkWin.bind(null, 2)}>
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

module.exports = Level1;