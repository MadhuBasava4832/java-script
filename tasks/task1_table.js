var students_data = [
    { name: "iron man", roll_no: 22, branch: "cse", },
    { name: "loki", roll_no: 13, branch: "ece", },
    { name: "thor", roll_no: 14, branch: "ece", },
    { name: "hulk", roll_no: 23, branch: "cse", },
]
var i = 0;
var cnnt = true;
function fun() {
    if (cnnt == true) {
        var button = document.getElementById("button")
        button.innerHTML = "click to add";
        var tablee = document.getElementById("table")

        var tra = document.createElement("tr")
        // tra.className="tra1"
        var th1 = document.createElement("th")
        var th2 = document.createElement("th")
        var th3 = document.createElement("th")
        var th4 = document.createElement("th")
        var th5 = document.createElement("th")
        tra.appendChild(th1)
        tra.appendChild(th2)
        tra.appendChild(th3)
        tra.appendChild(th4)
        tra.appendChild(th5)
        th1.innerHTML = "NAME"
        th2.innerHTML = "ROLL NO"
        th3.innerHTML = "BRANCH"
        th4.innerHTML = "UPDATE"
        th5.innerHTML = "DELETE"
        tablee.appendChild(tra)

        students_data.map((ele) => {
            i += 1;
            var tr = document.createElement("tr")
            tr.setAttribute("id", i);
            var td1 = document.createElement("td")
            var update = document.createElement("button");
            update.innerHTML = "Update";
            update.setAttribute("onclick", "upd(this)")
            var button = document.createElement("button");
            button.innerHTML = "Delete";
            button.setAttribute("onclick", "del(this)");

            Object.entries(ele).map(data => {
                var td1 = document.createElement("td")
                td1.innerHTML = data[1]
                tr.appendChild(td1);
            })
            var td = document.createElement("td")
            td.appendChild(update)
            tr.appendChild(td)
            var td = document.createElement("td")
            td.appendChild(button)
            tr.appendChild(td)
            tablee.appendChild(tr)
        })
        cnnt = false;
    } else {
        var tablee = document.getElementById("table");
        var update = document.createElement("button");
        update.innerHTML = "Update";
        var button = document.createElement("button");
        button.innerHTML = "Delete";
        button.setAttribute("onclick", "del(this)")
        var tr = document.createElement("tr")
        Object.entries(students_data[0]).map(data => {
            var td = document.createElement("td")
            var x = window.prompt(data[0]);
            td.innerHTML = x;
            tr.appendChild(td)
        })
        var td = document.createElement("td")
        td.appendChild(update)
        tr.appendChild(td)
        var td = document.createElement("td")
        td.appendChild(button)
        tr.appendChild(td)
        tablee.appendChild(tr)
    }
}
function del(button) {
    if (confirm("click OK to delete")) {
        var row = button.parentNode.parentNode; console.log(row);
        var table = document.getElementById("table");
        table.removeChild(row);
    }
}
function upd(button) {
    var row = button.parentNode.parentNode;
    var td = row.getElementsByTagName("td");

    for (var i = 0; i < td.length - 2; i++) {
        var currentValue = td[i].innerHTML;
        var newValue = window.prompt("Enter new value for " + currentValue, currentValue);
        if (newValue !== null) {
            td[i].innerHTML = newValue;
        }
    }

}