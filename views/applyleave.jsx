const React = require("react");
const MainWithNav = require('./templates/mainwithnav.jsx');

class ApplyLeave extends React.Component {
  render() {

    return (
      <MainWithNav>
                <div className="wrapper">
                  <div className="title">
                    <h1>Directory</h1><button>Add Employee</button>
                  </div>
                  <div class="overlay">
                    <div class="modal">
                      <a href="/home">Close</a>
                      <h1>Apply Leave</h1>
                      <form action="/applyleave" method="POST">
                        <div className="input-group">
                          <p>Manager</p>
                          <input type="text" name="manager_id" value="1"/>
                        </div>
                        <div className="input-group">
                          <p>Leave Type</p>
                          <select name="leave_type">
                            <option value="annual leave">Annual Leave</option>
                            <option value="no pay leave">No Pay Leave</option>
                            <option value="maternity leave">Maternity Leave</option>
                            <option value="medical leave">Medical Leave</option>
                            <option value="child care leave">Child Care Leave</option>
                          </select>
                        </div>
                        <div className="input-group">
                          <p>Start Date</p>
                          <input type="date" name="date_start"/>
                        </div>
                        <div className="input-group">
                          <p>End Date</p>
                          <input type="date" name="date_end"/>
                        </div>
                        <div className="input-group">
                          <input hidden type="text" name="request_status" value="submitted"/>
                        </div>
                        <input className="button" type="submit" value="Apply"/>
                      </form>
                    </div>
                  </div>
                </div>

        </MainWithNav>
    );
  }
}

module.exports = ApplyLeave;
