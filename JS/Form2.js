window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {

    const headerHtml = "<tr><th>Profile</th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
            <tr>
                <td><img class="profile" alt="" src="${empPayrollData._profilePic}">
                </td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                    <img id="1" src="../Assets/Icons/delete-black-18dp.svg">
                    <img id="2" src="../Assets/Icons/create-black-18dp.svg">
                </td>
            </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Saurabh Kodam',
            _gender: 'male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '400000',
            _startDate: '26 March 2022',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '../Assets/profile-images/Ellipse -8.png'
        },
        {
            _name: 'Sneha Bhokare',
            _gender: 'Female',
            _department: [
                'Sales',
                'HR'
            ],
            _salary: '500000',
            _startDate: '26 March 2022',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../Assets/profile-images/Ellipse -1.png'
        },
        {
            _name: 'Ashish Mashal',
            _gender: 'Male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '400000',
            _startDate: '25 mar 2022',
            _note: '',
            _id: new Date().getTime() + 1,
            _profilePic: '../Assets/profile-images/Ellipse -5.png'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}