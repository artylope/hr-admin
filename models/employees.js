/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = function (dbPoolInstance){

  // `dbPoolInstance` is accessible within this function scope

  //get a list of all employees to show in the directory
  let getAllEmployees = async function() {
        try {
            const queryString = `
                                SELECT employees.id, employees.staff_name, employees.staff_phone, employees.staff_email, employees.organisation_id, organisations.organisation_name, manager_staff.manager_id
                                FROM employees
                                INNER JOIN organisations
                                ON (employees.organisation_id = organisations.id)
                                INNER JOIN manager_staff
                                ON (employees.id = manager_staff.staff_id)
                                `;
            let result = await dbPoolInstance.query(queryString);
            return result.rows;

        } catch(e) {
            console.log('getAllEmployees: ' + e);
        }
    };

  //get a single employee details by id, will also append manager_id and the organisation's name.
  let getOneEmployee = async function(userId) {
        try {

            const values = [userId];
            const queryString = `
                                  SELECT employees.id, employees.staff_name, employees.staff_phone, employees.staff_email, employees.organisation_id, organisations.organisation_name, manager_staff.manager_id
                                  FROM employees
                                  INNER JOIN organisations
                                  ON (employees.organisation_id = organisations.id)
                                  INNER JOIN manager_staff
                                  ON (employees.id = manager_staff.staff_id)
                                  WHERE employees.id = $1
                                `;
            let result = await dbPoolInstance.query( queryString, values);
            // console.log('get one employee');
            // console.log(result.rows);
            return result.rows;

        } catch(e) {
            console.log('getOneEmployee: ' + e);
        }
    };

    //get details of the manager by passing in the managerId
    let getManager = async function(managerId) {
          try {

              const values = [managerId];
              const queryString = `
                                  SELECT * FROM employees
                                  WHERE id = $1
                                  `;
              let result = await dbPoolInstance.query( queryString, values);
              // console.log('get one employee');
              // console.log(result.rows);
              return result.rows;

          } catch(e) {
              console.log('getManager: ' + e);
          }
      };

  return {
    getAllEmployees,
    getOneEmployee,
    getManager
  };
};
