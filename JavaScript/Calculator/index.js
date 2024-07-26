// Develop simple calculator for Addition, Subtraction, Multiplication and
// Division operation using JavaScript. 

function calculator() {
    console.log("HEll oworklds");
    alert('hello world');
    let op1 = parseFloat(document.getElementById('operand1').value);
    let ch = document.getElementById('operator').value;
    let op2 = parseFloat(document.getElementById('operand2').value);

    switch (ch) {
        case '+':
            console.log(`${op1} ${ch} ${op2} = ${op1 + op2}`); break;
        case '-':
            console.log(`${op1} ${ch} ${op2} = ${op1 - op2}`); break;
        case '*':
            console.log(`${op1} ${ch} ${op2} = ${op1 * op2}`); break;
        case '/':
            console.log(`${op1} ${ch} ${op2} = ${op1 / op2}`); break;
        default:
            console.log(`Invalid operator`);
    }
}
