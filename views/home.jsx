const React = require("react");
const MainWithNav = require('./templates/mainwithnav.jsx');

class Home extends React.Component {
  render() {
    console.log('in home');
    console.log(this.props);

    {/*var leaveToApproveURL = '/viewleave/' + this.props.leaveToApprove.id;
    var leaveAppliedURL = '/viewleave/' + this.props.leaveApplied.id;*/}

    const leaveToApproveList = this.props.leaveToApprove.map(function(leave){
      var leaveToApproveURL = '/viewleave/' + leave.id;
        var string = <div className="table-row leave-to-approve">
                        <div className="table-col">{leave.id}</div>
                        <div className="table-col">{leave.staff_id}</div>
                        <div className="table-col">{leave.leave_type}</div>
                        <div className="table-col">{leave.manager_id}</div>
                        <div className="table-col">Start Date</div>
                        <div className="table-col">End Date</div>
                        <div className="table-col">{leave.days_count}</div>
                        <div className="table-col"><a href={leaveToApproveURL} >View Request</a></div>
                      </div>;
        return string;
    });

    const leaveAppliedList = this.props.leaveApplied.map(function(leave){
        var leaveAppliedURL = '/viewleave/' + leave.id;
        var string = <div className="table-row leave-applied">
                        <div className="table-col">{leave.id}</div>
                        <div className="table-col">{leave.staff_id}</div>
                        <div className="table-col">{leave.leave_type}</div>
                        <div className="table-col">{leave.manager_id}</div>
                        <div className="table-col">Start Date</div>
                        <div className="table-col">End Date</div>
                        <div className="table-col">{leave.days_count}</div>
                        <div className="table-col"><a href={leaveAppliedURL} >View Request</a></div>
                      </div>;
        return string;
    });

    return (
      <MainWithNav>
              <div id="home">
                <div className="wrapper">
                  <div className="title">
                    <h1>Welcome back, {this.props.user[0].staff_name}</h1>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="card">
                        <h2>Your Details</h2>
                        Name: {this.props.user[0].staff_email}<br/>
                        Phone: {this.props.user[0].staff_phone}<br/>
                        Organisation: {this.props.user[0].organisation_name}<br/>
                        Your Manager: {this.props.manager[0].staff_name}
                        <button><a href="/applyleave">Apply Leave</a></button>
                      </div>
                    </div>
                  </div>

                  <h2>Requires you approval</h2>
                  <div className="row">
                  <div className="col">



                      <div className="table-container">
                        <div className="table">
                          <div className="table-row table-row-header">
                            <div className="table-col">Leave ID</div>
                            <div className="table-col">Staff ID</div>
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

                  <h2>Your Leave Application</h2>
                  <div className="row">
                    <div className="col">


                        <div className="table-container">
                          <div className="table">
                            <div className="table-row table-row-header">
                              <div className="table-col">Leave ID</div>
                              <div className="table-col">Staff ID</div>
                              <div className="table-col">Leave Type</div>
                              <div className="table-col">Manager ID</div>
                              <div className="table-col">Start Date</div>
                              <div className="table-col">End Date</div>
                              <div className="table-col">Days Count</div>
                              <div className="table-col">Actions</div>
                            </div>

                            {leaveAppliedList}

                            <div className="table-row table-row-bottom">
                            </div>
                          </div>
                        </div>

                    </div>
                  </div>


                </div>
          </div>
        </MainWithNav>
    );
  }
}

module.exports = Home;
