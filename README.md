# NomadTeams
Para el despliegue de la aplicación, dejamos este documento para aclarar los pasos previos.

Instalar Xampp desde el siguiente enlace: https://www.apachefriends.org/es/index.html. Una vez lo iniciemos, tendremos que hacer click en Start tanto a Apache como a MySQL para poder iniciar más tarde phpMyAdmin.

Para el front, deberíamos instalar NodeJs. Tras descargar nuestro repositorio, deberiámos hacer npm install para instalar los paquetes.
Seguidamente, con ng serve -o se nos compilaría y abriría nuestro frontal en el navegador. 

En phpMyAdmin, copiamos el contenido de database.sql (dentro del repositorio del back), a excepción de la función drop, y tendremos nuestra base de datos creada.

Para el back, sería conveniente instalar Composer. Tras descargar nuestro repositorio, con php artisan serve estaría iniciado nuestro back. 

