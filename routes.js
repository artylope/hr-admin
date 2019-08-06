module.exports = function (app, allModels){

  const userController = require('./controllers/user')(allModels);
  const employeesController = require('./controllers/employees')(allModels);
  const leaveController = require('./controllers/leave')(allModels);
  const newLeaveController = require('./controllers/newleave')(allModels);


  app.get('/', userController.indexRedirectHandler);
  app.get('/login', userController.loginRequestHandler);
  app.post('/login', userController.authenticateRequestHandler);
  app.get('/logout', userController.logoutRequestHandler);

  app.get('/home', employeesController.homeRequestHandler);
  app.get('/admin', employeesController.adminRequestHandler);

  app.get('/applyleave', leaveController.applyLeaveRequestHandler);
  app.post('/applyleave', leaveController.submitLeaveRequestHandler);

  app.get('/viewleave/:id', leaveController.viewLeaveRequestHandler);
  app.put('/home', leaveController.reviewLeaveHandler);

  app.get('/datepicker', newLeaveController.datePickerHandler);
  app.post('/applynewleave', newLeaveController.applyNewLeaveHandler);

  app.get('/*', userController.errorRedirectHandler);
};
