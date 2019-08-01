INSERT INTO employees(username, password, staff_name, staff_email, staff_phone, organisation_id) VALUES ('staff', 'password','Tan Ming Ming', 'tanmingming@email.com', '62001211', 1);
INSERT INTO employees(username, password, staff_name, staff_email, staff_phone, organisation_id) VALUES ('boss', 'password','Boss Lim', 'bosslim@email.com', '62001231', 1);

INSERT INTO manager_staff(manager_id, staff_id) VALUES (2, 1);
INSERT INTO manager_staff(manager_id, staff_id) VALUES (2, 2);

INSERT INTO organisations(organisation_name) VALUES ('Govtech');


INSERT INTO leave (staff_id, leave_type, manager_id, date_start, date_end, days_count, request_status)
VALUES (2, 'medical leave', 2, '2019-08-01', '2019-08-03', 2, 'submitted') RETURNING ID;
