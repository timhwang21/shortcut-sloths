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
          <p>What's this? Some sloths didn't like being woken up!</p>
          <p>Surly sloths <em>cannot be clicked</em>, but <em>can be placated</em> with <em>space</em>!</p>
          <p>Try <em>selecting an entire row at once</em> with <em>'command-L'</em>!)</p>
          <p>Pressing <em>'command-L'</em> again with a line selected <em>selects the next line</em>!</p>
          <p>(You should be able to finish this level with <em>1 click</em> and <em>3 shortcuts</em>!)</p>

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
          <div className="row">
            <Sloth />
            <SurlySloth />
            <Sloth />
            <SurlySloth />
            <Sloth />
            <SurlySloth />
          </div>
        </section>
      </div>
    );
  }
});

module.exports = Level5;