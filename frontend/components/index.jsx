var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');

var ShortcutSloth = require('./shortcutSloth');

var Index = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    checkWin: React.PropTypes.func
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

  handleClick: function(e) {
    e.preventDefault();
    this.context.router.push("1");
  },

  render: function() {
    return (
      <div className="level">
        <section className="sidebar">
          <h1>SHORTCUT SLOTHS</h1>
          <p>Welcome to <em>Shortcut Sloths</em>, a game about <em>text editor shortcuts</em>!</p>
          <p>The purpose of this game is to introduce features of modern text editors, in order to <em>increase typing speed</em> and <em>improve programmer happiness</em>.</p>
          <p>We recommend playing this game with your favorite text editor open, and <em>trying out every new shortcut</em> in your editor as you play!</p>
          <h2>Have fun!</h2>
        </section>

        <section className="board" style={{alignItems: "center"}}>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row">
            <ShortcutSloth /> 
            <button
              className="start-button"
              onClick={this.handleClick} >
              PLAY!
            </button>
            <ShortcutSloth /> 
          </div>
        </section>
      </div>
    );
  }
});

module.exports = Index;