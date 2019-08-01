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
