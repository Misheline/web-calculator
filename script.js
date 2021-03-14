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