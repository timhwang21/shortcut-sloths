var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');


var Sloth = require('./sloth');

var Level3 = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    checkWin: React.PropTypes.func
  },

  componentDidMount: function() {
    Shortcuts.unbindAll();
    Shortcuts.loadLvl2();
    Shortcuts.loadLvl3();
  },

  render: function() {
    return (
      <div className="level">
        <section className="sidebar">
          <h1>SHORTCUT SLOTHS</h1>
          <h2>Level 3</h2>
          <div>Nice! But we can go even faster!</div>
          <div>Try using 'ctrl+command+G' when selecting a sloth!</div>
          <div>(You should be able to finish this level with 1 click and 1 shortcut!)</div>

          <div className="button-row">
            <button 
              className="button" 
              onClick={this.context.checkWin.bind(null, 4)}>
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

module.exports = Level3;