// 1. select the lsit of employees whse employee_id >=290017 and from_date >= "2000-09-17"

db.titles.find({$and:[{"emp_no":{$gte:290017}},{"from_date":{$gte:"2000-09-17"}}]})

// 2. select list of employyes whse to date is greater than 2000-09-17

db.titles.find({"to_date":{$gte:"2000-09-17"}})

// 3. number of male and female 

db.employees.aggregate([{ $group:{_id:"$gender", total:{$sum: 1}}}])

// 4.select the male employees who got hired after 1988-06-25

db.employees.find({$and:[{gender : 'F'},{"hire_date": {$gte:("1988-06-25")}}]})

// 5.select the male employee whose salary is greater thanor equal to 500000

db.emp16.find({$and:[{"value.gender":"M"},{"value.salary":{$gte:500000}}]}).count()