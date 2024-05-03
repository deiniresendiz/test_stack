# Backend
Este backend está desarrollado en flask que permite acceder a publicaciones y álbumes de imágenes de los usuarios de la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com/ "JSONPlaceholder"), para registrar cada petición de esta en la base de datos.

## Requisitos
- Python 3.10 or higher
- postgresql

## Instalación
Crea el entorno virtual y actívalo:
```bash
python -m venv venv
source venv/bin/activate
```
Instalar los paquetes requeridos:
```bash
pip install -r requirements.txt
```
Ejecutar la aplicación:
```bash
python main.py
```

## configurar las variables de entorno
- crear un archivo llamado .env o usa el archivo 'example.env' como base
- llena con tus datos
```bash
DB_NAME="Nombre de la bases de datos"
DB_USER="Usuario de la base de datos"
DB_PASSWORD="Contraseña de la base de datos"
DB_HOST="Host de la base"
```
## Endpoints
- http://127.0.0.1:5000/api/users devuelve todos los usuarios
- http://127.0.0.1:5000/api/user/1 devuelve los datos de un usuario en específico.
- http://127.0.0.1:5000/api/posts/user/1 devuelve las publicaciones de  un usuario en específico.
- http://127.0.0.1:5000/api/photos/user/1 devuelve las fotos de  un usuario en específico.