document.addEventListener("DOMContentLoaded", function() {
    checkLogin();
    loadEmployees();
});


function checkLogin() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "index.html";
    }
}


function showForm() {
    document.getElementById("formContainer").style.display = "block";
    document.getElementById("tableContainer").style.display = "none";
}


function showTable() {
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("tableContainer").style.display = "block";
    loadEmployees();
}


document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    let newEmployee = {
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        salary: document.getElementById("salary").value,
        age: document.getElementById("age").value,
        address: document.getElementById("address").value,
        designation: document.getElementById("designation").value,
        experience: document.getElementById("experience").value
    };

    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(employees));

    alert("Employee added successfully!");
    document.getElementById("employeeForm").reset();
});


function loadEmployees() {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    let tableBody = document.querySelector("#employeeTable tbody");
    tableBody.innerHTML = "";

    employees.forEach((emp, index) => {
        let row = tableBody.insertRow();
        row.innerHTML = `
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td class="salary">${emp.salary}</td>
            <td>${emp.age}</td>
            <td>${emp.address}</td>
            <td>${emp.designation}</td>
            <td class="experience">${emp.experience}</td>
            <td><button onclick="deleteEmployee(${index})">Delete</button></td>
        `;


        let experienceCell = row.querySelector(".experience");
        if (parseFloat(emp.experience) <= 2) {
            experienceCell.style.backgroundColor = "#ff4d4d"; // Red
            experienceCell.style.color = "#fff";
        }
    });
}


function deleteEmployee(index) {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    loadEmployees();
}


function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "index.html";
}
