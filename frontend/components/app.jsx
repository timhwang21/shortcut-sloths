var React = require('react');
var Shortcuts = require('../../js/shortcuts');

var App = React.createClass({
  getInitialState: function() {
    return {won: false};
  },

  componentDidMount: function() {
    Shortcuts.loadHotKeys();
  },

  childContextTypes: {
    checkWin: React.PropTypes.func,
    won: React.PropTypes.bool
  },

  getChildContext: function() {
    return {
      checkWin: this.checkWin,
      won: this.state.won
    }
  },

  checkWin: function(e) {
    if ($( ".sleepy" ).length === 0) {
      console.log("You won!!");
      this.setState({won: true});
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