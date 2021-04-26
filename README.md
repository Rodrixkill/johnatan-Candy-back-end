<h2>Instalación del Back-end</h2>
<h3>Precondiciones</h3>
<ul>
  <li>Tener una versión de NodeJS 10 o superior instalada</li>
  <li>Descargar y guardar el archivo que contenga johnatan-Candy-back-end</li>
  <li>Tener una versión de MYSQL 5.7v+</li> 
  <li>Tener un usuario para la base de datos con todos los privilegios</li>
</ul>
<p>
  Descargando el archivo del back-end, podemos inicializar el servicio REST para nuestra aplicación en una PC con nodeJs instalado
</p>
<h3>Pasos para la implementación de la Base de datos</h3>
<ul>
  <li>Ingresa a tu base de datos con el comando: mysql -u DatabaseUser -p</li>
  <li>Una vez dentro corre los siguientes comandos:  DROP DATABASE IF EXISTS crunchylist; CREATE crunchylist; exit;</li>
  <li>En la linea de comandos navega hasta la carpeta johnatan-Candy-back-end</li> 
  <li>Ingresa el comando siguiente mysql -u DatabaseUser -p crunchylist < crunchylist.sql</li>
</ul>
