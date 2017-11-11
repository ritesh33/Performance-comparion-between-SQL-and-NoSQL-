// 1. delete from employee where emp_no 29004

db.employees.remove({"emp_no":29004})

// 2. dropping the titles table

db.titles.drop()