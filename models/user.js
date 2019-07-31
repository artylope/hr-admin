/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = function (dbPoolInstance){

  // `dbPoolInstance` is accessible within this function scope

  let authenticateUser = async function(username, password) {
        try {
            // console.log('in user model, authenticateuser, input is');
            // console.log('username ' + username);
            // console.log('password ' + password);
            const values = [username, password];
            const queryString = `SELECT * FROM employees
                                WHERE username = $1 AND password= $2`;

            let result = await dbPoolInstance.query( queryString, values);

            // console.log('in user model, authenticateuser, user is');
            // console.log(result.rows);

            return result.rows;

        } catch(e) {
            console.log('authenticateUser: ' + e);
        }
    };

  return {
    authenticateUser
  };
};
