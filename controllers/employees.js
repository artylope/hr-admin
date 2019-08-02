module.exports = function (db){

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let adminRequestHandler = async function(request, response){
      try {
        let employees = await db.employees.getAllEmployees();

        var data = {
              'employees': employees,
        }

        response.render('admin', data);
      } catch(e) {
          console.log('adminRequestHandler : ' + e);
      }
  };

  let homeRequestHandler = async function(request, response){
    try {
      let userId = request.cookies.user_id;
      let loggedIn = request.cookies.logged_in;

      // console.log('user id');
      // console.log(userId);
      // console.log('is logged in?');
      // console.log(loggedIn);

      //get your own info
      let user = await db.employees.getOneEmployee(userId);
      console.log(user);
      let managerId = user[0].manager_id;

      //get your manager name
      console.log(managerId);
      let manager = await db.employees.getManager(managerId);

      //get a list of leave that you need to approve
      let leaveToApprove = await db.leave.leaveToApprove(userId);
      let leaveApplied = await db.leave.leaveApplied(userId);

      response.cookie('manager_id', managerId);

      var data = {
            'user': user,
            'manager' : manager,
            'leaveToApprove' : leaveToApprove,
            'leaveApplied' : leaveApplied
      }

      response.render('home', data);
    } catch(e) {
        console.log('homeRequestHandler : ' + e);
    }


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
