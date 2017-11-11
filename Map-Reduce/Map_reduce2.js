//MAPREDUCE USED FOR COMBINING THE EMP_NO FIRST_NAME, LAST_NAME, GENDER, SALARY, HIRE_DATE, NUMBER OF DEPARTMENT EMPLOYEED WORKED, TOTAL SALARY

var mapEmp1 = function() {
    
   
    emit(this.emp_no,{emp_no:this.emp_no,first_name: this.first_name,last_name:this.last_name,gender:this.gender,salary:0,dept_value:0,hire_date:this.hire_date});
}

var mapdept = function() {
  
    emit(this.emp_no,{emp_no:0,first_name: 0,last_name:0,gender:0,salary: 0,dept_value:1,hire_date:0});
};

var mapSalaries1 = function() {
  
    emit(this.emp_no,{emp_no:0,first_name: 0,last_name:0,gender:0,salary: this.salary,dept_value:0,hire_date:0});
};

 var func = function(k, values){
	   var out={emp_no:0,first_name: 0,last_name:0,gender:0,salary:0,dept_value:0,hire_date:0}; 
        values.forEach(function(value)
		{ 
		out.emp_no=value.emp_no;
		out.first_name =value.first_name;
		out.last_name=value.last_name;
		out.gender=value.gender;
		out.salary = out.salary+value.salary;
		out.dept_value=out.dept_value+value.dept_value;
		out.hire_date= value.hire_date;
		});

return out;		
};



db.employees.mapReduce(mapEmp1, func, {"out": {"reduce": "emp21"}});

db.salaries.mapReduce(mapSalaries1, func, {"out": {"reduce": "emp21"}});

db.dept_emp.mapReduce(mapdept,func,{"out":{"reduce":"emp21"}});