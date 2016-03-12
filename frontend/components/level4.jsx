var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');

var Sloth = require('./sloth');
var SurlySloth = require('./surlySloth');

var Level4 = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    checkWin: React.PropTypes.func,
    errorMsg: React.PropTypes.string
  },

  componentDidMount: function() {
    Shortcuts.unbindAll();
    Shortcuts.loadLvl2();
    Shortcuts.loadLvl3();
  },

  componentWillUnmount: function() {
    Shortcuts.unbindAll();
  },

  render: function() {
    return (
      <div className="level">
        <section className="sidebar">
          <h1>SHORTCUT SLOTHS</h1>
          <h2>Level 4</h2>
          <p>There are more sloths than before! Wake them up -- you got this!</p>
          <p>Use either <em>'command-D'</em> or <em>'ctrl-command-G'</em> to select all the sloths!</p>
          <p>Or click them one by one, if that's your thing.</p>

          <div className="button-row">
            <button 
              className="button" 
              onClick={this.context.checkWin.bind(null, 5)}>
              Next
            </button>
          </div>
          <h2 className="error">{this.context.errorMsg}</h2>

        </section>

        <section className="board" style={{alignItems: "center"}}>
          <div className="row"></div>
          <div className="row">
            <Sloth />
            <Sloth />
            <Sloth />
            <Sloth />
            <Sloth />
            <Sloth />
          </div>
          <div className="row">
            <Sloth />
            <Sloth />
            <Sloth />
            <Sloth />
            <Sloth />
            <Sloth />
          </div>
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

module.exports = Level4;