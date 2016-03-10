var React = require('react');
var Shortcuts = require('../../js/shortcuts');

var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
  },

  childContextTypes: {
    checkWin: React.PropTypes.func,
    errorMsg: React.PropTypes.string
  },

  getChildContext: function() {
    return {
      checkWin: this.checkWin,
      errorMsg: this.state.errorMsg
    }
  },

  getInitialState: function() {
    return {
      won: false,
      errorMsg: ''
    };
  },

  componentDidMount: function() {
    Shortcuts.loadHotKeys();
  },

  // checkWin: function(level) {
  //   if (
  //     $( ".sleepy" ).length === 0 &&
  //     $( ".shortcut.jailed" ).length === 0 &&
  //     $( ".savage" ).not( ".jailed" ).length === 0
  //     ) {
  //     this.context.router.push(String(level))
  //   } else {
  //     console.log("Eventually the sidebar will shake!");
  //   }
  // },

  checkWin: function(level) {
    if ($( ".surly" ).length > 0) {
      this.setState({errorMsg: "There are still surly sloths to be placated!"});
    } else if ($( ".savage" ).not( ".jailed" ).length > 0) {
      this.setState({errorMsg: "There are still savage sloths roaming free!"});
    } else if ($( ".shortcut.jailed" ).length > 0) {
      this.setState({errorMsg: "There are innocent sloths in jail!"});
    } else if ($( ".sleepy" ).length > 0) {
      this.setState({errorMsg: "There are still sleepy sloths to be awoken!"});
    } else {
      this.setState({errorMsg: ""});
      this.context.router.push(String(level))
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