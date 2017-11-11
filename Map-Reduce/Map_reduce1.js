//1. MAPREDUCE FUNCTION FOR COMBINING THE FIRST_NAME, LAST_NAME, HIRE_DATE, EMP_NO, GENDER FROM EMPLOYEES AND THE SALARY FROM SALARIES

var mapEmployee = function() {
    
   
    emit(this.emp_no,{first_name: this.first_name,last_name:this.last_name,gender:this.gender,salary:0,hire_date:this.hire_date}); // RETURN KEY AND VALUE
}

var mapSalaries = function() {
  
    emit(this.emp_no,{first_name: 0,last_name:0,gender:0,salary:this.salary,hire_date:0});  // RETURN KEY AND VALUE
};

 var reduce = function(k, values){
	   var out={first_name: 0,last_name:0,gender:0,salary:0,hire_date:0}; 
        values.forEach(function(value)
		{ 
		
		out.first_name =value.first_name;
		out.last_name=value.last_name;
		out.gender=value.gender;
		out.salary = out.salary+value.salary;
		out.hire_date= value.hire_date;
		});

return out;		
};



db.employees.mapReduce(mapEmployee, reduce, {"out": {"reduce": "result"}});


db.salaries.mapReduce(mapSalaries, reduce, {"out": {"reduce": "result"}});
