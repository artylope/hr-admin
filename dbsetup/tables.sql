CREATE TABLE IF NOT EXISTS employees (
    id SERIAL PRIMARY KEY,
    username TEXT,
    password TEXT,
    name TEXT,
    email TEXT,
    phone TEXT,
    organisation INTEGER
);

CREATE TABLE IF NOT EXISTS manager_staff (
    id SERIAL PRIMARY KEY,
    manager_id INTEGER,
    staff_id INTEGER
);

CREATE TABLE IF NOT EXISTS organisations (
    id SERIAL PRIMARY KEY,
    name TEXT
);
