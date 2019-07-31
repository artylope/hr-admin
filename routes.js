module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR EMPLOYEE CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const employeesControllerCallbacks = require('./controllers/employees')(allModels);

  app.get('/admin', employeesControllerCallbacks.employees);
};
