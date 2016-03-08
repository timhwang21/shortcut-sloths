var React = require('react');
var ReactDOM = require('react-dom');

var classNames = require('classnames');

var Sloth = React.createClass({

  componentDidMount: function() {
    document.addEventListener('click', this.handleClickOutside, false);
    key('space', function() {
      // debugger;
      $( ".clicked" ).toggleClass( "sleepy shortcut shake-slow shake-fast" );
      return false;

    }.bind(this));
  },

  componentWillUnmount: function() {
    document.removeEventListener('click', this.handleClickOutside, false);
  },

  handleClick: function(e) {
    // debugger;
    $(e.currentTarget).addClass( "clicked" );
    window.selected = e.currentTarget.classList;
    // maybe this would be better? returns string instead of ary
    // window.selected = e.currentTarget.className;
  },

  handleClickOutside: function(e) {
    if (!ReactDOM.findDOMNode(this).contains(event.target)) {
      // debugger;
      $(ReactDOM.findDOMNode(this)).removeClass( "clicked" );
      window.selected = undefined;
    }
  },

  render: function() {
    var slothClass = classNames({
      "sloth": true,
      "clicked": false, 
      "sleepy": true, 
      "shake-slow": true
    });

    return (
      <div 
        className={slothClass} 
        onClick={this.handleClick}>
        <div className="bg"></div>
      </div>
    );
  }
});

module.exports = Sloth;