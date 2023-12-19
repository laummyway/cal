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
        // Convert decimal to binary
        else if (b.target.innerText == 'Binary') {
            decimalToBinary();
        }
        // Convert decimal to octal
        else if (b.target.innerText == 'Octal') {
            decimalToOctal();
        }
        // Convert decimal to hexadecimal
        else if (b.target.innerText == 'Hexa') {
            decimalToHexadecimal();
        }
        else {
            // Check if the input is a valid decimal digit
            if (/^\d+$/.test(b.target.innerText)) {
                string += b.target.innerText;
                inputBox.value = string;
            }
        }
    })
});

function decimalToBinary() {
    // Convert decimal to binary
    let binaryValue = parseInt(string, 10).toString(2);
    inputBox.value = binaryValue;
    string = binaryValue; // Update the main string to binary value
}

function decimalToOctal() {
    // Convert decimal to octal
    let octalValue = parseInt(string, 10).toString(8);
    inputBox.value = octalValue;
    string = octalValue; // Update the main string to octal value
}

function decimalToHexadecimal() {
    // Convert decimal to hexadecimal
    let hexValue = parseInt(string, 10).toString(16).toUpperCase();
    inputBox.value = hexValue;
    string = hexValue; // Update the main string to hexadecimal value
}
