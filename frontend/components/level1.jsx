var React = require('react');

var Sloth = require('./sloth');

var Level1 = React.createClass({

  contextTypes: {
    checkWin: React.PropTypes.func,
    won: React.PropTypes.bool
  },

  render: function() {
    return (
      <div className="level">
        <section className="sidebar">
          <h1>SHORTCUT SLOTHS</h1>
          <div>Level 1</div>
          <div>Turn the sleepy sloths into shortcut sloths! (click and press space)</div>

          <button onClick={this.context.checkWin}>Win Check</button>

          {this.context.won ? <span>Won</span> : <span>Not Won</span>}
        </section>

        <section className="board" style={{alignItems: "center"}}>
            <Sloth />
            <Sloth />
            <Sloth />
            <Sloth />
            <Sloth />
            <Sloth />
        </section>
      </div>
    );

  }




});

module.exports = Level1;