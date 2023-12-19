let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if (b.target.innerText == '=') {
            // Replace 'x' with '*' for evaluation
            string = String(eval(string.replace(/x/, '*')));
            inputBox.value = string;
        }
        // To clear all input
        else if (b.target.innerText == 'AC') {
            string = '';
            inputBox.value = string;
        }
        // To delete one character at a time
        else if (b.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1);
            inputBox.value = string;
        }
        // Convert octal to binary
        else if (b.target.innerText == 'Binary') {
            octalToBinary();
        }
        // Convert octal to decimal
        else if (b.target.innerText == 'Deci') {
            octalToDecimal();
        }
        // Convert octal to hexadecimal
        else if (b.target.innerText == 'Hexa') {
            octalToHexadecimal();
        }
        else {
            // Check if the input is a valid octal digit
            if (/^(00|[0-7])$/.test(b.target.innerText)) {
                string += b.target.innerText;
                inputBox.value = string;
            }
        }
    })
});

function octalToBinary() {
    // Convert octal to binary
    let binaryValue = parseInt(string, 8).toString(2);
    inputBox.value = binaryValue;
    string = binaryValue; // Update the main string to binary value
}

function octalToDecimal() {
    // Convert octal to decimal
    let decimalValue = parseInt(string, 8);
    inputBox.value = decimalValue;
    string = decimalValue.toString(); // Update the main string to decimal value
}

function octalToHexadecimal() {
    // Convert octal to hexadecimal
    let hexValue = parseInt(string, 8).toString(16).toUpperCase();
    inputBox.value = hexValue;
    string = hexValue; // Update the main string to hexadecimal value
}