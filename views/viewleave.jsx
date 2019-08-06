const React = require("react");
const MainWithNav = require('./templates/mainwithnav.jsx');

class ViewLeave extends React.Component {
  render() {
    var url = "/home" + "?_method=PUT";
    console.log(this.props);

    let leaveStatus = this.props.leaveDetails[0].request_status;
    var FORM = '';

    if (leaveStatus === 'submitted' && parseInt(this.props.thisUser) !== parseInt(this.props.leaveDetails[0].staff_id)){
      FORM =  <form action={url} method="POST">
                    <input hidden name="id" type="text" value={this.props.leaveDetails[0].id}/>
                    <div className="button-group">
                    <input className="button" name="outcome" value="approve" type="submit"/>
                    <input className="button" name="outcome" value="reject" type="submit"/>
                    </div>
                    </form>;
    }

    // if (parseInt(this.props.thisUser) === parseInt(this.props.leaveDetails[0].staff_id)){
    //   FORM =  '';
    // }

    return (
      <MainWithNav>
                <div className="wrapper">
                  <div className="title">
                    <h1>Directory</h1>
                  </div>
                  <div className="overlay">
                    <div className="modal">
                      <div className="close-button-div">
                        <a href="/home"><i data-feather="x-circle"></i></a>
                      </div>

                      <h1>Review Leave</h1>
                      <p>Staff ID: {this.props.leaveDetails[0].staff_id}</p>
                      <p>Staff Name: {this.props.leaveDetails[0].staff_name}</p>
                      <p>Leave Type: <span className="capitalised">{this.props.leaveDetails[0].leave_type}</span></p>
                      <p>Manager ID: {this.props.leaveDetails[0].manager_id}</p>
                      <p>Days count: {this.props.leaveDetails[0].date_start.toDateString()}</p>
                      <p>Days count: {this.props.leaveDetails[0].date_end.toDateString()}</p>
                      <p>Days count: {this.props.leaveDetails[0].days_count}</p>
                      <p className="badge">{this.props.leaveDetails[0].request_status}</p>
                      {FORM}
                    </div>
                  </div>
                </div>
                <script src="../js/badge.js"></script>
        </MainWithNav>

    );
  }
}

module.exports = ViewLeave;
