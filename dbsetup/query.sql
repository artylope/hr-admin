-- Return a query with organisation details
SELECT employees.id, employees.staff_name, employees.staff_phone, employees.staff_email, employees.organisation_id, organisations.organisation_name, manager_staff.manager_id
FROM employees
INNER JOIN organisations
ON (employees.organisation_id = organisations.id)
INNER JOIN manager_staff
ON (employees.id = manager_staff.staff_id)
WHERE employees.id = 1;
-- optional
WHERE employees.id = 1;



-- Return a query with organisation details, boss details
SELECT employees.id, employees.staff_name, manager_staff.manager_id
FROM employees
INNER JOIN manager_staff
ON (employees.id = manager_staff.staff_id)
WHERE employees.id = 1;
-- optional
WHERE employees.id = 1;


-- Return a leave query with organisation details, boss details
SELECT leave.staff_id, employees.staff_name, leave.manager_id, leave.date_start, leave.date_end, leave.days_count, leave.request_status, leave.created_at, leave.updated_at
FROM leave
INNER JOIN employees
ON (leave.staff_id = employees.id)
WHERE employees.id = 1;
-- optional
WHERE employees.id = 1;


SELECT leave.staff_id, leave.manager_id, employees.staff_name, leave.date_start, leave.date_end, leave.days_count, leave.request_status, leave.created_at, leave.updated_at
FROM leave
INNER JOIN employees
ON (leave.manager_id = employees.id)
WHERE employees.id = 1;
-- optional
WHERE employees.id = 1;

--
-- INSERT INTO leave_group (staff_id, leave_type, manager_id, request_status, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6);
--
--
-- INSERT INTO students (name, phone, email) VALUES ('Adam Aims', '(415)555-5555', 'adam@example.com'),('Janet Jones', '(415)123-5555', 'janet@example.com') RETURNING ID;
