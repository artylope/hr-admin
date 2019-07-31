module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let employeesControllerCallback = function(request, response){
      db.employees.getAll(
        function (error, result){
          var data = {
            employees: result
          }

        response.render('admin', data);
      });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    employees: employeesControllerCallback,
  };

}
