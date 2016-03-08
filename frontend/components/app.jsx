var React = require('react');
var Shortcuts = require('../../js/shortcuts');

var App = React.createClass({
  componentDidMount: function() {
    Shortcuts.loadHotKeys();
  },

  render: function() {
    return (
      <div className="sloths">
        <section className="sidebar">
          <h1>SHORTCUT SLOTHS</h1>
          <div>Instructions go here</div>
          <div>More text goes here</div>
          <div>Other text here</div>
        </section>

        {this.props.children}
      </div>
    );
  }
});

module.exports = App;