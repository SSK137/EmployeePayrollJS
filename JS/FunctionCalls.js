let isUpdate = false; 
let employPayrollObject = {};
window.addEventListener('DOMContentLoaded', (event) => {
    validateDate();
    validatename();
    salaryrange();
    checkForUpdate();
    
});
function salaryrange(){
    const salary = document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        salary.addEventListener('input', function () {
            output.textContent = salary.value;
});

}
function validatename(){
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        if(name.value.length==0){
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayroll()).name = name.value;
             textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
} 

function validateDate(){
    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');

    day.addEventListener('input',checkdate)
    month.addEventListener('input',checkdate)
    year.addEventListener('input',checkdate)

}

function checkdate(){
    const dateError = document.querySelector('.date-error');
 try{
    let date=day.value+""+month.value+""+year.value;
    checkStartDate(date);
    dateError.textContent="";
 }
 catch(e)
 {
    dateError.textContent=e;
 }
}

checkStartDate=(date)=>{
    let curruntDate = new Date();
    let startDate=new Date(date)
    let dd=curruntDate.getTime();
    let aa=startDate.getTime();
    if(startDate > curruntDate)
    throw "Start Date iS future Date";
    const diff = Math.abs(curruntDate.getTime() - startDate.getTime());
    if(diff/(1000*60*60*24)>30)
    throw "Start Date is beyond 30 Days";
}

const checkForUpdate = () => {
    const employeePayrollJSONData = localStorage.getItem("editEmp");
    isUpdate = employeePayrollJSONData ? true : false;
    if (!isUpdate) return;
    employPayrollObject = JSON.parse(employeePayrollJSONData);
    setForm();
}
const setForm = () => {

    setValue('#name', employPayrollObject._name);
    setSelectedValue('[name = profile]', employPayrollObject._profilePic);
    setSelectedValue('[name = gender]', employPayrollObject._gender);
    setSelectedValue('[name = department]', employPayrollObject._department);
    setValue('#salary', employPayrollObject._salary);
    setTextValue('.salary-output', employPayrollObject._salary);
    let date = employPayrollObject._startDate.split(" ");
    setValue('#day', date[0]);
    setValue('#month', date[1]);
    setValue('#year', date[2]);
    setValue('#notes', employPayrollObject._note);
}

const setSelectedValue = (propertyValue, value) => {
    let allItem = document.querySelectorAll(propertyValue);
    allItem.forEach(item => {
        if (Array.isArray(value)) {
            if (value.includes(item.value)) {
                item.checked = true;
            }
        } else if (item.value === value) {
            item.checked = true;
        }
    });
}