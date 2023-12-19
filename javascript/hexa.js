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
        // Convert hexa to binary
        else if (b.target.innerText == 'Binary') {
            HexaToBinary();
        }
        // Convert hexa to decimal
        else if (b.target.innerText == 'Deci') {
            HexaToDecimal();
        }
        // Convert hexa to octal
        else if (b.target.innerText == 'Octal') {
            HexaToOctal();
        }
        else {
            // Check if the input is a valid hexadecimal digit
            if (/^(00|[0-9A-Fa-f])$/.test(b.target.innerText)) {
                string += b.target.innerText;
                inputBox.value = string;
            }
        }
    })
});

function HexaToBinary() {
    // Check if the input is a valid hexadecimal string
    if (/^[0-9A-Fa-f]+$/.test(string)) {
        // Convert hexadecimal to binary
        const binaryValue = parseInt(string, 16).toString(2);
        inputBox.value = binaryValue;
    } else {
        inputBox.value = 'Invalid hexadecimal input';
    }
}

function HexaToDecimal() {
    // Check if the input is a valid hexadecimal string
    if (/^[0-9A-Fa-f]+$/.test(string)) {
        // Convert hexadecimal to decimal
        const decimalValue = parseInt(string, 16);
        inputBox.value = decimalValue;
    } else {
        inputBox.value = 'Invalid hexadecimal input';
    }
}

function HexaToOctal() {
    // Check if the input is a valid hexadecimal string
    if (/^[0-9A-Fa-f]+$/.test(string)) {
        // Convert hexadecimal to octal
        const octalValue = parseInt(string, 16).toString(8);
        inputBox.value = octalValue;
    } else {
        inputBox.value = 'Invalid hexadecimal input';
    }
}