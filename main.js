function calculate() {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número (si aplica):"));
    const operation = prompt("Ingresa la operación (sum, subtract, multiply, divide, evenCount, primeCount, unitConvert):");

    let result;

    if (operation === 'sum') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply') {
        result = num1 * num2;
    } else if (operation === 'divide') {
        if (num2 === 0) {
            result = 'No se puede dividir por cero';
        } else {
            result = num1 / num2;
        }
    } else if (operation === 'evenCount') {
        result = countEvens(num1);
    } else if (operation === 'primeCount') {
        result = countPrimes(num1);
    } else if (operation === 'unitConvert') {
        result = convertUnits(num1);
    } else {
        result = 'Operación no válida';
    }

    console.log(`Resultado: ${result}`);
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

// Llamar a la función calculate desde la consola
calculate();
