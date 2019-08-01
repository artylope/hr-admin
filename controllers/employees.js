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

    let userId = request.cookies.user_id;
    let loggedIn = request.cookies.logged_in;

    // console.log('user id');
    // console.log(userId);
    // console.log('is logged in?');
    // console.log(loggedIn);

      let user = await db.employees.getOneEmployee(userId);
      console.log(user);
      let managerId = user[0].manager_id;
      console.log(managerId);
      let manager = await db.employees.getManager(managerId);

      var data = {
            'user': user,
            'manager' : manager
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
