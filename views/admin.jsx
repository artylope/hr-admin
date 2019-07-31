const React = require("react");
const MainWithNav = require('./templates/mainwithnav.jsx');

class Admin extends React.Component {
  render() {

    const employeesList = this.props.employees.map(function(employee){
        var string = <div className="row">
                        <div className="col">{employee.id}</div>
                        <div className="col">{employee.name}</div>
                        <div className="col">{employee.phone}</div>
                        <div className="col">{employee.email}</div>
                        <div className="col">{employee.organisation}</div>
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
                      <div className="row row-header">
                        <div className="col" >No.</div>
                        <div className="col">Name</div>
                        <div className="col">Phone</div>
                        <div className="col">Email</div>
                        <div className="col">Organisation</div>
                      </div>

                      {employeesList}

                      <div className="row row-bottom">
                      </div>
                    </div>
                  </div>
                </div>

        </MainWithNav>
    );
  }
}

module.exports = Admin;
