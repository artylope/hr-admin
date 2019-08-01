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

    console.log('user id');
    console.log(userId);
    console.log('is logged in?');
    console.log(loggedIn);

      let user = await db.employees.getOneEmployee(userId);
      // let boss = await db.employees.getBoss();

      var data = {
            'user': user
            // 'userBoss' : boss
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
