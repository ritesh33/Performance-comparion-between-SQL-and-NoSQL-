// 1. Update the salary by of employess whose salary is greater than equal to 50000  (abount inc)

db.salaries.update({salary:{$gte:50000}},{$inc:{"salary":10}},{multi:true})

// 2. update the first name of the employee whose first name is Georgi

db.employees.update({first_name:{$eq:"Georgi"}},{$set:{"first_name":"zzzz"}},{multi:true})

// 3.Update the employess first name using the employee_id (primary id)

db.employees.update({"emp_no":{$eq:20120}},{$set:{"first_name":"zzzz"}})

// 4.update the salary by 50000 whose emp_no 10001 and from date : 2002-06-22  (and operation)

db.salaries.update({$and:[{"emp_no":10001},{"from_date":{$eq:"2002-06-22"}}]},{$set:{"salary":"50000"}})

