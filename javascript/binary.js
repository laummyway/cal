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
 
        
        else if (b.target.innerText == 'Deci') {
            // Call the binary to decimal function
            binaryToDecimal();
        }
        else if (b.target.innerText == 'Octal') {
            // Call the binary to octal function
            binaryToOctal();
        }
        else if (b.target.innerText == 'Hexa') {
            // Call the binary to hexadecimal function
            binaryToHexadecimal();
        }
        else {
            // Check if the input is a valid binary digit
            if (/^[01]+$/.test(b.target.innerText)) {
                string += b.target.innerText;
                inputBox.value = string;
            }
            else {
              
            }
        }
    })
});

function binaryToDecimal() {
    // Convert binary to decimal
    let decimalValue = parseInt(string, 2);
    inputBox.value = decimalValue;
    string = decimalValue.toString(); // Update the main string to decimal value
}

function binaryToOctal() {
    // Convert binary to octal
    let octalValue = parseInt(string, 2).toString(8);
    inputBox.value = octalValue;
    string = octalValue; // Update the main string to octal value
}

function binaryToHexadecimal() {
    // Convert binary to hexadecimal
    let hexValue = parseInt(string, 2).toString(16).toUpperCase();
    inputBox.value = hexValue;
    string = hexValue; // Update the main string to hexadecimal value
}