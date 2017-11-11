-- 1. select the lsit of employees whse employee_id >=290017 and from_date >= "2000-09-17"

select count(*) from titles where emp_no >="290017" and from_date >= "2000-09-17";


-- 2. select list of employyes whse to date is greater than 2000-09-17

select count(*) from titles where to_date >= "2000-09-17";


-- 3. number of male and female 

select count(*) from employees group by gender;

-- 4.select the male employees who got hired after 1988-06-25

select count(*) from employees where gender = 'F' and hire_date >= '1988-06-25';

-- 5.select the male employee whose salary is greater thanor equal to 500000

select count(*)  from (select sum(salary) as total,emp_no from salaries group by emp_no) as T1, employees E where T1.emp_no=E.emp_no and T1.total >= '500000' and E.gender = 'M'; 





