var React = require('react');
var ReactDOM = require('react-dom');

var classNames = require('classnames');

var SavageSloth = React.createClass({

  componentDidMount: function() {
    document.addEventListener('click', this.handleClickOutside, false);
  },

  componentWillUnmount: function() {
    document.removeEventListener('click', this.handleClickOutside, false);
  },

  handleClick: function(e) {
    if (!e.currentTarget.classList.contains("savage")) {
      $(e.currentTarget).addClass( "clicked" );
    }
  },

  handleClickOutside: function(e) {
    if (!ReactDOM.findDOMNode(this).contains(event.target)) {
      $(ReactDOM.findDOMNode(this)).removeClass( "clicked" );
    }
  },

  render: function() {
    return (
      <div 
        className="sloth savage animated"
        onClick={this.handleClick}>
        <div className="jail"></div>
        <div className="bg"></div>
      </div>
    );
  }
});

module.exports = SavageSloth;