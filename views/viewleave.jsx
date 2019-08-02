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
                    <h1>Directory</h1><button>Add Employee</button>
                  </div>
                  <div className="overlay">
                    <div className="modal">
                      <a href="/home"><i data-feather="x-circle"></i></a>
                      <h1>Review Leave</h1>
                      <p>Staff ID: {this.props.leaveDetails[0].staff_id}</p>
                      <p>Leave Type: {this.props.leaveDetails[0].leave_type}</p>
                      <p>Manager ID: {this.props.leaveDetails[0].manager_id}</p>
                      <p>Days count: {this.props.leaveDetails[0].days_count}</p>
                      <p className="badge">{this.props.leaveDetails[0].request_status}</p>
                      <form action={url} method="POST">
                        <input className="button" name="approve" type="submit"/>
                        <input className="button" name="reject" type="submit"/>
                      </form>
                    </div>
                  </div>
                </div>

        </MainWithNav>
    );
  }
}

module.exports = ViewLeave;
