var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');

var Sloth = require('./sloth');

var Level1 = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    checkWin: React.PropTypes.func,
    errorMsg: React.PropTypes.string
  },

  componentDidMount: function() {
    Shortcuts.unbindAll();
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
          <h2>Level 1</h2>
          <p>Oh no! The regularly active <em>shortcut sloths</em> have turned into <em>sleepy sloths</em>! It's your job to <em>wake them up</em> with <em>the power of shortcuts</em>!</p>
          <p><em>Click each sloth</em>, and press <em>space</em> to transform them from <em>sleepy sloths</em> to <em>shortcut sloths</em>!</p>
          <p>Hit <em>'next'</em> or press <em>enter</em> when all the sloths are awake!</p>

          <div className="button-row">
            <button 
              className="button" 
              onClick={this.context.checkWin.bind(null, 2)}>
              Next
            </button>

          </div>
        </section>
        <h2 className="error">{this.context.errorMsg}</h2>

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