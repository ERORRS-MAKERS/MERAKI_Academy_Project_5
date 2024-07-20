-- Create a table called **roles** in the database
CREATE TABLE roles (
  id SERIAL NOT NULL,
  role VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Create a table called **permissions** in the database
CREATE TABLE permissions (
  id SERIAL NOT NULL,
  permission VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

-- Create a table called **role_permission** in the database
CREATE TABLE role_permission (
  id SERIAL NOT NULL,
  role_id INT,
  permission_id INT,
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (permission_id) REFERENCES permissions(id),
  PRIMARY KEY (id)
);

-- Create a table called **users** in the database
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    national_id INT NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INTEGER,
    email VARCHAR(100) UNIQUE NOT NULL,
    role_id INTEGER REFERENCES roles(id),
    is_deleted SMALLINT DEFAULT 0,
    FOREIGN KEY (role_id) REFERENCES roles(id),
 );


-- Create a table called **departments ** in the database
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    salary INT,
    description TEXT,
    is_deleted SMALLINT DEFAULT 0,

);

-- Create a table called **doctors** in the database
CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department_id INT,
    specialist VARCHAR(100) NOT NULL,
    description VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    is_deleted SMALLINT DEFAULT 0,
    FOREIGN KEY (department_id) REFERENCES departments(id),
);

-- Create a table called **appointments** in the database
CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL ,
    doctor_id INT NOT NULL,
    time TIMESTAMP NOT NULL,
    notes TEXT
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(id),
);

-- Create a table called **doctors_request** in the database
CREATE TABLE doctors_request (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL ,
    doctor_id INT NOT NULL,
    department_id INT NOT NULL ,
    test VARCHAR(255),
    status BOOLEAN NOT NULL DEFAULT ("pending"),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(id),
    FOREIGN KEY (department_id) REFERENCES departments(id),
);

-- Create a table called **medical_reports** in the database
CREATE TABLE medical_reports (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  doctor_id INT NOT LL,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(255),
  time TIMESTAMP NOT NULL
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (doctor_id) REFERENCES doctors(id),
);

-- Create a table called **medical_reports** in the database
CREATE TABLE pharmacy (
   id SERIAL PRIMARY KEY,
    pharmacist_name  VARCHAR(100) NOT NULL,
);

-- Create a table called **prescription** in the database
CREATE TABLE prescription(
    id SERIAL PRIMARY KEY,
    doctor_id INT,
    user_id INT,
    pharmacist_id INT,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    status BOOLEAN NOT NULL DEFAULT FALSE
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (doctor_id) REFERENCES doctors(id),
    FOREIGN KEY (pharmacist_id) REFERENCES pharmacy(id),
);


-- create roles and permessions 
INSERT INTO
  roles (role)
VALUES
  ('Admin');

INSERT INTO
  permissions (permission)
VALUES
  ('CREATE');

INSERT INTO
  permissions (permission)
VALUES
  ('CREATE');

INSERT INTO
  role_permission (role_id, permission_id)
VALUES
  (1, 1);

INSERT INTO
  role_permission (role_id, permission_id)
VALUES
  (1, 2);