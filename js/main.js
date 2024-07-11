document.addEventListener('DOMContentLoaded', () => {
    actualizarCarritoDOM();
    actualizarTotal();
});

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio, imagen) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = { nombre, precio, imagen, cantidad: 1 }; // Agregamos cantidad inicial
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarritoDOM();
    actualizarTotal();
}
// Event listener para los botones de agregar al carrito
document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', (e) => {
        const nombre = e.target.dataset.nombre;
        const precio = parseFloat(e.target.dataset.precio);
        const imagen = e.target.closest('.producto').querySelector('img').src;
        agregarAlCarrito(nombre, precio, imagen);
    });
});
// Función para actualizar el carrito en el DOM
function actualizarCarritoDOM() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoContainer = document.getElementById('carrito-container');
    if (carritoContainer) {
        carritoContainer.innerHTML = '';
        carrito.forEach((producto, index) => {
            const productoDiv = document.createElement('div');
            productoDiv.classList.add('producto');
            productoDiv.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>Precio unitario: U$D${producto.precio.toFixed(2)}</p>
                <label for="cantidad-${index}">Cantidad:</label>
                <input type="number" id="cantidad-${index}" name="cantidad" value="${producto.cantidad}" min="1" max="10">
                <p>Total por producto: U$D${(producto.precio * producto.cantidad).toFixed(2)}</p>
                <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
            `;
            carritoContainer.appendChild(productoDiv);

            // Event listener para actualizar cantidad y total al cambiar el input
            const cantidadInput = productoDiv.querySelector(`#cantidad-${index}`);
            if (cantidadInput) {
                cantidadInput.addEventListener('change', () => {
                    producto.cantidad = parseInt(cantidadInput.value);
                    localStorage.setItem('carrito', JSON.stringify(carrito));
                    actualizarTotal();
                    actualizarCarritoDOM(); // Actualizar nuevamente por si hay cambios en otros productos
                });
            }
        });
    }
}

// Función para eliminar productos del carrito
function eliminarDelCarrito(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarritoDOM();
    actualizarTotal();
}

// Función para actualizar el total del carrito
function actualizarTotal() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const total = carrito.reduce((sum, producto) => sum + (producto.precio * producto.cantidad), 0);
    const totalElement = document.getElementById('total');
    if (totalElement) {
        totalElement.textContent = `U$D${total.toFixed(2)}`;
    }
}

// Simulación de pago (redirigir a un formulario de pago real)
const pagarBtn = document.createElement('button');
pagarBtn.textContent = 'Pagar';
pagarBtn.addEventListener('click', () => {
    alert('Redirigiendo a formulario de pago...'); // Simulación de pago
    // Aquí podrías redirigir a tu página de pago real usando window.location.href
});

const totalContainer = document.getElementById('total-container');
if (totalContainer) {
    totalContainer.appendChild(pagarBtn);
}
