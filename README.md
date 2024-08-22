# Gestion-de-inventario
El Sistema de Gestión de Inventarios es una aplicación web diseñada para gestionar el inventario de productos en una tienda o almacén. Permite registrar productos, monitorear niveles de stock, generar reportes y realizar otras tareas relacionadas con la gestión de inventarios.
## Estructura del Proyecto

El proyecto está dividido en varias secciones:

- `/frontend`: Código fuente del frontend, que incluye HTML, CSS y JavaScript.
- `/backend`: Código fuente del backend, que maneja la lógica de negocio y la comunicación con la base de datos.
- `/database`: Contiene migraciones y semillas para la base de datos.
- `/tests`: Pruebas unitarias y de integración.

## Instalación

Sigue estos pasos para configurar el entorno de desarrollo:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu_usuario/gestion-inventarios.git
   ```

2. **Navega al directorio del proyecto:**

   ```bash
   cd gestion-inventarios
   ```

3. **Instala las dependencias para el frontend:**

   ```bash
   cd frontend
   npm install
   ```

4. **Instala las dependencias para el backend:**

   ```bash
   cd ../backend
   npm install
   ```

5. **Configura el archivo `.env`:**

   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```plaintext
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=password
   DB_NAME=gestion_inventarios
   PORT=3000
   JWT_SECRET=your_jwt_secret
   ```

## Uso

Para iniciar el proyecto:

1. **Inicia el servidor en modo desarrollo:**

   Navega a la carpeta `/backend` y ejecuta:

   ```bash
   npm run dev
   ```

2. **Inicia el frontend:**

   Navega a la carpeta `/frontend` y abre el archivo `index.html` en tu navegador.

3. **Para correr las pruebas:**

   Navega a la carpeta `/backend` y ejecuta:

   ```bash
   npm test
   ```

## Estructura del Proyecto

- **Frontend:**
  - `/public`: Contiene archivos estáticos como `index.html`, imágenes y estilos.
  - `/src`: Código fuente de la aplicación, incluyendo componentes y páginas.

- **Backend:**
  - `/controllers`: Maneja la lógica de las rutas.
  - `/models`: Define los esquemas de la base de datos.
  - `/routes`: Define las rutas de la API.
  - `/config`: Configuración del proyecto, como la conexión a la base de datos.
  - `/middleware`: Funcionalidades intermedias, como autenticación y autorización.
  - `/utils`: Funciones y utilidades auxiliares.

- **Database:**
  - `/migrations`: Archivos de migración para la base de datos.
  - `/seeds`: Datos iniciales para poblar la base de datos.

- **Tests:**
  - `/frontend`: Pruebas unitarias y de integración para el frontend.
  - `/backend`: Pruebas unitarias y de integración para el backend.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Fork el repositorio.
2. Crea una nueva rama para tus cambios.
3. Realiza un pull request con una descripción clara de los cambios.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

## Contacto

Para cualquier pregunta o comentario, puedes contactarme en:

- **Email:** f.martinez5@utp.edu.co
- **GitHub:** [Craos6518]https://github.com/Craos6518
