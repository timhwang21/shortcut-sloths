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
  },

  componentWillUnmount: function() {
    Shortcuts.unbindAll();
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
          <p><em>Shortcut Sloths</em> is a game about <em>text editor shortcuts</em>... and <em>sloths</em>!</p>
          <p>The purpose of this game is to introduce features of modern text editors, in order to <em>increase typing speed</em> and <em>improve programmer happiness</em>.</p>
          <p>
            We recommend playing this game <em>in Chrome</em> with your favorite text editor open, and <em>trying out every new shortcut</em> as you play!
            Our favorite editors are <a href="https://www.sublimetext.com/">Sublime Text</a> and <a href="https://atom.io/">Atom</a>.
          </p>
          <p><em>PC users</em>: Unfortunately, <em>Shortcut Sloths</em> is currently configured to work with <em>Mac shortcuts only</em>. Sorry!</p>
          <h2>Have fun!</h2>
        </section>

        <section className="board" style={{alignItems: "center"}}>
          <div className="row"></div>
          <div className="row"></div>
          <div className="row">
            <ShortcutSloth /> 
            <button
              className="button start-button"
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