var moment = require('moment-timezone');

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = function (dbPoolInstance){

  // `dbPoolInstance` is accessible within this function scope

  //see a list of leave that the user needs to review (as a manager of another staff) in the homepage
  let leaveToApprove = async function(userId) {
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
            console.log('leave to approve: ' + e);
        }
    };

  //see a list of leave that the user has applied, to be used in the home page
  let leaveApplied = async function(userId) {
        try {
            console.log('in leave applied');
            console.log(userId);

            const values = [userId];

            const queryString = `
                                  SELECT * FROM leave
                                  WHERE staff_id = $1
                                `;

            let result = await dbPoolInstance.query(queryString,values);
            return result.rows;

        } catch(e) {
            console.log('leave applied: ' + e);
        }
    };

  //able to submit leave request to your manager
  let submitLeave = async function(userId,managerId,leave) {
        try {
            console.log('in submit leave model');
            console.log(leave);
            let createdAt = moment().tz("Asia/Singapore").format('YYYY-MM-DD hh:mm:ss');
            let updatedAt = moment().tz("Asia/Singapore").format('YYYY-MM-DD hh:mm:ss');
            const values = [userId, leave.leave_type, managerId, leave.date_start, leave.date_end, 3, leave.request_status, createdAt, updatedAt]
            const queryString = `
                                  INSERT INTO leave (staff_id, leave_type, manager_id, date_start, date_end, days_count, request_status, created_at, updated_at)
                                  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING ID;
                                `;
            let result = await dbPoolInstance.query(queryString,values);
            return result.rows;

        } catch(e) {
            console.log('submit leave: ' + e);
        }
    };

    //able to retrieve the single leave request for approval purpose
    //pass in the id of the leave request and display the details.


  return {
    submitLeave,
    leaveApplied,
    leaveToApprove
  };
};
