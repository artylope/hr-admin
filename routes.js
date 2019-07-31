module.exports = function (app, allModels){

  const employeesController = require('./controllers/employees')(allModels);

  app.get('/admin', employeesController.employeesRequestHandler);
};
