document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de datos de productos
    const products = [
        { id: 1, name: 'Producto A', quantity: 50, price: 20 },
        { id: 2, name: 'Producto B', quantity: 30, price: 15 },
        { id: 3, name: 'Producto C', quantity: 70, price: 25 },
        { id: 4, name: 'Producto D', quantity: 20, price: 10 }
        // Agrega más productos según sea necesario
    ];

    // Llenar la tabla de productos
    const productList = document.getElementById('productList');
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.price}</td>
        `;
        productList.appendChild(row);
    });

    // Configurar gráfico con Chart.js
    const ctx = document.getElementById('inventoryChart').getContext('2d');
    const inventoryChart = new Chart(ctx, {
        type: 'bar', // Tipo de gráfico: barra
        data: {
            labels: products.map(product => product.name), // Nombres de los productos como etiquetas
            datasets: [{
                label: 'Cantidad',
                data: products.map(product => product.quantity), // Cantidades de productos
                backgroundColor: 'rgba(54, 162, 235, 0.6)', // Color de fondo de las barras
                borderColor: 'rgba(54, 162, 235, 1)', // Color del borde de las barras
                borderWidth: 1 // Grosor del borde
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true // Asegurar que el eje Y comience en 0
                }
            }
        }
    });
});
