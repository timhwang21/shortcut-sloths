var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');


var Sloth = require('./sloth');
var SurlySloth = require('./surlySloth');

var Level5 = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    checkWin: React.PropTypes.func,
    errorMsg: React.PropTypes.string
  },

  componentDidMount: function() {
    Shortcuts.unbindAll();
    Shortcuts.loadLvl2();
    Shortcuts.loadLvl3();
    Shortcuts.loadLvl5();
    document.addEventListener('keydown', this.handleEnter, false);
  },

  componentWillUnmount: function() {
    Shortcuts.unbindAll();
    document.removeEventListener('keydown', this.handleEnter, false)
  },

  handleEnter: function(e) {
    if (e.keyCode == 13) {
      $( ".button" ).click();
    }
  },


  render: function() {
    return (
      <div className="level">
        <section className="sidebar">
          <h1>SHORTCUT SLOTHS</h1>
          <h2>Level 5</h2>
          <p>What's this? Some sloths didn't like being woken up, and are <em>surly</em>!</p>
          <p><em>Surly sloths cannot be clicked</em>, but can be <em>placated</em> by pressing <em>space</em>! How can you select them without clicking them?</p>
          <p>Try <em>selecting an entire row at once</em> with <em>'command-L'</em>. Pressing <em>'command-L'</em> again with a line selected <em>selects the next line</em>!</p>

          <div className="button-row">
            <button 
              className="button" 
              onClick={this.context.checkWin.bind(null, 6)}>
              Next
            </button>
          </div>
          <h2 className="error">{this.context.errorMsg}</h2>

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