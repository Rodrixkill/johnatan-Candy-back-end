<h2>Instalación del Back-end</h2>

<p>
  Descargando el archivo del back-end, podemos inicializar el servicio REST para nuestra aplicación en una PC con nodeJs instalado
</p>

<h3>Precondiciones</h3>
<ul>
  <li>Tener una versión de NodeJS 10 o superior instalada</li>
  <li>Descargar y guardar el archivo que contenga johnatan-Candy-back-end</li>
  <li>Tener una versión de MYSQL 5.7v+</li> 
  <li>Tener un usuario para la base de datos con todos los privilegios</li>
</ul>

<h3>Pasos para la implementación de la Base de datos</h3>
<ul>
  <li>Ingresa a tu base de datos con el comando: mysql -u DatabaseUser -p</li>
  <li>Una vez dentro corre los siguientes comandos:  DROP DATABASE IF EXISTS crunchylist; CREATE crunchylist; exit;</li>
  <li>En la linea de comandos navega hasta la carpeta johnatan-Candy-back-end</li> 
  <li>Ingresa el comando siguiente mysql -u DatabaseUser -p crunchylist < crunchylist.sql</li>
  <li>La base de datos debería crearse exitosamente</li>
</ul>
<h3>Pasos para inicializar el back-end</h3>
<ul>
  <li>En la linea de comandos navega hasta la carpeta johnatan-Candy-back-end</li> 
  <li>Ingresa a la carpeta src: cd src</li>
  <li>Modificar el documento "database.ts" con tus credenciales de tu Mysql</li>
  <li>{
        host: 'localhost',
        user: 'root',
        password: 'pass',
        database: 'crunchylist'
    }</li>
  <li>En la línea de comandos vuelve a la carpeta principal y ejecuta el siguiente comando: npm run dev</li>
  <li>El servidor back end debería habilitarse en el puerto 8443</li>
</ul>
