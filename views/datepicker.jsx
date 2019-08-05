const React = require("react");
const MainWithNav = require('./templates/mainwithnav.jsx');
import DayPicker from 'react-day-picker';

class Datepicker extends React.Component {
  render() {
    return (
      <MainWithNav>

      <div className="wrapper">
        <div className="title">
          <h1>Directory</h1><button>Add Employee</button>
        </div>
        <div class="overlay">
          <div class="modal">
          <div className="close-button-div">
            <a href="/home"><i data-feather="x-circle"></i></a>
          </div>

            <h1>Apply Leave</h1>
            <form id="leave-form" action="/applynewleave" method="POST">
              <div className="input-group">
                <p>Leave Type</p>
                <select id="leave-type" name="leave_type">
                  <option value="annual leave">Annual Leave</option>
                  <option value="no pay leave">No Pay Leave</option>
                  <option value="maternity leave">Maternity Leave</option>
                  <option value="medical leave">Medical Leave</option>
                  <option value="child care leave">Child Care Leave</option>
                </select>
              </div>
              <div className="input-group">
                <input hidden type="text" name="request_status" value="submitted"/>
              </div>
              <div className="input-group">
              <p>Select Days</p>
                <DayPicker numberOfMonths={3}  />
              </div>
              {/*<div className="button-group">
                <input className="button" type="submit" value="Apply"/>
              </div>*/}
            </form>
          </div>
        </div>
      </div>

        <script src="../js/datepicker.js"></script>
        {/*<script src="https://unpkg.com/react-day-picker/lib/daypicker.min.js"></script>*/}
      </MainWithNav>
    );
  }
}

module.exports = Datepicker;
