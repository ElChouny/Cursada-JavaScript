document.addEventListener('DOMContentLoaded', function () {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultMessage = document.getElementById('resultMessage');
    const operationSelect = document.getElementById('operation');

    function calculate() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;

        if (isNaN(num1) || (isNaN(num2) && operation !== 'evenCount' && operation !== 'primeCount' && operation !== 'unitConvert')) {
            resultMessage.textContent = 'Por favor, ingresa números válidos.';
            return;
        }

        let result;
        switch (operation) {
            case 'sum':
                result = sum(num1, num2);
                break;
            case 'subtract':
                result = subtract(num1, num2);
                break;
            case 'multiply':
                result = multiply(num1, num2);
                break;
            case 'divide':
                result = divide(num1, num2);
                break;
            case 'evenCount':
                result = countEvens(num1);
                break;
            case 'primeCount':
                result = countPrimes(num1);
                break;
            case 'unitConvert':
                result = convertUnits(num1);
                break;
            default:
                result = 'Operación no válida';
        }

        resultMessage.textContent = `Resultado: ${result}`;
    }

    function sum(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        if (b === 0) {
            return 'No se puede dividir por cero';
        }
        return a / b;
    }

    function countEvens(n) {
        let count = 0;
        for (let i = 1; i <= n; i++) {
            if (i % 2 === 0) {
                count++;
            }
        }
        return count;
    }

    function countPrimes(n) {
        let count = 0;

        function isPrime(num) {
            if (num <= 1) return false;
            for (let i = 2; i < num; i++) {
                if (num % i === 0) return false;
            }
            return true;
        }

        for (let i = 1; i <= n; i++) {
            if (isPrime(i)) {
                count++;
            }
        }
        return count;
    }

    function convertUnits(meters) {
        return `${meters} metros son ${meters / 1000} kilómetros`;
    }

    // Exponer la función calculate al contexto global para poder llamarla desde el HTML
    window.calculate = calculate;
});
