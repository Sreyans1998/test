function addDep(){
    let formData = getformData();
    newRecord(formData)
}
function getformData(){
    let formData = {};
    formData["empId"] = document.getElementById("empID").value;
    formData["empName"] = document.getElementById("empName").value;
    formData["empAge"] = document.getElementById("empAge").value;
    returm formData;
}

function newRecord(data){
    let table = document.getElementById("employelist").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.empId;
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = data.empId;
    cell1 = newRow.insertCell(2);
    cell1.innerHTML = data.empId;
    cell1 = newRow.insertCell(3);
    cell1.innerHTML = data.empId;
}