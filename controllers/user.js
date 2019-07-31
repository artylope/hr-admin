module.exports = function (db){

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
   let indexRedirectHandler = async function(request, response){
       response.render('login');

       //if cookie says user is logged in,
       //redirect to profile
       //else
       //redirect to login
   };

  let loginRequestHandler = async function(request, response){
      response.render('login');

      //if cookie says user is logged in,
      //redirect to profile
      //else
      //redirect to login
  };

  let authenticateRequestHandler = async function(request, response){

      let input = request.body;
      let result = await db.user.authenticateUser(input.username, input.password);
      console.log('input');
      console.log(input);
      console.log('result');
      console.log(result);

      if (result.length === 1) {
          response.cookie('username', result[0].username);
          response.cookie('loggedIn', true);
          response.redirect('/admin');
      } else {
          response.send('Login Failure');
      }

  };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    indexRedirectHandler,
    loginRequestHandler,
    authenticateRequestHandler
  };

}
