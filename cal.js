// this is a simple js calculator without html or css

// declaring the variables & cast it in js syntax

const op = prompt("Enter what operation you would like to do (use *, /, + or -): "),
num1 = parseFloat(prompt("Enter first number: ")),
num2 = parseFloat(prompt("Enter second number: "));
let result;

// the calculation using a conditional statement
if (op === "+") {
    result = num1 + num2;
}

else if (op === "-") {
    result = num1 - num2;
}

else if (op === "/") {
    result = num1 / num2;
}

else if (op === "*") {
    result = num1 * num2;
}

else {
    result = "Invalid Input"
}

alert(result);


// now lets do the calculation using switch
/*switch (op){
    case "+":
        result = num1 + num2;
        console.log(result);
        break;

    case "-":
        result = num1 - num2;
        console.log(result);
        break;

    case "*":
        result = num1 * num2;
        console.log(result);
        break;

    case "/":
        result = num1 / num2;
        console.log(result);
        break;
}*/