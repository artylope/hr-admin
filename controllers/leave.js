module.exports = function (db){

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let applyLeaveRequestHandler = async function(request, response){
      try {
          let userId = request.cookies.user_id;
          let managerId = request.cookies.manager_id;
          let manager = await db.employees.getManager(managerId);

          var data = {
                'userId': userId,
                'manager' : manager
          }

          response.render('ApplyLeave',data);
      } catch(e) {
          console.log('applyLeaveRequestHandler: ' + e);
      }

  };

  let submitLeaveRequestHandler = async function(request, response){
      try {
          var leave = request.body;
          var userId = request.cookies.user_id;
          var managerId = request.cookies.manager_id;
          console.log('in submit leave controller');
          console.log(leave);

          await db.leave.submitLeave(userId,managerId,leave);
          response.send('yay');

      } catch(e) {
          console.log('submitLeaveRequestHandler: ' + e);
      }

  };


  let viewLeaveRequestHandler = async function(request, response){
      try {
          var leaveId = request.params.id;
          // var leaveId = 1;
          var leaveDetails = await db.leave.getSingleLeaveDetails(leaveId);

          var data = {
            'leaveDetails' : leaveDetails
          }

          response.render('viewleave', data);

      } catch(e) {
          console.log('viewLeaveRequestHandler: ' + e);
      }

  };

  let reviewLeaveHandler = async function(request, response){
      try {
          response.send('yaysssss');
      } catch(e) {
          console.log('reviewLeaveHandler: ' + e);
      }

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
