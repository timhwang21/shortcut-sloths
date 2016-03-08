var React = require('react');

var Sloth = require('./sloth');

var Level1 = React.createClass({
  render: function() {
    return (
      <section className="game">
          <Sloth />
          <Sloth />
          <Sloth />
          <Sloth />
          <Sloth />
          <Sloth />

          <Sloth />
          <Sloth />
          <Sloth />
          <Sloth />
          <Sloth />
          <Sloth />
      </section>
    );

  }




});

module.exports = Level1;