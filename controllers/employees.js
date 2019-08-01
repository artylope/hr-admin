module.exports = function (db){

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let adminRequestHandler = async function(request, response){

      let employees = await db.employees.getAllEmployees();

      var data = {
            'employees': employees,
      }

      response.render('admin', data);

  };

  let homeRequestHandler = async function(request, response){

      let user = await db.employees.getOneEmployee();

      var data = {
            'user': user
      }

      response.render('home', data);

  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    adminRequestHandler,
    homeRequestHandler
  };

}
