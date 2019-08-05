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
    staff_id INTEGER,
    manager_id INTEGER

);

CREATE TABLE IF NOT EXISTS organisations (
    id SERIAL PRIMARY KEY,
    organisation_name TEXT
);

CREATE TABLE IF NOT EXISTS leave (
    id SERIAL PRIMARY KEY,
    staff_id INTEGER,
    leave_type TEXT,
    manager_id INTEGER,
    date_start DATE,
    date_end DATE,
    days_count FLOAT,
    request_status TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);


-- new idea for leave
CREATE TABLE IF NOT EXISTS leave_group (
    id SERIAL PRIMARY KEY,
    staff_id INTEGER,
    leave_type TEXT,
    manager_id INTEGER,
    request_status TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE IF NOT EXISTS calendar (
    id SERIAL PRIMARY KEY,
    calendar_date DATE,
    calendar_desc TEXT,
    calendar_type TEXT,
    calendar_day  INTEGER,
    calendar_year INTEGER
);


CREATE TABLE IF NOT EXISTS leave_days (
    id SERIAL PRIMARY KEY,
    leave_group_id INTEGER,
    leave_date DATE,
    leave_block TEXT
);
