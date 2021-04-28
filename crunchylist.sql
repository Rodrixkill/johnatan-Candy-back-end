-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: crunchylist
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `anime`
--


DROP TABLE IF EXISTS `anime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `anime` (
  `idAnime` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `sinopsis` varchar(6000) NOT NULL,
  `nroEpisodios` int NOT NULL,
  `estadoEmision` varchar(30) NOT NULL,
  `fechaEstreno` date NOT NULL,
  `estudio` varchar(50) NOT NULL,
  `duracionMinutos` int NOT NULL,
  `score` float NOT NULL,
  `ranking` int NOT NULL,
  `popularidad` int DEFAULT NULL,
  `nroFavoritos` int DEFAULT NULL,
  `imagen` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idAnime`),
  UNIQUE KEY `nombre` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anime`
--

LOCK TABLES `anime` WRITE;
/*!40000 ALTER TABLE `anime` DISABLE KEYS */;
INSERT INTO `anime` VALUES (1,'Fullmetal Alchemist: Brotherhood','La alquimia está sujeta a esta Ley de Intercambio Equivalente, algo que los jóvenes hermanos Edward y Alphonse Elric solo se dan cuenta después de intentar la transmutación humana: el único acto prohibido de la alquimia. Pagan un precio terrible por su transgresión: Edward pierde su pierna izquierda, Alphonse su cuerpo físico. Es solo por el sacrificio desesperado del brazo derecho de Edward que puede colocar el alma de Alphonse en una armadura. Devastados y solos, es la esperanza de que ambos eventualmente regresen a sus cuerpos originales lo que le da a Edward la inspiración para obtener extremidades de metal llamadas automail y convertirse en un alquimista estatal, el Fullmetal Alchemist. Tres años de búsqueda después, los hermanos buscan la Piedra Filosofal, una reliquia mítica que permite a un alquimista superar la Ley del Intercambio Equivalente. Incluso con los aliados militares, el coronel Roy Mustang, la teniente Riza Hawkeye y el teniente coronel Maes Hughes de su lado, los hermanos se encuentran atrapados en una conspiración a nivel nacional que los lleva no solo a la verdadera naturaleza de la elusiva Piedra Filosofal, sino también a la turbia de su país. historia también. Entre encontrar un asesino en serie y correr contra el tiempo, Edward y Alphonse deben preguntarse si lo que están haciendo los hará humanos de nuevo ... o les quitará su humanidad.',64,'Finalizado','2009-04-05','Bones',24,9.18,1,3,2000,'https://cdn.myanimelist.net/images/anime/1223/96541l.webp'),(2,'Shingeki no Kyojin Season 3 Part 2','Buscando restaurar la esperanza menguante de la humanidad, Survey Corps se embarca en una misión para retomar Wall Maria, donde la batalla contra los despiadados Titanes vuelve a subir al escenario. Al regresar al andrajoso distrito de Shiganshina que alguna vez fue su hogar, Eren Yeager y el Cuerpo encuentran la ciudad extrañamente desocupada por titanes. Incluso después de que la puerta exterior está tapada, extrañamente no encuentran oposición. La misión avanza sin problemas hasta que Armin Arlert, muy desconfiado de la ausencia del enemigo, descubre signos angustiosos de un posible plan en su contra.',10,'Finalizado','2019-04-29','Wit Studio',23,9.11,2,51,1200,'https://cdn.myanimelist.net/images/anime/1533/99663l.webp'),(3,'Steins;Gate','El autoproclamado científico loco Rintarou Okabe alquila una habitación en un edificio viejo y destartalado en Akihabara, donde se entrega a su pasatiempo de inventar posibles dispositivos futuros con otros miembros del laboratorio: Mayuri Shiina, su amiga de la infancia, y Hashida Itaru. , un hacker pervertido apodado Daru. Los tres pasan el tiempo jugando con su artilugio más prometedor hasta el momento, una máquina llamada Phone Microwave, que realiza la extraña función de transformar los plátanos en montones de gel verde. Aunque milagroso en sí mismo, el fenómeno no proporciona nada concreto en la búsqueda de Okabe de un avance científico; es decir, hasta que los miembros del laboratorio se sientan impulsados ??a actuar por una serie de sucesos misteriosos antes de tropezar con un éxito inesperado: el teléfono microondas puede enviar correos electrónicos al pasado, alterando el flujo de la historia.',24,'Finalizado','2011-04-06','White Fox',24,9.11,3,9,1800,'https://cdn.myanimelist.net/images/anime/10/32023l.webp'),(4,'Gintama','¡Gintoki, Shinpachi y Kagura regresan como los miembros del equipo de Yorozuya, amantes de la diversión pero quebrados! Al vivir en un Edo de realidad alternativa, donde las espadas están prohibidas y los señores extraterrestres han conquistado Japón, intentan prosperar haciendo cualquier trabajo que puedan conseguir. Sin embargo, Shinpachi y Kagura todavía no han sido pagados ... ¿Gin-chan realmente gasta todo ese dinero jugando al pachinko? Mientras tanto, cuando Gintoki se tambalea borracho a casa una noche, una nave espacial alienígena se estrella cerca. Un miembro de la tripulación fatalmente herido emerge del barco y le da a Gintoki un extraño dispositivo con forma de reloj, advirtiéndole que es increíblemente poderoso y debe ser protegido. Confundiéndolo con su reloj despertador, Gintoki procede a romper el dispositivo a la mañana siguiente y de repente descubre que el mundo fuera de su apartamento se ha detenido. Con Kagura y Shinpachi a su lado, se pone en marcha para arreglar el dispositivo; aunque, como de costumbre, nada es tan simple para el equipo de Yorozuya.',51,'Finalizado','2015-04-08','Bandai Namco',24,9.09,4,333,428,'https://cdn.myanimelist.net/images/anime/3/72078l.webp'),(5,'Hunter x Hunter (2011)','Hunter x Hunter está ambientado en un mundo donde los cazadores existen para realizar todo tipo de tareas peligrosas como capturar criminales y buscar valientemente tesoros perdidos en territorios inexplorados. Gon Freecss, de doce años, está decidido a convertirse en el mejor cazador posible con la esperanza de encontrar a su padre, que era un cazador y había abandonado a su hijo hace mucho tiempo. Sin embargo, Gon pronto se da cuenta de que el camino para lograr sus objetivos es mucho más desafiante de lo que jamás hubiera imaginado. En el camino para convertirse en un cazador oficial, Gon se hace amigo del animado médico en entrenamiento Leorio, la vengativa Kurapika y el rebelde ex-asesino Killua. Para lograr sus propias metas y deseos, los cuatro juntos toman el Examen de Cazador, conocido por su baja tasa de éxito y alta probabilidad de muerte. A lo largo de su viaje, Gon y sus amigos se embarcan en una aventura que los pone a través de muchas dificultades y luchas. Conocerán una gran cantidad de monstruos, criaturas y personajes, todo mientras aprenden lo que realmente significa ser un cazador.',148,'Finalizado','2011-10-02','Madhouse',23,9.08,5,12,1831,'https://cdn.myanimelist.net/images/anime/11/33657l.webp'),(6,'Ginga Eiyuu Densetsu','El estancamiento de 150 años entre las dos superpotencias interestelares, el Imperio Galáctico y la Alianza de Planetas Libres, llega a su fin cuando surge una nueva generación de líderes: el genio militar idealista Reinhard von Lohengramm y el historiador reservado de la FPA, Yang Wenli. . Mientras Reinhard asciende en las filas del Imperio con la ayuda de su amigo de la infancia, Siegfried Kircheis, debe luchar no solo en la guerra, sino también en los restos de la desmoronada Dinastía Goldenbaum para liberar a su hermana del Kaiser y unificar a la humanidad bajo una gobernante genuino. Mientras tanto, al otro lado de la galaxia, Yang, un firme partidario de los ideales democráticos, tiene que mantenerse firme en sus creencias, a pesar de las luchas del FPA, y demostrarle a su alumno, Julian Mintz, que la autocracia no es la solución.',110,'Finalizado','1988-01-08','Artland',26,9.06,6,639,240,'https://cdn.myanimelist.net/images/anime/13/13225l.webp'),(7,'Koe no Katachi','Cuando era un joven salvaje, el estudiante de escuela primaria Shouya Ishida buscó vencer el aburrimiento de la manera más cruel. Cuando el sordo Shouko Nishimiya se transfiere a su clase, Shouya y el resto de su clase la intimidan sin pensarlo por diversión. Sin embargo, cuando su madre notifica a la escuela, lo señalan y lo culpan por todo lo que le hicieron. Con Shouko transfiriéndose fuera de la escuela, Shouya queda a merced de sus compañeros de clase. Él es condenado al ostracismo sin corazón durante toda la escuela primaria y secundaria, mientras que los maestros hacen la vista gorda. Ahora en su tercer año de secundaria, Shouya todavía está plagado de sus malas acciones cuando era un niño. Lamentando sinceramente sus acciones pasadas, emprende un viaje de redención: encontrarse con Shouko una vez más y hacer las paces.',1,'Finalizado','2016-09-17','Kyoto Animation',130,8.99,7,27,1503,'https://cdn.myanimelist.net/images/anime/1122/96435l.webp'),(8,'Kimi no Na wa.','Mitsuha Miyamizu, una estudiante de secundaria, anhela vivir la vida de un niño en la bulliciosa ciudad de Tokio, un sueño que contrasta fuertemente con su vida actual en el campo. Mientras tanto, en la ciudad, Taki Tachibana vive una vida ocupada como estudiante de secundaria mientras hace malabares con su trabajo a tiempo parcial y espera un futuro en la arquitectura. Un día, Mitsuha se despierta en una habitación que no es la suya y de repente se encuentra viviendo la vida de sus sueños en Tokio, ¡pero en el cuerpo de Taki! En otro lugar, Taki se encuentra viviendo la vida de Mitsuha en el humilde campo. En busca de una respuesta a este extraño fenómeno, comienzan a buscarse el uno al otro.',1,'Finalizado','2016-08-26','CoMix Wave',106,8.94,8,10,1862,'https://cdn.myanimelist.net/images/anime/5/87048l.webp'),(9,'Code Geass: Hangyaku no Lelouch','Ha pasado un año desde la Rebelión Negra, un levantamiento fallido contra el Sacro Imperio Británico liderado por el vigilante enmascarado Zero, que ahora está desaparecido. Perdidos sin su líder revolucionario, el grupo de resistencia del Área 11, los Caballeros Negros, se encuentran demasiado impotentes para combatir la brutalidad infligida a los Once por Britannia, que ha aumentado significativamente para aplastar cualquier esperanza de una revuelta futura. Lelouch Lamperouge, después de haber perdido todo recuerdo de su doble vida, vive en paz junto a sus amigos como estudiante de secundaria en Ashford Academy. Su ex pareja C.C., incapaz de aceptar este giro de los acontecimientos, se encarga de recordarle su propósito pasado, con la esperanza de que el cerebro Zero se levante una vez más para terminar lo que comenzó, en esta emocionante conclusión de la serie.',25,'Finalizado','2008-04-06','Sunrise',24,8.91,9,40,1330,'https://cdn.myanimelist.net/images/anime/4/9391l.webp'),(10,'Mob Psycho 100 II','Shigeo Mob Kageyama ahora está madurando y comprendiendo su papel como un psíquico sobrenatural que tiene el poder de afectar drásticamente el sustento de los demás. Él y su mentor Reigen Arataka continúan lidiando con solicitudes sobrenaturales de los clientes, ya sea exorcizando espíritus malignos o abordando leyendas urbanas que acechan a los ciudadanos. Si bien el flujo de trabajo sigue siendo el mismo, Mob ya no sigue ciegamente a Reigen. Con todas sus experiencias como un psíquico ridículamente fuerte, las aventuras sobrenaturales de Mob ahora tienen más peso para ellos. Las cosas adquieren un tono más serio y oscuro a medida que los peligros a los que se enfrentan Mob y Reigen son mucho más tangibles e inquietantes que nunca',13,'Finalizado','2019-01-07','Bones',24,8.83,10,99,916,'https://cdn.myanimelist.net/images/anime/1918/96303l.webp'),(11,'Jujutsu Kaisen','El estudiante de secundaria Yuuji Itadori, que se entrega ociosamente a actividades paranormales sin fundamento con el Club de lo Oculto, pasa sus días en el salón del club o en el hospital, donde visita a su abuelo postrado en cama. Sin embargo, este estilo de vida pausado pronto da un giro hacia lo extraño cuando, sin saberlo, se encuentra con un objeto maldito. Desencadenando una cadena de sucesos sobrenaturales, Yuuji se encuentra repentinamente empujado al mundo de las Maldiciones, seres terribles formados por la malicia y la negatividad humanas, después de tragar dicho artículo, que se revela como un dedo que pertenece al demonio Sukuna Ryoumen, el Rey de las Maldiciones.',24,'Finalizado','2020-10-03','MAPPA',23,8.79,11,80,1001,'https://cdn.myanimelist.net/images/anime/1171/109222l.webp');
/*!40000 ALTER TABLE `anime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `idCategoria` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  PRIMARY KEY (`idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Shounen'),(2,'Shoujo'),(3,'Seinen'),(4,'Mecha'),(5,'Isekai'),(6,'Deportes');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoriaanime`
--

DROP TABLE IF EXISTS `categoriaanime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoriaanime` (
  `idAnime` int NOT NULL,
  `idCategoria` int NOT NULL,
  KEY `idAnime` (`idAnime`),
  KEY `idCategoria` (`idCategoria`),
  CONSTRAINT `categoriaanime_ibfk_1` FOREIGN KEY (`idAnime`) REFERENCES `anime` (`idAnime`),
  CONSTRAINT `categoriaanime_ibfk_2` FOREIGN KEY (`idCategoria`) REFERENCES `categoria` (`idCategoria`),
  PRIMARY KEY (`idAnime`, `idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriaanime`
--

LOCK TABLES `categoriaanime` WRITE;
/*!40000 ALTER TABLE `categoriaanime` DISABLE KEYS */;
INSERT INTO `categoriaanime` VALUES (1,1),(2,3),(3,3),(4,1),(5,1),(6,4),(7,2),(8,2),(9,4),(10,1),(11,1);
/*!40000 ALTER TABLE `categoriaanime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentario`
--

DROP TABLE IF EXISTS `comentario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentario` (
  `idComentario` int NOT NULL AUTO_INCREMENT,
  `idForo` int DEFAULT NULL,
  `idComentarioPadre` int DEFAULT NULL,
  `idUsuario` int NOT NULL,
  `comentario` varchar(600) NOT NULL,
  PRIMARY KEY (`idComentario`),
  KEY `idUsuario` (`idUsuario`),
  KEY `idForo` (`idForo`),
  KEY `idComentarioPadre` (`idComentarioPadre`),
  CONSTRAINT `comentario_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`),
  CONSTRAINT `comentario_ibfk_2` FOREIGN KEY (`idForo`) REFERENCES `foro` (`idForo`),
  CONSTRAINT `comentario_ibfk_3` FOREIGN KEY (`idComentarioPadre`) REFERENCES `comentario` (`idComentario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentario`
--

LOCK TABLES `comentario` WRITE;
/*!40000 ALTER TABLE `comentario` DISABLE KEYS */;
INSERT INTO `comentario` VALUES (1,2,NULL,1,'Si, si y 3 veces Si, es muy bueno de lo mejorcito que estoy leyendo.'),(2,2,NULL,3,'No me gustó el estilo de dibujo, los diseños del anime son 1000 veces mejor.'),(3,2,NULL,4,'Si, está muy bien perp el anime es mil veces mejor.'),(4,NULL,2,4,'No coincido con tu forma de ver este manga'),(5,1,NULL,3,'Es mucho, mucho, mucho, mucho, mucho mejor que el anterior anime, y es totalmente fiel al manga.'),(6,1,NULL,4,'¿Calidad de dibujo, animacion, ost y el final y todo fiel al manga 100%? Si es así empiezo ahora mismo'),(7,NULL,6,5,'La banda sonora es lo que le baja un poco el nivel'),(8,NULL,6,1,'Su dibujo y animacion es una locura');
/*!40000 ALTER TABLE `comentario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estado`
--

DROP TABLE IF EXISTS `estado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estado` (
  `idEstado` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`idEstado`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estado`
--

LOCK TABLES `estado` WRITE;
/*!40000 ALTER TABLE `estado` DISABLE KEYS */;
INSERT INTO `estado` VALUES (1,'Completado'),(2,'Viendo'),(3,'En Espera'),(4,'Abandonado'),(5,'Pienso ver');
/*!40000 ALTER TABLE `estado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorito`
--

DROP TABLE IF EXISTS `favorito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favorito` (
  `idUsuario` int NOT NULL,
  `idAnime` int NOT NULL,
  KEY `idUsuario` (`idUsuario`),
  KEY `idAnime` (`idAnime`),
  CONSTRAINT `favorito_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`),
  CONSTRAINT `favorito_ibfk_2` FOREIGN KEY (`idAnime`) REFERENCES `anime` (`idAnime`),
  PRIMARY KEY (`idUsuario`, `idAnime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorito`
--

LOCK TABLES `favorito` WRITE;
/*!40000 ALTER TABLE `favorito` DISABLE KEYS */;
INSERT INTO `favorito` VALUES (1,1),(2,2),(3,5),(4,11),(5,7);
/*!40000 ALTER TABLE `favorito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `follow` (
  `idSeguidor` int NOT NULL,
  `idSeguido` int NOT NULL,
  `fecha` date NOT NULL,
  KEY `idSeguidor` (`idSeguidor`),
  KEY `idSeguido` (`idSeguido`),
  CONSTRAINT `follow_ibfk_1` FOREIGN KEY (`idSeguidor`) REFERENCES `usuario` (`idUsuario`),
  CONSTRAINT `follow_ibfk_2` FOREIGN KEY (`idSeguido`) REFERENCES `usuario` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (1,2,'2021-04-18'),(1,3,'2021-02-21'),(1,4,'2021-04-06'),(1,5,'2021-04-06'),(2,5,'2021-02-18'),(2,3,'2021-02-18'),(3,2,'2021-01-11'),(3,1,'2021-04-03'),(3,5,'2021-04-10'),(4,1,'2021-02-23'),(5,4,'2021-04-13'),(5,3,'2021-04-10');
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foro`
--

DROP TABLE IF EXISTS `foro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foro` (
  `idForo` int NOT NULL AUTO_INCREMENT,
  `idAnime` int NOT NULL,
  `titulo` varchar(200) NOT NULL,
  `contenido` varchar(6000) NOT NULL,
  PRIMARY KEY (`idForo`),
  KEY `idAnime` (`idAnime`),
  CONSTRAINT `foro_ibfk_1` FOREIGN KEY (`idAnime`) REFERENCES `anime` (`idAnime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foro`
--

LOCK TABLES `foro` WRITE;
/*!40000 ALTER TABLE `foro` DISABLE KEYS */;
INSERT INTO `foro` VALUES (1,1,'¿Qué tal el anime de Full Metal Alchemist Brotherhood?','Hace bastante tiempo vi el otro anime y me gustó mucho pese algún rellenito que hubo. Este nuevo, ¿qué tal es comparado con el otro? OS; animación, dibujo, historia.'),(2,11,'¿El manga de Jujutsu Kaisen merece la pena?','Hola a todos. Hoy vengo a haceros una pregunta: ¿El manga de Jujutsu Kaisen merece la pena? Yo solamente me he visto el primer episodio del anime, y la verdad me estaba interesando bastante, y como el manga es bastante corto, pues me apeteció leerlo y luego ir al anime. ¿Qué opinan? ¿El manga es fiel al anime?');
/*!40000 ALTER TABLE `foro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) NOT NULL,
  `username` varchar(20) NOT NULL,
  `correo` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  PRIMARY KEY (`idUsuario`),
  UNIQUE KEY `username` (`username`,`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Andres Mendez','elay','andres@gmail.com','$2a$10$8mBMMFXm49UnHhekRpDTCeztaU7p3WexCuI0C79vHSIx0PSIU2cnO','1998-06-09'),(2,'Samuel Huanca','samuBot','samuel@gmail.com','$2a$10$8mBMMFXm49UnHhekRpDTCeztaU7p3WexCuI0C79vHSIx0PSIU2cnO','1998-09-21'),(3,'Rodrigo Villarroel','rodrixKill','rodrigo@gmail.com','$2a$10$8mBMMFXm49UnHhekRpDTCeztaU7p3WexCuI0C79vHSIx0PSIU2cnO','1998-12-30'),(4,'Joaquin Viscafe','jeyjey','joaquin@gmail.com','$2a$10$8mBMMFXm49UnHhekRpDTCeztaU7p3WexCuI0C79vHSIx0PSIU2cnO','1998-03-12'),(5,'Mateo Altamirano','chocoThor','mateo@gmail.com','$2a$10$8mBMMFXm49UnHhekRpDTCeztaU7p3WexCuI0C79vHSIx0PSIU2cnO','1998-04-21');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarioanime`
--

DROP TABLE IF EXISTS `usuarioanime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarioanime` (
  `idUsuario` int NOT NULL,
  `idAnime` int NOT NULL,
  `idEstado` int NOT NULL,
  `porcentajeVisto` float DEFAULT NULL,
  `fechaInicioVer` date DEFAULT NULL,
  KEY `idUsuario` (`idUsuario`),
  KEY `idAnime` (`idAnime`),
  KEY `idEstado` (`idEstado`),
  CONSTRAINT `usuarioanime_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`),
  CONSTRAINT `usuarioanime_ibfk_2` FOREIGN KEY (`idAnime`) REFERENCES `anime` (`idAnime`),
  CONSTRAINT `usuarioanime_ibfk_3` FOREIGN KEY (`idEstado`) REFERENCES `estado` (`idEstado`),
  PRIMARY KEY (`idUsuario`, `idAnime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarioanime`
--

LOCK TABLES `usuarioanime` WRITE;
/*!40000 ALTER TABLE `usuarioanime` DISABLE KEYS */;
INSERT INTO `usuarioanime` VALUES (1,1,1,100,'2020-06-23'),(1,11,1,100,'2020-12-20'),(1,2,1,100,'2020-02-08'),(1,10,1,100,'2021-01-02'),(1,4,2,20,'2021-02-24'),(1,9,2,50,'2020-12-28'),(1,6,3,70,'2019-06-04'),(1,7,5,0,NULL),(2,2,2,30,'2021-03-11'),(3,1,1,100,'2020-03-01'),(3,2,1,100,'2020-10-21'),(3,3,1,100,'2020-11-25'),(3,5,1,100,'2020-09-13'),(3,10,2,70,'2021-01-01'),(3,11,2,90,'2021-02-21'),(4,11,1,100,'2021-03-15'),(4,10,2,90,'2020-01-22'),(4,4,4,10,'2019-12-15'),(5,7,1,100,'2021-01-15'),(5,8,1,100,'2020-03-28');
/*!40000 ALTER TABLE `usuarioanime` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-18 19:18:22
