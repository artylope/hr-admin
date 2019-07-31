/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = function (dbPoolInstance){

  // `dbPoolInstance` is accessible within this function scope

  let getAllEmployees = async function() {
        try {
            const queryString = `SELECT * FROM employees`;
            let result = await dbPoolInstance.query(queryString);
            return result.rows;

        } catch(e) {
            console.log('getAllEmployees: ' + e);
        }
    };

  let getOneEmployee = async function(input) {
        try {

            const values = [1];
            const queryString = `SELECT * FROM employees
                                WHERE id = $1`;
            let result = await dbPoolInstance.query( queryString, values);
            return result.rows;

        } catch(e) {
            console.log('getOneEmployee: ' + e);
        }
    };

  return {
    getAllEmployees,
    getOneEmployee
  };
};
