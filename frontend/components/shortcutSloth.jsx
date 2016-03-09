var React = require('react');
var ReactDOM = require('react-dom');

var classNames = require('classnames');

var ShortcutSloth = React.createClass({

  componentDidMount: function() {
    document.addEventListener('click', this.handleClickOutside, false);
  },

  componentWillUnmount: function() {
    document.removeEventListener('click', this.handleClickOutside, false);
  },

  handleClick: function(e) {
    $(e.currentTarget).addClass( "clicked" );
  },

  handleClickOutside: function(e) {
    if (!ReactDOM.findDOMNode(this).contains(event.target)) {
      $(ReactDOM.findDOMNode(this)).removeClass( "clicked" );
    }
  },

  render: function() {
    return (
      <div 
        className="sloth shortcut animated"
        onClick={this.handleClick}>
        <div className="jail"></div>
        <div className="bg"></div>
      </div>
    );
  }
});

module.exports = ShortcutSloth;