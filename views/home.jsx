const React = require("react");
const MainWithNav = require('./templates/mainwithnav.jsx');

class Home extends React.Component {
  render() {
    console.log('in home');
    console.log(this.props);
    return (
      <MainWithNav>
                <div className="wrapper">
                  <div className="title">
                    <h1>Welcome back, {this.props.user[0].staff_name}</h1>
                  </div>
                  <div className="row">
                    <div className="col-thirds">
                      <div className="card">
                        <h2>Your Details</h2>
                        Name: {this.props.user[0].staff_email}<br/>
                        Phone: {this.props.user[0].staff_phone}<br/>
                        Organisation: {this.props.user[0].organisation_name}<br/>
                        Your Manager: {this.props.manager[0].staff_name}
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
                  <div className="row">
                    <button><a href="/applyleave">Apply Leave</a></button>
                  </div>
                </div>

        </MainWithNav>
    );
  }
}

module.exports = Home;
