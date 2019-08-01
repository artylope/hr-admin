INSERT INTO employees(username, password, staff_name, staff_email, staff_phone, organisation_id) VALUES ('staff', 'password','Tan Ming Ming', 'tanmingming@email.com', '62001211', 1);
INSERT INTO employees(username, password, staff_name, staff_email, staff_phone, organisation_id) VALUES ('boss', 'password','Boss Lim', 'bosslim@email.com', '62001231', 1);

INSERT INTO manager_staff(manager_id, staff_id) VALUES (2, 1);
INSERT INTO manager_staff(manager_id, staff_id) VALUES (2, 2);

INSERT INTO organisations(organisation_name) VALUES ('Govtech');
