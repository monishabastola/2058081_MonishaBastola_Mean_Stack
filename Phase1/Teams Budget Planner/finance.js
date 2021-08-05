const getProject = () => {
    const projects = JSON.parse(sessionStorage.getItem("projects"));
    let tableContent = ""
    const startTable = "<table border=1 cellpadding=3 class='table'><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>"
    let totalBudget = 0;
    for (let count = 0; count < projects.length; count++) {
        let cName = projects[count].clientName, pName = projects[count].projectName, budget = projects[count].budget
        if (cName != "") {
            if (pName != "") {
                if (budget != "") {
                    totalBudget += parseInt(budget);
                    tableContent += "<tr><td>" + cName + "</td><td>" + pName + "</td><td>" + budget + "</td></tr>"
                }
            }
        }


    }

    const end = "</table>"
    tableContent = startTable + tableContent + end
    document.getElementById("budgetInfo").innerHTML = tableContent;
    document.getElementById("budgetTotal").innerHTML = "<br><h3>Total budget is " + totalBudget + "</h3>";

}

