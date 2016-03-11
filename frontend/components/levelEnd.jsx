var React = require('react');
var Link = require('react-router').Link;
var Shortcuts = require('../../js/shortcuts');


var Sloth = require('./sloth');
var ShortcutSloth = require('./shortcutSloth');
var SurlySloth = require('./surlySloth');
var SavageSloth = require('./savageSloth');

var LevelEnd = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired,
    checkWin: React.PropTypes.func
  },

  render: function() {
    return (
      <div className="level">
        <section className="sidebar">
          <h1>SHORTCUT SLOTHS</h1>
          <h2>That's it so far! Thanks for playing!</h2>

          <p>
            <em>Shortcut Sloths</em> is a two-day Javascript project by <a href="https://www.github.com/timhwang21">Tim Hwang</a>. 
            The game logic is implemented with <em>jQuery</em>, and the frontend is built with <em>React</em>. 
          </p>
          <p>
            Sloths edited from graphic by <a href="https://thenounproject.com/wattenberger/">Amelia Wattenberger</a>. Thank you!
          </p>
          <p>
            Check out <em>Shortcut Sloths</em> on <a href="https://github.com/timhwang21/shortcut-sloths">Github!</a> 
          </p>
          <p>
            Have questions, comments, or suggestions? <a href="mailto:timhwang21@gmail.com?Subject=Shortcut%Sloths">Let's talk!</a> 
          </p>

        </section>

        <section className="board" style={{alignItems: "center"}}>
          <div className="row">
            <Sloth />
            <ShortcutSloth />
            <SurlySloth />
            <SavageSloth />
            <Sloth />
            <ShortcutSloth />
          </div>
          <div className="row">
            <SurlySloth />
            <SavageSloth />
            <Sloth />
            <ShortcutSloth />
            <SurlySloth />
            <SavageSloth />
          </div>
          <div className="row">
            <Sloth />
            <ShortcutSloth />
            <SurlySloth />
            <SavageSloth />
            <Sloth />
            <ShortcutSloth />
          </div>
          <div className="row">
            <SurlySloth />
            <SavageSloth />
            <Sloth />
            <ShortcutSloth />
            <SurlySloth />
            <SavageSloth />
          </div>
          <div className="row">
            <Sloth />
            <ShortcutSloth />
            <SurlySloth />
            <SavageSloth />
            <Sloth />
            <ShortcutSloth />
          </div>
          <div className="row">
            <SurlySloth />
            <SavageSloth />
            <Sloth />
            <ShortcutSloth />
            <SurlySloth />
            <SavageSloth />
          </div>
        </section>
      </div>
    );
  }
});

module.exports = LevelEnd;