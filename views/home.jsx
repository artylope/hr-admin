const React = require("react");
const MainWithNav = require('./templates/mainwithnav.jsx');

class Home extends React.Component {
  render() {

    return (
      <MainWithNav>
                <div className="wrapper">
                  <div className="title">
                    <h1>Welcome back, {this.props.user[0].name}</h1>
                  </div>
                  <div className="row">
                    <div className="col-thirds">
                      <div className="card">
                        <h2>Your Details</h2>
                        {this.props.user[0].email}<br/>
                        {this.props.user[0].phone}<br/>
                        {this.props.user[0].organisation}<br/>
                        here to get the organisation in text<br/>
                        here to get the boss
                      </div>
                    </div>
                    <div className="col-thirds">
                      <div className="card">
                        <h2>Updates</h2>
                        Your Leave application Submitted <br/>
                      </div>
                    </div>

                    <div className="col-thirds">
                      <div className="card">
                        <h2>Requires Your Attention</h2>
                        Staff's Leave application Pending <br/>
                        Staff's Leave application Pending <br/>
                      </div>
                    </div>
                  </div>

                </div>

        </MainWithNav>
    );
  }
}

module.exports = Home;
