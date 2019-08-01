const React = require("react");
const MainWithNav = require('./templates/mainwithnav.jsx');

class Admin extends React.Component {
  render() {

    const employeesList = this.props.employees.map(function(employee){
        var string = <div className="table-row">
                        <div className="table-col flex-basis-2">{employee.id}</div>
                        <div className="table-col flex-basis-10">{employee.staff_name}</div>
                        <div className="table-col flex-basis-10">{employee.staff_phone}</div>
                        <div className="table-col flex-basis-15">{employee.staff_email}</div>
                        <div className="table-col flex-basis-10">{employee.organisation_name}</div>
                      </div>;
        return string;
    });

    return (
      <MainWithNav>
                <div className="wrapper">
                  <div className="title">
                    <h1>Directory</h1><button>Add Employee</button>
                  </div>
                  <div className="table-container">
                    <div className="table">
                      <div className="table-row table-row-header">
                        <div className="table-col flex-basis-2" >No.</div>
                        <div className="table-col flex-basis-10">Name</div>
                        <div className="table-col flex-basis-10">Phone</div>
                        <div className="table-col flex-basis-15">Email</div>
                        <div className="table-col flex-basis-10">Organisation</div>
                      </div>

                      {employeesList}

                      <div className="table-row table-row-bottom">
                      </div>
                    </div>
                  </div>
                </div>

        </MainWithNav>
    );
  }
}

module.exports = Admin;
