# TP Integrador – Tecno Store

Proyecto desarrollado como trabajo práctico integrador de **Programación III** (UTN Avellaneda).

Aplicación web de una tienda de tecnología: API REST con Node.js + Express, base de datos MySQL y vistas renderizadas con EJS.

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/MFaii/2026-UTN-P3-Q2-334-P2-TP_INTEGRADOR.git
```

2. Ingresar al directorio del backend:

```bash
cd tp-backend/
```

3. Instalar las dependencias:

```bash
npm install
```

4. Crear la base de datos importando el script `bd/tp_tienda.sql` (ver la sección siguiente).

## Base de datos (XAMPP)

El proyecto usa MySQL a través de **XAMPP** y **phpMyAdmin**.

1. Abrir el panel de XAMPP e iniciar el módulo **MySQL** (Start).
2. Ingresar a [http://localhost/phpmyadmin](http://localhost/phpmyadmin).
3. Ir a la pestaña **Importar**, seleccionar el archivo `bd/tp_tienda.sql` y ejecutar.

## Configuración de variables de entorno

Crear un archivo `.env` en la raíz de `tp-backend/`, tomando como referencia `.env.modelo`:

```env
# Servidor
PORT=dbport

# Base de Datos
DB_HOST="dbhost"
DB_NAME="dbname"
DB_USER="dbuser"
DB_PASSWORD="dbpassword"

# Sesiones
SESSION_KEY="random"
```

| Variable      | Descripción                                                         |
| ------------- | ------------------------------------------------------------------- |
| `PORT`        | Puerto en el que se ejecutará el servidor.                          |
| `DB_HOST`     | Dirección del servidor de base de datos.                            |
| `DB_NAME`     | Nombre de la base de datos.                                         |
| `DB_USER`     | Usuario de la base de datos.                                        |
| `DB_PASSWORD` | Contraseña del usuario de la base de datos.                         |
| `SESSION_KEY` | Clave secreta para firmar las sesiones (cualquier texto aleatorio). |

Con la configuración por defecto de XAMPP: `DB_HOST="localhost"`, `DB_USER="root"` y `DB_PASSWORD=""` (vacía).

**Importante:** No subir el archivo `.env` al repositorio, ya que contiene credenciales. Asegurarse de incluirlo en `.gitignore`.

## Ejecución

Para iniciar el servidor, ejecutar:

```bash
npm run dev
```

El servidor estará disponible en:

```text
http://localhost:3001
```

## Arquitectura del proyecto

```text
2026-UTN-P3-Q2-334-P2-TP_INTEGRADOR/
├── README.md
│
├── bd/
│   └── tp_tienda.sql              # Script de la base de datos
│
├── tp-backend/                    # Servidor
│   ├── index.js                   # Punto de entrada
│   ├── package.json
│   ├── .env.modelo                # Plantilla de variables de entorno
│   └── src/
│       ├── api/
│       │   ├── config/            # Configuración y variables de entorno
│       │   ├── controllers/       # Lógica de cada endpoint
│       │   ├── database/          # Conexión a MySQL
│       │   ├── middlewares/       # Middlewares de la aplicación
│       │   ├── models/            # Consultas a la base de datos
│       │   ├── routes/            # Definición de rutas
│       │   └── utils/             # Funciones auxiliares
│       ├── public/                # Archivos estáticos
│       └── views/                 # Vistas EJS
│           └── partials/          # Head, header y footer reutilizables
│
└── tp-frontend/                   # Frontend estático
    ├── index.html
    ├── tienda.html
    ├── css/
    └── img/
```

_La estructura es orientativa y puede variar según la organización del proyecto._

## 📚 Aviso Académico y Descargo de Responsabilidad

Este repositorio, junto con todo su contenido, código fuente, diseño y recursos visuales, ha sido desarrollado de manera exclusiva con **fines académicos** para la materia **Programación III** de la **Tecnicatura Universitaria en Programación (UTN Avellaneda)**.

Cualquier marca, logotipo o imagen comercial utilizada en este proyecto pertenece a sus respectivos propietarios y se emplea únicamente en el marco de una consigna de evaluación práctica, sin ningún tipo de fin comercial o de lucro.
