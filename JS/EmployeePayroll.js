const salary = document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        salary.addEventListener('input', function () {
            output.textContent = salary.value;
});



const textError = document.querySelector('.text-error');
function save(){
    try {
        let employeePayroll = EmployeePayrollData();
    }catch (e) {
        textError.textContent = "Name Is Incorrect" ;
        }
}
const EmployeePayrollData = () => {
    let employeePayroll = new EmployeePayroll();
    try{
        employeePayroll.name =  document.querySelector('#name').value;
              
    } catch (e) {
        textError.textContent = "Name Is Incorrect" ;
        }
        employeePayroll.salary =  document.querySelector('#salary').value;
    
    return employeePayroll;
}
class EmployeePayroll{
   
    get name(){ return this._name; }
    set name(name){ 
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(name)){
        this._name = name;
        alert(this.toString());
    }
    else{
        throw('Name is Incorrect!'); 
    }
}
    get salary(){ return this._salary; }
    set salary(salary){ 
        this._salary=salary;
    }
    toString(){                       
        return "Name :  "+this.name;
    }
}
