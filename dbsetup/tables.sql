CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    staff_name TEXT,
    staff_email TEXT,
    staff_phone TEXT,
    organisation_id INTEGER
);

CREATE TABLE IF NOT EXISTS manager_staff (
    id SERIAL PRIMARY KEY,
    manager_id INTEGER,
    staff_id INTEGER
);

CREATE TABLE IF NOT EXISTS organisations (
    id SERIAL PRIMARY KEY,
    organisation_name TEXT
);
