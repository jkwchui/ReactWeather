var React = require('react');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="text-center">About</h1>
        <p>Welcome to the about page.  <a href="http://google.com" className="secondary button">Google</a></p>
      </div>
    )
  }
});

module.exports = About;
