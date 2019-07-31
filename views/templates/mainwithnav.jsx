var React = require("react");

class MainWithNav extends React.Component {
  render() {
    {/*code here*/}
    return (
      <html lang="en">
      <head>
        <title>HR Portal</title>
        <meta name="description" content="HR Portal"/>
        <meta name="author" content="Artylope"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.css"/>
        <link rel="stylesheet" href="css/style.css"/>

      </head>
      <body>
        <header>
          <nav>
            <div className="logo"><a href="/">HR PORTAL</a></div>
            <div id="nav-links">
              <ul>
                <li>My Profile</li>
                <li className="selected">Directory</li>
                <li>Leave</li>
                <li>Claims</li>
                <li>Salary</li>
                <li>Security</li>
                <li>Performance</li>
                <li><a href="/logout">Logout</a></li>
              </ul>
            </div>
          </nav>
        </header>
        { this.props.children }
      </body>
      </html>




    );
  }
}

module.exports = MainWithNav;
