document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.buttons button');
    let currentInput = '';  // To keep track of the current input in the display

    // Function to update the display
    function updateDisplay(value) {
        display.value = value;
    }

    // Function to handle button clicks
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.value;

            // Clear the display
            if (buttonValue === 'C') {
                currentInput = '';
                updateDisplay(currentInput);
                return;
            }

            // Backspace functionality
            if (buttonValue === 'Backspace') {
                currentInput = currentInput.slice(0, -1); // Remove the last character
                updateDisplay(currentInput);
                return;
            }

            // Equals button pressed: calculate result this part also deals with the calculation.
            if (buttonValue === '=') {
                try {
                    currentInput = eval(currentInput).toString(); // Evaluate the expression
                    updateDisplay(currentInput);
                } catch (error) {
                    currentInput = 'Error'; // Show error if there's an issue with the expression
                    updateDisplay(currentInput);
                }
                return;
            }

            // Append the value to the current input string
            currentInput += buttonValue;
            updateDisplay(currentInput);
        });
    });

    // Optional: Handle keyboard input as well (e.g. numbers, operators)
    document.addEventListener('keydown', (e) => {
        const key = e.key;

        if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
            currentInput += key;
            updateDisplay(currentInput);
        } else if (key === 'Enter' || key === '=') {
            try {
                currentInput = eval(currentInput).toString();
                updateDisplay(currentInput);
            } catch (error) {
                currentInput = 'Error';
                updateDisplay(currentInput);
            }
        } else if (key === 'Backspace') {
            currentInput = currentInput.slice(0, -1); // Remove the last character
            updateDisplay(currentInput);
        } else if (key === 'c' || key === 'C') {
            currentInput = '';
            updateDisplay(currentInput);
        }
    });
});