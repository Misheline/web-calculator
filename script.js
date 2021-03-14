function clearOutput() {
    document.getElementById("output").innerHTML = "0";
}
function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
         value = " "
         document.getElementById("output").innerHTML = value;
    }
}
function fordisplay(myvalue) {
    removeZero()
    document.getElementById("output").innerHTML += myvalue;
}
function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}

function result() {
    var Number1 = Number(document.getElementById("Number1").value);
    var Number2 = Number(document.getElementById("Number2").value);
    
    switch (document.getElementById("operator").value)
    {
        case "addition":
        document.getElementById("result").value = Number1 + Number2;
        break;

        case "subtraction":
        document.getElementById("result").value = Number1 - Number2;
        break;

        case "multi":
        document.getElementById("result").value = Number1 * Number2;
        break;

        case "division":
        document.getElementById("result").value = Number1 / Number2;
        break;
    }
}