document.addEventListener('DOMContentLoaded', function() {
    fetchProducts();

    document.getElementById('addProductForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addProduct();
    });
});

// Función para obtener y mostrar productos
function fetchProducts() {
    fetch('http://localhost:3000/api/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('productList');
            productList.innerHTML = ''; // Limpiar la tabla antes de rellenarla
            products.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.NAME}</td>
                    <td>${product.description || 'No disponible'}</td>
                    <td>${product.price.toFixed(2)}</td>
                    <td>${product.stock}</td>
                `;
                productList.appendChild(row);
            });

            // Configurar el gráfico con los productos
            const ctx = document.getElementById('inventoryChart').getContext('2d');
            const inventoryChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: products.map(product => product.NAME),
                    datasets: [{
                        label: 'Stock',
                        data: products.map(product => product.stock),
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error al cargar los productos:', error));
}

// Función para agregar un nuevo producto
function addProduct() {
    const NAME = document.getElementById('productName').value;
    const description = document.getElementById('productDescription').value;
    const price = document.getElementById('productPrice').value;
    const stock = document.getElementById('productStock').value;

    fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ NAME, description, price, stock })
    })
    .then(response => response.json())
    .then(data => {
        alert('Producto agregado con éxito');
        fetchProducts(); // Refresca la lista de productos
    })
    .catch(error => console.error('Error al agregar el producto:', error));
}
