USE emp_cmsa_db;

INSERT INTO department (name)
VALUES 
  ('Security'), 
  ('Engineering'), 
  ('Human Resources'), 
  ('Customer Service');

INSERT INTO roles (title, salary, department_id) 
VALUES 
  ('Security Analyst', 100000.00, 2), 
  ('Junior Developer', 80000.00, 3), 
  ('HR Manager', 150000.00, 2), 
  ('Software Engineer', 120000.00, 2), 
  ('Account Manager', 145000.00, 4), 
  ('Representative', 125000.00, 3), 
  ('Consultant', 250000.00, 2), 
  ('Advisor', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
  ('McKenzie', 'Kroffman', 2, 1), 
  ('Brandon', 'Ali', 2, 1), 
  ('Jackson', 'Harlem', 1, 3), 
  ('Natalie', 'Portman', 1, 3), 
  ('Gedeva', 'Suarez', 5, NULL), 
  ('Alexander', 'Sandidge', 7, 3), 
  ('Alam', 'Ford', 7, 2), 
  ('Carly', 'Red', 8, 7);