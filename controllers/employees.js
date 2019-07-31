module.exports = function (db){

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let employeesRequestHandler = async function(request, response){

      let employees = await db.employees.getAllEmployees();
      let person = await db.employees.getOneEmployee();

      var data = {
            'employees': employees,
            'person': person
      }

      response.render('admin', data);

  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    employeesRequestHandler
  };

}
