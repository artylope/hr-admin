INSERT INTO employees(username, password, name, email, phone, organisation) VALUES ('staff', 'password','Tan Ming Ming Staff', 'tanmingming@email.com', '62001211', 1);
INSERT INTO employees(username, password, name, email, phone, organisation) VALUES ('boss', 'password','Boss Lim', 'bosslim@email.com', '62001231', 1);

INSERT INTO manager_staff(manager_id, staff_id) VALUES (2, 1);

INSERT INTO organisations(name) VALUES ('Govtech');
