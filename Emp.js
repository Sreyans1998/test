let empdata = [];
let depData = [];

function addEmp(){
    if(localStorage.getItem('empLSData') == null){
        localStorage.setItem('empLSData', '[]');
    }
    console.log("sreyans");
    let formData = getEmpData();
    empData = JSON.parse(localStorage.getItem('empLSData'));
    empData.push(formData);
    localStorage.setItem('empLSData', JSON.stringify(empData));
    resetEmpData();
}
function getEmpData(){
    let formData = {};
    formData["empName"] = document.getElementById("empName").value;
    formData["empAge"] = document.getElementById("empAge").value;
    formData["empDesignation"] = document.getElementById("empDesignation").value;
    formData["empDepartment"] = document.getElementById("empDepartment").value;
    return formData;
}
// function newRecord(dataSet){
//     console.log(dataSet);
//     let empList = dataSet;
//     empList.forEach(element, i => {
//         let table = document.getElementsByTagName("tbody").getElementsByTagName('tr')[i];
//         let newRow = table.insertRow(table.length);
//         cell1 = newRow.insertCell(0);
//         cell1.innerHTML = element.empName;
//         cell1 = newRow.insertCell(1);
//         cell1.innerHTML = element.empAge;
//         cell1 = newRow.insertCell(2);
//         cell1.innerHTML = element.empDesignation;
//         cell1 = newRow.insertCell(3);
//         cell1.innerHTML = element.empDepartment;
//     });
// }
function resetEmpData(){
    document.getElementById("empName").value = "";
    document.getElementById("empAge").value = "";
    document.getElementById("empDesignation").value = "";
    document.getElementById("empDepartment").value = "";
}

function addDep(){
    if(localStorage.getItem('depLSData') == null){
        localStorage.setItem('depLSData', '[]');
    }
    console.log("shreya");
    let formData = getDepData();
    console.log(formData);
    depData = JSON.parse(localStorage.getItem('depLSData'));
    depData.push(formData);
    localStorage.setItem('depLSData', JSON.stringify(depData));
    resetDepData();
}
function getDepData(){
    let formData = {};
    formData["depID"] = document.getElementById("depID").value;
    formData["depName"] = document.getElementById("depName").value;
    return formData;
}
function resetDepData(){
    document.getElementById("depID").value = "";
    document.getElementById("depName").value = "";
}