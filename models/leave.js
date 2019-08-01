/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = function (dbPoolInstance){

  // `dbPoolInstance` is accessible within this function scope

  let submitLeave = async function(userId,leave) {
        try {
            console.log('in submit leave model');
            console.log(leave);
            const values = [userId, leave.leave_type, leave.manager_id, leave.date_start, leave.date_end, 3, leave.request_status]
            const queryString = `
                                  INSERT INTO leave (staff_id, leave_type, manager_id, date_start, date_end, days_count, request_status)
                                  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING ID;
                                `;
            let result = await dbPoolInstance.query(queryString,values);
            return result.rows;

        } catch(e) {
            console.log('submit leave: ' + e);
        }
    };


  return {
    submitLeave
  };
};
