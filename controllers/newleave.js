module.exports = function (db){

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  let datePickerHandler = async function(request, response){
      try {

          response.render('datepicker');

      } catch(e) {
          console.log('datePickerHandler: ' + e);
      }

  };

  let applyNewLeaveHandler = async function(request, response){
      try {
        var obj = request.body;
        console.log('request body 1');
        console.log(obj);

        await db.newLeave.createLeaveGroup(obj);

        response.send('success');

        // await db.newleave.addLeaveDays();

      } catch(e) {
          console.log('applyNewLeaveHandler: ' + e);
      }

  };




  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    datePickerHandler,
    applyNewLeaveHandler
  };

}
