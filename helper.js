module.exports.checkCookiesForLogin = function (cookies) {
    console.log('what is in my cookies');
    console.log(cookies);

    //need to come back to this to check user
    if(cookies.logged_in === 'true'){
      return true;
    } else {
      return false;
    }

}
