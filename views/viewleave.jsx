const React = require("react");
const MainWithNav = require('./templates/mainwithnav.jsx');

class ViewLeave extends React.Component {
  render() {
    var url = "/home" + "?_method=PUT";
    console.log(this.props);

    return (
      <MainWithNav>
                <div className="wrapper">
                  <div className="title">
                    <h1>Directory</h1>
                  </div>
                  <div className="overlay">
                    <div className="modal">
                      <a href="/home"><i data-feather="x-circle"></i></a>
                      <h1>Review Leave</h1>
                      <p>Staff ID: {this.props.leaveDetails[0].staff_id}</p>
                      <p>Leave Type: {this.props.leaveDetails[0].leave_type}</p>
                      <p>Manager ID: {this.props.leaveDetails[0].manager_id}</p>
                      <p>Days count: {this.props.leaveDetails[0].date_start.toISOString().replace('T16:00:00.000Z','')}</p>
                      <p>Days count: {this.props.leaveDetails[0].date_end.toISOString().replace('T16:00:00.000Z','')}</p>
                      <p>Days count: {this.props.leaveDetails[0].days_count}</p>
                      <p className="badge">{this.props.leaveDetails[0].request_status}</p>
                      <form action={url} method="POST">
                        <input hidden name="id" type="text" value={this.props.leaveDetails[0].id}/>
                        <input className="button" name="outcome" value="approved" type="submit"/>
                        <input className="button" name="outcome" value="rejected" type="submit"/>
                      </form>
                    </div>
                  </div>
                </div>
                <script src="../js/badge.js"></script>
        </MainWithNav>

    );
  }
}

module.exports = ViewLeave;
