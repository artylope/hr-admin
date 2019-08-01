/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = function (dbPoolInstance){

  // `dbPoolInstance` is accessible within this function scope

  let getAllEmployees = async function() {
        try {
            const queryString = `SELECT employees.id, employees.staff_name, employees.staff_phone, employees.staff_email, employees.organisation_id, organisations.organisation_name
                                 FROM employees
                                 INNER JOIN organisations
                                 ON (employees.organisation_id = organisations.id)`;
            let result = await dbPoolInstance.query(queryString);
            return result.rows;

        } catch(e) {
            console.log('getAllEmployees: ' + e);
        }
    };

  let getOneEmployee = async function(userId) {
        try {

            const values = [userId];
            const queryString = `
                                SELECT employees.id, employees.staff_name, employees.staff_phone, employees.staff_email, employees.organisation_id, organisations.organisation_name
                                FROM employees
                                INNER JOIN organisations
                                ON (employees.organisation_id = organisations.id)
                                WHERE employees.id = $1
                                `;
            let result = await dbPoolInstance.query( queryString, values);
            console.log('get one employee');
            console.log(result.rows);
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
