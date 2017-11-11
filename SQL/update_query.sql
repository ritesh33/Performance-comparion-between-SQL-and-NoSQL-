--1. Update the salary by of employess whose salary is greater than equal to 50000  (abount inc)

update salaries set salary = salary + 10 where salary >='50000';

--2. update the first name of the employee whose first name is Georgi

update employees set first_name = "zzzz" where first_name ="Georgi";

--3.Update the employess first name using the employee_id (primary id)

update employees set first_name ="zzzz" where emp_no ="20120";

--4.update the salary by 50000 whose emp_no 10001 and from date : 2002-06-22  (and operation)

update salaries set salary = 50000 where emp_no ="10001" and from_date = "2002-06-22";






