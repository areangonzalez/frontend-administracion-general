# FrontendAdministracionGeneral

Este proyecto esta generado con imagen de docker  [Angular CLI](https://github.com/angular/angular-cli) version 9.1.5.
 - [Angular CLI](https://github.com/angular/angular-cli) version 12.2.8
 - [Ng Bootstrap](https://github.com/ng-bootstrap/ng-bootstrap) v5.1.3

## Instalacion del proyecto via docker

Descargamos la imagen de docker:
  
  `docker pull trion/ng-cli:12.2.8`
Nos dirigimos al directorio donde tenemos el proyecto y seguimos los siguientes pasos:

 - Utilizamos el siguiente comando a instalar, que nos proporcionara la instalación continua del proyecto:
    
    `docker run -u $(id -u) --rm -v "$PWD":/app trion/ng-cli:12.2.8 npm ci`

Una vez completado los pasos anteriores iniciamos el docker que contiene nuestro sistema:

Iniciamos el proyecto con la imagen de docker `trion/ng-cli:12.2.8`:

   `docker run -u $(id -u) --rm -p 4400:4200 -v "$PWD":/app trion/ng-cli:12.2.8 ng serve --host 0.0.0.0`

Mediante docker-compose:

`docker-compose up -d`

 - Inicializa el `ng serve` en el puerto `4400` para el modo de `DEV`, abrirlo en `http://localhost:4400`. La aplicacion recarga automaticamentente mediante el cambio de un archivo.

 ## Ayuda

Para mas ayuda dobre Angular CLI utilice `ng help` o ingresa a [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
