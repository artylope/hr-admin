/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = function (dbPoolInstance){

  // `dbPoolInstance` is accessible within this function scope

  let submitLeave = async function() {
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


  return {
    submitLeave
  };
};
