/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = function (dbPoolInstance){

  // `dbPoolInstance` is accessible within this function scope

  let leaveToApprove = async function(userId) {
    //if you are the manager you can see a list of leaves that people applied to you for you to approve
        try {
            console.log('in leave to approve');
            console.log(userId);

            const values = [userId];

            const queryString = `
                                  SELECT * FROM leave
                                  WHERE manager_id = $1 AND request_status = 'submitted'
                                `;

            let result = await dbPoolInstance.query(queryString,values);
            return result.rows;

        } catch(e) {
            console.log('submit leave: ' + e);
        }
    };

  let submitLeave = async function(userId,managerId,leave) {
        try {
            console.log('in submit leave model');
            console.log(leave);
            const values = [userId, leave.leave_type, managerId, leave.date_start, leave.date_end, 3, leave.request_status]
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
    submitLeave,
    leaveToApprove
  };
};
