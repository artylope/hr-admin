const React = require("react");
const MainWithNav = require('./templates/mainwithnav.jsx');

class Home extends React.Component {
  render() {
    console.log('in home');
    console.log(this.props);

    const leaveToApproveList = this.props.leaveToApprove.map(function(leave){
        var string = <div className="table-row">
                        <div className="table-col">{leave.id}</div>
                        <div className="table-col">{leave.staff_id}</div>
                        <div className="table-col">{leave.leave_type}</div>
                        <div className="table-col">{leave.manager_id}</div>
                        {/*<div className="table-col">{leave.date_start}</div>
                        <div className="table-col">{leave.date_end}</div>*/}
                        <div className="table-col">{leave.date_count}</div>
                        <div className="table-col"><a>View Request</a></div>
                      </div>;
        return string;
    });

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

                        <div className="table-container">
                          <div className="table">
                            <div className="table-row table-row-header">
                              <div className="table-col">Leave Type</div>
                              <div className="table-col">Manager ID</div>
                              <div className="table-col">Start Date</div>
                              <div className="table-col">End Date</div>
                              <div className="table-col">Days Count</div>
                              <div className="table-col">Actions</div>
                            </div>

                            {leaveToApproveList}

                            <div className="table-row table-row-bottom">
                            </div>
                          </div>
                        </div>

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
