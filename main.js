// Función principal para iniciar el cálculo
function calculate() {
    // Capturar entradas mediante prompt()
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número (si aplica):"));
    const operation = prompt("Ingresa la operación (sum, subtract, multiply, divide, evenCount, primeCount, unitConvert, sqrt, pow, log):");

    // Declarar variables y objetos necesarios
    let result;
    const operations = {
        sum: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b,
        divide: (a, b) => b !== 0 ? a / b : 'No se puede dividir por cero',
        evenCount: (n) => countEvens(n),
        primeCount: (n) => countPrimes(n),
        unitConvert: (meters) => convertUnits(meters),
        sqrt: (a) => Math.sqrt(a),
        pow: (a, b) => Math.pow(a, b),
        log: (a) => Math.log(a)
    };

    // Validar la operación ingresada
    if (operations[operation]) {
        // Procesar la operación
        result = operations[operation](num1, num2);
    } else {
        result = 'Operación no válida';
    }

    // Efectuar una salida
    alert(`Resultado: ${result}`);
    console.log(`Resultado: ${result}`);
}

// Función para contar números pares hasta n
function countEvens(n) {
    let count = 0;
    const evensArray = [];  // Array para almacenar números pares
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            count++;
            evensArray.push(i);
        }
    }
    console.log("Números pares:", evensArray); // Mostrar el array de números pares
    return count;
}

// Función para contar números primos hasta n
function countPrimes(n) {
    let count = 0;
    const primesArray = [];  // Array para almacenar números primos

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
            primesArray.push(i);
        }
    }
    console.log("Números primos:", primesArray); // Mostrar el array de números primos
    return count;
}

// Función para convertir metros a kilómetros
function convertUnits(meters) {
    const conversion = {
        meters: meters,
        kilometers: meters / 1000
    };
    return `${conversion.meters} metros son ${conversion.kilometers} kilómetros`;
}

// Llamar a la función calculate desde la consola
calculate();
