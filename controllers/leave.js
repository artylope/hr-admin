module.exports = function (db){

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let applyLeaveRequestHandler = async function(request, response){
    console.log("apply leave")
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
          response.redirect('/home');

      } catch(e) {
          console.log('submitLeaveRequestHandler: ' + e);
      }

  };


  let viewLeaveRequestHandler = async function(request, response){
      try {
          var leaveId = request.params.id;
          // var leaveId = 1;
          var leaveDetails = await db.leave.getSingleLeaveDetails(leaveId);
          var userId = request.cookies.user_id;

          var data = {
            'leaveDetails' : leaveDetails,
            'thisUser' : userId
          }

          response.render('viewleave', data);

      } catch(e) {
          console.log('viewLeaveRequestHandler: ' + e);
      }

  };

  let reviewLeaveHandler = async function(request, response){
      try {
          var leaveId = request.body.id;
          var reviewStatus = request.body.outcome;

          if (reviewStatus === 'approve'){
            reviewStatus = 'approved';
          } else if (reviewStatus === 'reject'){
            reviewStatus = 'rejected';
          }

          console.log('new review status');
          console.log(reviewStatus);

          var newLeaveDetails = await db.leave.approveLeave(leaveId,reviewStatus);


          var data = {
            'newLeaveDetails' : newLeaveDetails
          }

          response.redirect('/home');

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
