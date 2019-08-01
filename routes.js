module.exports = function (app, allModels){

  const userController = require('./controllers/user')(allModels);
  const employeesController = require('./controllers/employees')(allModels);


  app.get('/', userController.indexRedirectHandler);
  app.get('/login', userController.loginRequestHandler);
  app.post('/login', userController.authenticateRequestHandler);
  app.get('/logout', userController.logoutRequestHandler);

  app.get('/home', employeesController.homeRequestHandler);
  app.get('/admin', employeesController.adminRequestHandler);

  app.get('/applyleave', employeesController.applyLeaveRequestHandler);

};
