const React = require("react");
const Main = require('./templates/main.jsx');

class Login extends React.Component {
  render() {
    return (
      <Main>
        <section className="login">
          <div className="hero">todo: add image</div>
          <div className="panel">
            <form action="/login" method="POST">
              <div className="logo">HR PORTAL</div>
              <div className="input-group">
                <p>Username</p>
                <input type="text" name="username" placeholder="username"/>
              </div>
              <div className="input-group">
                <p>Password</p>
                <input type="text" name="password" placeholder="password"/>
              </div>
              <input className="login-button" type="submit" value="Login"/>
            </form>
            </div>
        </section>
      </Main>
    );
  }
}

module.exports = Login;
