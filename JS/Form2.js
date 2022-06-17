window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const HeaderHtml = "<tr><th>Profile</th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    const innerHtml = `${HeaderHtml}
        
                <tr>
                    <td><img class="profile" alt="" src="../Assets/profile-images/Ellipse -8.png">
                    </td>
                    <td>Saurabh Kodam</td>
                    <td>Male</td>
                    <td>
                        <div class='dept-label'>Engineer</div>
                        <div class='dept-label'>Finance</div>
                    </td>
                    <td>3000000</td>
                    <td>28th March 2022</td>
                    <td>
                        <img id="1" src="../Assets/Icons/delete-black-18dp.svg">
                        <img id="1" src="../Assets/Icons/create-black-18dp.svg">
                    </td>
                </tr>
                <tr>
                <td><img class="profile" alt="" src="../Assets/profile-images/Ellipse -1.png">
                </td>
                <td>Sneha Bhokare</td>
                <td>Female</td>
                <td>
                    <div class='dept-label'>HR</div>
                    <div class='dept-label'>Finance</div>
                </td>
                <td>2000000</td>
                <td>26th March 2022</td>
                <td>
                    <img id="2" src="../Assets/Icons/delete-black-18dp.svg">
                    <img id="2" src="../Assets/Icons/create-black-18dp.svg">
                </td>
            </tr>
                `;
    document.querySelector('#display').innerHTML = innerHtml;
}