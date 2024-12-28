# Eboleta SII

Este código te permite ingresar al sistema [Eboleta SII](https://eboleta.sii.cl) para generar boletas simulando que eres tu.

En el llamado de la función `main({...})` del archivo `src/index.js`, puedes configurar los datos a ser llenados en la boleta.

## Demo

[![Alt text](https://i.ytimg.com/an_webp/sFmf94rA19U/mqdefault_6s.webp?du=3000&sqp=CM7FwLsG&rs=AOn4CLDg7WBZ7V4yFsfxdGd8Bf5PV8pN3A)](https://youtu.be/jWhUYQPx2sU)

## Instalación

Se deberán instalar los paquetes necesarios, para esto se debe ejecutar el siguiente comando:

```cli
npm install
```

## Configuración

Se debe copiar el archivo `.env.example` a `.env`, esto se puede hacer con el siguiente comando:

```cli
cp .env.example .env
```

Luego se debe abrir y modificar el archivo `.env` seteando en las variables RUT y PASSWORD, (credenciales para ingresar al SII).

## Ejecución

Para ejecutar el software basta con ejecutar el siguiente comando:

```cli
npm run start
```
