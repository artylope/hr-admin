const helper = require('../helper');

module.exports = function (db){

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
   let indexRedirectHandler = async function(request, response){
     try {
       if (helper.checkCookiesForLogin(request.cookies) === true) {
           console.log(request.cookies);

           response.redirect('/home');
       } else {
           response.redirect('/login');
       }

     } catch(e) {
         console.log('indexRedirectHandler: ' + e);
     }

   };

  let loginRequestHandler = async function(request, response){
      try {

        response.render('login');

        if (helper.checkCookiesForLogin(request.cookies) === true) {
            console.log(request.cookies);
            response.redirect('/home');
        } else {
            response.render('login');
        }

      } catch(e) {
          console.log('loginRequestHandler : ' + e);
      }


  };

  let authenticateRequestHandler = async function(request, response){
      try {
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
      } catch(e) {
          console.log('authenticateRequestHandler: ' + e);
      }


  };

  let logoutRequestHandler = function(request, response){
      try {

        // console.log('in logoutRequestHandler ');
        // console.log(request.cookies);

        //todo: fix cookie, cookie does not clear at the moment
        if (helper.checkCookiesForLogin(request.cookies) === true) {
          response.clearCookie('username');
          response.clearCookie('logged_in');
          response.clearCookie('user_id');
          response.clearCookie('manager_id');
        }

        response.redirect('/login');

      } catch(e) {
          console.log('logoutRequestHandler: ' + e);
      }

  }

  let errorRedirectHandler = function(request, response){
      try {

        response.render('error');

      } catch(e) {
          console.log('logoutRequestHandler: ' + e);
      }

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
    logoutRequestHandler,
    errorRedirectHandler
  };

}
