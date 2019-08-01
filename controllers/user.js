const helper = require('../helper');

module.exports = function (db){

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
   let indexRedirectHandler = async function(request, response){

       //if cookie says user is logged in,
       //redirect to profile
       //else
       //redirect to login

       if (helper.checkCookiesForLogin(request.cookies) === true) {
           console.log(request.cookies);

           response.redirect('/home');
       } else {
           response.redirect('/login');
       }


   };

  let loginRequestHandler = async function(request, response){
      response.render('login');

      if (helper.checkCookiesForLogin(request.cookies) === true) {
          console.log(request.cookies);
          response.redirect('/home');
      } else {
          response.render('login');
      }
  };

  let authenticateRequestHandler = async function(request, response){

      let input = request.body;
      let result = await db.user.authenticateUser(input.username, input.password);
      // console.log('input');
      // console.log(input);
      // console.log('result');
      // console.log(result);

      if (result.length === 1) {
          response.cookie('username', result[0].username);
          response.cookie('user_id', result[0].id);
          response.cookie('logged_in', true);
          response.redirect('/home');
      } else {
          response.send('Login Failure');
      }

  };

  let logoutRequestHandler = function(request, response){

    // console.log('in logoutRequestHandler ');
    // console.log(request.cookies);

    //todo: fix cookie, cookie does not clear at the moment
    if (helper.checkCookiesForLogin(request.cookies) === true) {
      response.clearCookie('username');
      response.clearCookie('logged_in');
      response.clearCookie('user_id');
    }

    response.redirect('/login');
  }

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    indexRedirectHandler,
    loginRequestHandler,
    authenticateRequestHandler,
    logoutRequestHandler
  };

}
