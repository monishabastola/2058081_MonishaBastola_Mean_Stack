const add = () => {
    let projectList = JSON.parse(sessionStorage.getItem("projects")) || [];
    let clientName = document.getElementById("clientName").value;
    let projectName = document.getElementById("projectName").value;
    let budget = document.getElementById("budget").value;

    let project = {clientName:clientName,projectName:projectName, budget:budget}
    projectList.push(project)
    sessionStorage.setItem("projects",JSON.stringify(projectList));

}

