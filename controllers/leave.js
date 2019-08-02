module.exports = function (db){

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

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


  let viewLeaveRequestHandler = async function(request, response){

      var leaveId = request.params.id;
      // var leaveId = 1;
      var leaveDetails = await db.leave.getSingleLeaveDetails(leaveId);

      var data = {
        'leaveDetails' : leaveDetails
      }

      response.render('viewleave', data);

  };

  let reviewLeaveHandler = async function(request, response){

      response.send('yaysssss');

  };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    applyLeaveRequestHandler,
    submitLeaveRequestHandler,
    viewLeaveRequestHandler,
    reviewLeaveHandler
  };

}
