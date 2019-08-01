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

    //get your own info
    let user = await db.employees.getOneEmployee(userId);
    console.log(user);
    let managerId = user[0].manager_id;

    //get your manager name
    console.log(managerId);
    let manager = await db.employees.getManager(managerId);

    //get a list of leave that you need to approve
    let leaveToApprove = await db.leave.leaveToApprove(userId);

    response.cookie('manager_id', managerId);

    var data = {
          'user': user,
          'manager' : manager,
          'leaveToApprove' : leaveToApprove
    }

    response.render('home', data);

  };

  let applyLeaveRequestHandler = async function(request, response){

      let userId = request.cookies.user_id;
      let managerId = request.cookies.manager_id;
      let manager = await db.employees.getManager(managerId);

      var data = {
            'userId': userId,
            'manager' : manager
      }

      response.render('ApplyLeave',data);

  };

  let submitLeaveRequestHandler = async function(request, response){
      var leave = request.body;
      var userId = request.cookies.user_id;
      var managerId = request.cookies.manager_id;
      console.log('in submit leave controller');
      console.log(leave);

      await db.leave.submitLeave(userId,managerId,leave);
      response.send('yay');

  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    adminRequestHandler,
    homeRequestHandler,
    applyLeaveRequestHandler,
    submitLeaveRequestHandler
  };

}
