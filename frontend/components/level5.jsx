var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');


var Sloth = require('./sloth');
var SurlySloth = require('./surlySloth');

var Level5 = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    checkWin: React.PropTypes.func
  },

  componentDidMount: function() {
    Shortcuts.unbindAll();
    Shortcuts.loadLvl2();
    Shortcuts.loadLvl3();
    Shortcuts.loadLvl5();
  },

  render: function() {
    return (
      <div className="level">
        <section className="sidebar">
          <h1>SHORTCUT SLOTHS</h1>
          <h2>Level 5</h2>
          <div>What's this? Some sloths didn't like being woken up!</div>
          <div>Surly sloths cannot be clicked. Oh no! What can we do?</div>
          <div>Maybe you can try selecting an entire row at once with 'command-L'!)</div>
          <div>Pressing 'command-L' again with a line selected selects the next line!</div>
          <div>(You should be able to finish this level with 1 click and 2 shortcuts!)</div>

          <div className="button-row">
            <button 
              className="button" 
              onClick={this.context.checkWin.bind(null, 6)}>
              Next
            </button>
          </div>
        </section>

        <section className="board" style={{alignItems: "center"}}>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row">
            <Sloth />
            <SurlySloth />
            <Sloth />
            <SurlySloth />
            <Sloth />
            <SurlySloth />
          </div>
          <div className="row">
            <SurlySloth />
            <Sloth />
            <SurlySloth />
            <Sloth />
            <SurlySloth />
            <Sloth />
          </div>
        </section>
      </div>
    );
  }
});

module.exports = Level5;