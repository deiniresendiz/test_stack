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