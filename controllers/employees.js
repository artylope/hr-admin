module.exports = function (db){

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let employeesRequestHandler = async function(request, response){

      let employees = await db.employees.getAllEmployees();

      var data = {
            'employees': employees
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
