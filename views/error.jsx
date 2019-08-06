const React = require("react");
const Main = require('./templates/main.jsx');

class error extends React.Component {
  render() {
    return (
      <Main>
        <h1>Page not found</h1>
        <a href="/home">Home</a>
      </Main>
    );
  }
}

module.exports = error;
