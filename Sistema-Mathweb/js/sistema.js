/**
 * Calcula el resultado de una operación matemática basada en dos números y un operador.
 * Actualiza el campo de resultado con el resultado de la operación.
 * Si los números ingresados son inválidos, muestra un mensaje de error en el campo de resultado.
 * Si el operador no es válido, muestra un mensaje de error en el campo de resultado.
 * Maneja la división por cero mostrando un mensaje de error específico.
 */
function calculate() {
    // Obtiene el primer número del campo de entrada y lo convierte en un número decimal.
    const num1 = parseFloat(document.getElementById('number1').value);
    // Obtiene el segundo número del campo de entrada y lo convierte en un número decimal.
    const num2 = parseFloat(document.getElementById('number2').value);
    // Obtiene el operador seleccionado del menú desplegable.
    const operator = document.getElementById('operator').value;
    // Variable para almacenar el resultado de la operación.
    let result;

    // Valida que los números ingresados sean válidos.
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').value = 'Error: Números inválidos';
        return;
    }

    // Realiza la operación matemática basada en el operador seleccionado.
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Valida la división por cero.
            result = num2 !== 0 ? num1 / num2 : 'Error: División por cero';
            break;
        default:
            // Maneja operadores no válidos.
            result = 'Error: Operador inválido';
            break;
    }

    // Actualiza el campo de resultado con el resultado de la operación o el mensaje de error.
    document.getElementById('result').value = result;
}

/**
 * Limpia los campos de entrada y el campo de resultado.
 * Borra los valores en los campos de número 1, número 2, operador y resultado.
 */
function clearFields() {
    // Limpia el campo de entrada del primer número.
    document.getElementById('number1').value = '';
    // Limpia el campo de entrada del segundo número.
    document.getElementById('number2').value = '';
    // Limpia el campo de selección del operador.
    document.getElementById('operator').value = '';
    // Limpia el campo de texto del resultado.
    document.getElementById('result').value = '';
}
