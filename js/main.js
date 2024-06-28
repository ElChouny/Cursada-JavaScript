// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = { nombre, precio };
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarritoDOM();
}

// Función para actualizar el carrito en el DOM
function actualizarCarritoDOM() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContainer = document.getElementById('carrito-container');
    if (carritoContainer) {
        carritoContainer.innerHTML = '';
        carrito.forEach((producto, index) => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto-carrito');
            productoDiv.innerHTML = `
                <p>${producto.nombre} - $${producto.precio}</p>
                <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
            `;
            carritoContainer.appendChild(productoDiv);
        });
    }
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarritoDOM();
}

// Event listener para los botones de agregar al carrito
document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', (e) => {
        const nombre = e.target.dataset.nombre;
        const precio = parseFloat(e.target.dataset.precio);
        agregarAlCarrito(nombre, precio);
    });
});

// Inicializar el carrito en el DOM al cargar la página
document.addEventListener('DOMContentLoaded', actualizarCarritoDOM);

// Event listener para el formulario de contacto
document.getElementById('form-contacto')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = e.target.nombre.value;
    const email = e.target.email.value;
    const mensaje = e.target.mensaje.value;
    
    console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
    // Aquí puedes agregar la lógica para enviar el formulario a un servidor o servicio de email
    e.target.reset();
});
