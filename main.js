// Clase para operaciones matemáticas
class MathOperations {
    constructor() {}

    // Métodos estáticos para las operaciones
    static sum(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        return b !== 0 ? a / b : 'No se puede dividir por cero';
    }

    static sqrt(a) {
        return Math.sqrt(a);
    }

    static pow(a, b) {
        return Math.pow(a, b);
    }

    static log(a) {
        return Math.log(a);
    }
}

// Función principal para iniciar el cálculo
function calculate() {
    // Capturar entradas mediante prompt()
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número (si aplica):"));
    const operation = prompt("Ingresa la operación (sum, subtract, multiply, divide, evenCount, primeCount, unitConvert, sqrt, pow, log):");

    // Declarar variables y objetos necesarios
    let result;
    const operations = {
        sum: (a, b) => MathOperations.sum(a, b),
        subtract: (a, b) => MathOperations.subtract(a, b),
        multiply: (a, b) => MathOperations.multiply(a, b),
        divide: (a, b) => MathOperations.divide(a, b),
        evenCount: (n) => countEvens(n),
        primeCount: (n) => countPrimes(n),
        unitConvert: (meters) => convertUnits(meters),
        sqrt: (a) => MathOperations.sqrt(a),
        pow: (a, b) => MathOperations.pow(a, b),
        log: (a) => MathOperations.log(a)
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

    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

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

// Función para ejecutar pruebas de arrays
function arrayMethodsDemo() {
    const sampleArray = [1, 2, 3, 4, 5, 6];

    // Propiedad length
    console.log("Length:", sampleArray.length);

    // Método push
    sampleArray.push(7);
    console.log("After push:", sampleArray);

    // Método pop
    sampleArray.pop();
    console.log("After pop:", sampleArray);

    // Método shift
    sampleArray.shift();
    console.log("After shift:", sampleArray);

    // Método filter (usando arrow function)
    const evenNumbers = sampleArray.filter(num => num % 2 === 0);
    console.log("Even numbers (filter):", evenNumbers);

    // Método forEach (usando arrow function)
    sampleArray.forEach(num => console.log("forEach:", num));

    // Método find (usando arrow function)
    const firstEven = sampleArray.find(num => num % 2 === 0);
    console.log("First even number (find):", firstEven);
}

// Llamar a la función calculate desde la consola
calculate();
arrayMethodsDemo(); // Ejecutar demostración de métodos de arrays
