document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        
        const data = await response.json();
        
        if (response.ok) {
            alert('Login exitoso');
            // Guardar el token JWT en localStorage o cookies
            localStorage.setItem('token', data.token);
            // Redirigir al usuario a la página principal o dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert('Error: ' + data.message);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
});
