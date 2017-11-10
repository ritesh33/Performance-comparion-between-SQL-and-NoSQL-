// This script is used to create the index (primary key) for each collections (tables)

db.employees.createIndex({"emp_no":1})
db.department.createIndex({"dept_no":1})
db.dept_man.createIndex({"emp_no":1})
db.dept_man.createIndex({"dept_no":1})
db.dept_emp.createIndex({"emp_no":1})
db.dept_emp.createIndex({"dept_no":1})
db.titles.createIndex({"emp_no":1})
db.titles.createIndex({"titles":1})
db.titles.createIndex({"from_date":1})
db.salaries.createIndex({"emp_no":1})
db.salaries.createIndex({"from_date":1})
