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
                    </div>
                  </div>
                </div>

        </MainWithNav>
    );
  }
}

module.exports = ApplyLeave;
