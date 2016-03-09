var React = require('react');
var Shortcuts = require('../../js/shortcuts');

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  childContextTypes: {
    checkWin: React.PropTypes.func,
  },

  getChildContext: function() {
    return {
      checkWin: this.checkWin
    }
  },

  getInitialState: function() {
    return {won: false};
  },

  componentDidMount: function() {
    Shortcuts.loadHotKeys();
  },

  checkWin: function(level) {
    console.log("level", level);
    if ($( ".sleepy" ).length === 0) {
      this.context.router.push(String(level + 1))
    } else {
      console.log("Eventually the sidebar will shake!");
    }
  },

  render: function() {
    return (
      <div className="game">
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;