var moment = require('moment-timezone');

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = function (dbPoolInstance){

  // `dbPoolInstance` is accessible within this function scope

  //see a leave group
  let createLeaveGroup = async function(obj) {
        try {
            console.log('in create leave group');
            console.log(obj);
            let createdAt = moment().tz("Asia/Singapore").format('YYYY-MM-DD hh:mm:ss');
            let updatedAt = moment().tz("Asia/Singapore").format('YYYY-MM-DD hh:mm:ss');

            const values = [obj.staff_id, obj.leave_type, obj.manager_id, obj.request_status];

            const queryString = `
                                  INSERT INTO leave_group (staff_id, leave_type, manager_id, request_status) VALUES ($1, $2, $3, $4);
                                `;

            dbPoolInstance.query(queryString, values);
            // return result.rows;

        } catch(e) {
            console.log('createLeaveGroup: ' + e);
        }
    };



  return {
    createLeaveGroup
  };
};
