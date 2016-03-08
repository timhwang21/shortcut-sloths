var React = require('react');

var Sloth = require('./sloth');

var Level1 = React.createClass({
  render: function() {
    return (
      <section className="game">
        <div id="board">
          <Sloth />
          <Sloth />
          <Sloth />
          <Sloth />
          <Sloth />


        </div>
      </section>
    );

  }




});

module.exports = Level1;