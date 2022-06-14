window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input', function () {
        try {
            (new EmployeePayroll()).name = name.value;
             textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });

    const salary = document.querySelector('#salary');
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });

});
class EmployeePayroll {
    get id() { return this._id; }

    set id(id) {
        this.id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRgx = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRgx.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }
    get profilePic() {
        return this._profilePic;
    }
    set profilePic(profilePic) {
        this._profilePic = profilePic;
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        this._gender = gender;
    }
    get department() {
        return this._department;
    }
    set department(department) {
        this._department = department;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
    get note() {
        return this._note;
    }
    set note(note) {
        this._note = note;
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        this._startDate = startDate;
    }

    toString() {
        return "id=" + this.id + ", name='" + this.name + ", gender=" + this.gender +
            ", profilePic=" + this.profilePic + ", department=" + this.department +
            ",salary=" + this.salary + ", startDate=" + empDate + ", note=" + this.note;
    }
}