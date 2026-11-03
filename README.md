# 2026-UTN-P3-Q2-334-P2-TP_INTEGRADOR

# TPIntegrador

Proyecto desarrollado como parte del trabajo práctico integrador

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

## Configuración de variables de entorno

Crear un archivo `.env` en la raíz del proyecto, tomando como referencia la siguiente plantilla:

```env
# Servidor
PORT=dbport

# Base de Datos
DB_HOST="dbhost"
DB_NAME="dbname"
DB_USER="dbuser"
DB_PASSWORD="dbpassword"
```

Completar los valores según la configuración de tu entorno local.

| Variable      | Descripción                                 |
| ------------- | ------------------------------------------- |
| `PORT`        | Puerto en el que se ejecutará el servidor.  |
| `DB_HOST`     | Dirección del servidor de base de datos.    |
| `DB_NAME`     | Nombre de la base de datos.                 |
| `DB_USER`     | Usuario de la base de datos.                |
| `DB_PASSWORD` | Contraseña del usuario de la base de datos. |

**Importante:** No subir el archivo `.env` al repositorio, ya que contiene información de configuración y credenciales. Asegurarse de incluirlo en `.gitignore`.

## Ejecución

Para iniciar el servidor, ejecutar:

```bash
npm run dev
```

El servidor estará disponible en:

```text
http://localhost:3001
```

## Estructura del proyecto

```text
2026-UTN-P3-Q2-334-P2-TP_INTEGRADOR/
│
├── README.md
│
└── tp-backend/
    │
    ├── node_modules/
    │
    ├── src/
    │   └── api/
    │       ├── config/
    │       │   └── environments.js
    │       │
    │       └── database/
    │           └── db.js
    │
    ├── .env
    ├── .gitignore
    ├── index.js
    ├── package.json
    └── package-lock.json

```

_La estructura es orientativa y puede variar según la organización del proyecto._
