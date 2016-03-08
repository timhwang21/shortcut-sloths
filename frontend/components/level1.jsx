var React = require('react');

var Level1 = React.createClass({
  render: function() {
    return (
      <section className="game">
        <div id="board">
          <div className="sloth sleepy" id="selected">
            <div className="bg shake-slow"></div>
          </div>

          <div className="sloth shortcut">
            <div className="bg shake-fast"></div>
          </div>
        </div>
      </section>
    );

  }




});

module.exports = Level1;