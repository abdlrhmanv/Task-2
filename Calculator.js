let expression = "";

function EnterNumber(value) {
    expression += value;
    document.getElementById("Answer").value = expression;
}

function EnterOperator(operator) {
    if (expression !== "" && !"+-*/".includes(expression.slice(-1))) {
        expression += operator;
        document.getElementById("Answer").value = expression;
    }
}

function EnterEqual() {
    try {
        let result = eval(expression);
        document.getElementById("Answer").value = result;
        expression = result.toString();
    } catch (e) {
        document.getElementById("Answer").value = "Error";
        expression = "";
    }
}

function EnterClear() {
    expression = "";
    document.getElementById("Answer").value = "";
}
