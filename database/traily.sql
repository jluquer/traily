-- MariaDB dump 10.19  Distrib 10.5.10-MariaDB, for Linux (x86_64)
--
-- Host: us-cdbr-east-04.cleardb.com    Database: heroku_ce9defb7073d5b7
-- ------------------------------------------------------
-- Server version	5.6.50-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `activity` (
  `activityId` int(11) NOT NULL AUTO_INCREMENT,
  `activity` varchar(100) NOT NULL,
  PRIMARY KEY (`activityId`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
INSERT INTO `activity` VALUES (5,'hike'),(15,'ride'),(25,'e-bike ride'),(35,'running');
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `challenge`
--

DROP TABLE IF EXISTS `challenge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `challenge` (
  `challengeId` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`challengeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenge`
--

LOCK TABLES `challenge` WRITE;
/*!40000 ALTER TABLE `challenge` DISABLE KEYS */;
/*!40000 ALTER TABLE `challenge` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `challenge_comment`
--

DROP TABLE IF EXISTS `challenge_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `challenge_comment` (
  `challengeCommentId` int(11) NOT NULL AUTO_INCREMENT,
  `comment` text NOT NULL,
  `userId` int(11) NOT NULL,
  `challengeId` int(11) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`challengeCommentId`),
  KEY `challengeId` (`challengeId`),
  KEY `userId` (`userId`),
  CONSTRAINT `FK_5e720fc1f50ffbaa0034798418e` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_e47a4b401db89828dcc228c37fe` FOREIGN KEY (`challengeId`) REFERENCES `challenge` (`challengeId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenge_comment`
--

LOCK TABLES `challenge_comment` WRITE;
/*!40000 ALTER TABLE `challenge_comment` DISABLE KEYS */;
/*!40000 ALTER TABLE `challenge_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follow`
--

DROP TABLE IF EXISTS `follow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `follow` (
  `followId` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `followerUserId` int(11) NOT NULL,
  PRIMARY KEY (`followId`),
  KEY `followerUserId` (`followerUserId`),
  KEY `userId` (`userId`),
  CONSTRAINT `FK_673eb90803096b4300d2f547a4c` FOREIGN KEY (`followerUserId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_af9f90ce5e8f66f845ebbcc6f15` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=216 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (5,5,15),(15,5,25),(25,25,5),(35,15,5),(45,35,45),(55,5,45),(65,45,65),(75,35,65),(85,5,65),(95,5,75),(105,5,85),(115,25,85),(125,5,105),(135,15,105),(145,25,115),(155,125,135),(165,125,145),(175,135,145),(185,5,145),(195,5,175),(205,95,175),(215,115,175);
/*!40000 ALTER TABLE `follow` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trail`
--

DROP TABLE IF EXISTS `trail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trail` (
  `trailId` int(11) NOT NULL AUTO_INCREMENT,
  `description` text NOT NULL,
  `distance` int(11) DEFAULT NULL,
  `elev_gain` int(11) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `elev_max` int(11) DEFAULT NULL,
  `elev_min` int(11) DEFAULT NULL,
  `difficulty` int(11) NOT NULL,
  `trail_filepath` varchar(255) DEFAULT NULL,
  `country` varchar(120) NOT NULL,
  `province` varchar(120) NOT NULL,
  `city` varchar(120) NOT NULL,
  `activityId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`trailId`),
  KEY `userId` (`userId`),
  KEY `activityId` (`activityId`),
  CONSTRAINT `FK_05e0dc093a9b07c8eefcbaa99a4` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_7fab9b4cbbc2fe28b39d2907bdc` FOREIGN KEY (`activityId`) REFERENCES `activity` (`activityId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trail`
--

LOCK TABLES `trail` WRITE;
/*!40000 ALTER TABLE `trail` DISABLE KEYS */;
INSERT INTO `trail` VALUES (5,'It is a very mountainous route that this time has been selected because it crowns a landmark summit with relatively little effort. There are three different sections of increasing technical difficulty. The approach is made by a gentle ramp path to the south that enters the densely wooded valley of the Canuto or Zambrano stream, whose dry bed crosses up to six times. Then comes the climb to Puerto del Canuto, where the path becomes much steeper and with an unstable surface due to the loose pebbles.',5,432,'Pico Jabalcuza',656,240,3,'7907d0bd-062c-4eb8-9b98-63bb2870a4ee.gpx','Spain','Málaga','Alhaurín De La Torre',5,5,'2021-05-31 15:48:16.591246'),(15,'Cerro de la Tortuga.',1,100,'La Tortuga',150,50,1,NULL,'España','Málaga','Málaga',35,75,'2021-05-31 16:49:42.807979'),(25,'The Grand Canyon cuts an almighty dash through the Colorado Plateau, is 446km long, up to 29km wide, more than 1.6km deep and just shy of two billion years old. That’s the age of the venerable Vishnu schist at the base of this geological layer cake, which is best viewed by walking from canyon top to bottom and back up again. Follow in the footsteps of the Ancestral Puebloans, using the Bright Angel Trail to descend from South Rim to the Colorado River, via ancient pictographs and a riot of ever-changing rock. Spend a night in the canyon’s bowels before ascending the North Kaibab Trail to read the rock strata in reverse.',34,2074,'Bright Angel & North Kaibab Trails: Arizona, USA',NULL,NULL,4,NULL,'Usa','Arizona','Arizona',5,105,'2021-05-31 20:13:56.571853'),(35,'La subida al Torrecilla es una fantástica opción para los amantes de la montaña. La zona es un verdadero paraíso, y el poder estar rodeado de pinsapos (una especie de pino prehistórica que solo existe en el parque Nacional de la Sierra de las Nieves) es un auténtico privilegio. \n\nEsta ruta está considerada de dificultad media - alta, no obstante, toda la ruta es bastante asequible casi para cualquier persona que haya andando un mínimo, complicándose eso sí, en la subida misma al pico, ya que el desnivel a salvar es bastante pronunciado. \n\nLa ruta comienza en el Área Recreativa de los Quejigales. De allí, se toma el sendero de la \"Cañada del Cuerno\" hasta llegar al Puerto de los Pilones. De este punto, tendrás que dirigirte hacia el pico del Torrecilla por un sendero que está muy bien señalizado en todo momento. Hasta aquí, la subida es leve y moderada, y desde el Puerto de los Pilones hasta la base del pico, todo es bastante llano. Una vez se llegue al pilón de Tolox, es cuando la cosa se complica un poco porque tendrás que salvar el desnivel hasta hacer la cima. \n\nPara el regreso, tienes 3 opciones. Volver por el mismo camino, pasando de nuevo por la Cañada del Cuerno. Tomar la pista que hay que baja directamente al Área Recreativa de los Quejigales, o coger un sendero que sale desde el \"Pozo de la Nieve\" conocido como la \"Cañada de las Ánimas\". Sin duda, esta última es la mejor opción porque este sendero es una verdadera maravilla para todos los amantes de la naturaleza. \n\nEspero que encuentres de ayuda este post y que disfrutes muchísimo de la ruta. \n\nPD: No te olvides de firmar la libreta que encontrarás en la cima para inmortalizar la conquista del segundo pico más alto de la provincia de Málaga.',17,837,'Subida al Torrecilla - Mayo 2021',1927,1295,3,'','España','Málaga','Tolox',5,155,'2021-05-31 21:20:01.056811'),(45,'Partiendo del pueblo de Alfarnate se asciende al pico de El Vilo. Desde la cumbre se puede ver Sierra Nevada, la Maroma, el embalse de la Viñuela, el mar Mediterraneo y diversos pueblos de la Axerquia malagueña.\n\nEl ascenso se hace por el sendero de pequeño recorrido PR-A267. Al principio es una ancha pista forestal sin dificultad y luego se convierte en un estrecho sendero que asciende entre pinos. Cerca del pico, donde está el punto geodésico, ya desaparece la arboleda y hay que empezar a guiarse por los hitos de piedra.\n\nEl regreso se hace por el mismo camino y al acabar te puedes tomar una cervecita o un café en el precioso pueblo de Alfarnate.\n\nLa ruta no tiene gran dificultad, puede realizarla cualquier persona con una mínima forma física. Merece la pena, las vistas son preciosas y tardarás alrededor de 5 horas en subir y bajar, ya depende de qué ritmo lleves y las paradas que hagas. ',15,1,'Subida al pico de El Vilo, Alfarnate (Málaga)',1415,NULL,3,NULL,'España','Málaga','Alfarnate',5,165,'2021-05-31 22:07:45.233320');
/*!40000 ALTER TABLE `trail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trail_comment`
--

DROP TABLE IF EXISTS `trail_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trail_comment` (
  `trailCommentId` int(11) NOT NULL AUTO_INCREMENT,
  `comment` text NOT NULL,
  `userId` int(11) NOT NULL,
  `trailId` int(11) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`trailCommentId`),
  KEY `trailId` (`trailId`),
  KEY `userId` (`userId`),
  CONSTRAINT `FK_43cf56f9d69727791b1d163a7bd` FOREIGN KEY (`trailId`) REFERENCES `trail` (`trailId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_64ec41964f2d44193eca15538a2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trail_comment`
--

LOCK TABLES `trail_comment` WRITE;
/*!40000 ALTER TABLE `trail_comment` DISABLE KEYS */;
INSERT INTO `trail_comment` VALUES (5,'Muy buena ruta!\nMe ha encantado hacerla, aunque con un poco de pendiente y me cansé un poco. Repetiría sin duda!',45,5,'2021-05-31 16:16:02.693336');
/*!40000 ALTER TABLE `trail_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trail_review`
--

DROP TABLE IF EXISTS `trail_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trail_review` (
  `userId` int(11) NOT NULL,
  `trailId` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `review` text,
  PRIMARY KEY (`userId`,`trailId`),
  KEY `trailId` (`trailId`),
  CONSTRAINT `FK_31a85325bd59bb5d4d506f565ef` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_58c0e2ba8b48348058c5a0fb53f` FOREIGN KEY (`trailId`) REFERENCES `trail` (`trailId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trail_review`
--

LOCK TABLES `trail_review` WRITE;
/*!40000 ALTER TABLE `trail_review` DISABLE KEYS */;
/*!40000 ALTER TABLE `trail_review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` tinyint(4) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=176 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (5,'Javier Luque Rodríguez','luque@gmail.com','$2a$10$wq1AT66vbsY6sZ.vq5mT3uvmKNYHDeDvORR9zKG7dMD2U9IHeW4fS',1),(15,'Carmen Illescas Zurbano','carmen1mlg@gmail.com','$2a$10$kItS61cYNFTYLiHDSwPv0uTvKPlM4NAq35GG2OAjFOxXA8CGfHEM.',1),(25,'Rosa Melano','rosamelano@mail.com','$2a$10$uqoWJmnoYvwwbjUpvI8CmO7E93i99kE75ZqBsEW0ziMwDo//Gszpa',1),(35,'Vera Vera','veraencardiff@gmail.com','$2a$10$9Q0yywwLgD0nrAuW/V6kBelpPpRtZmu68vJj/X9a1IJXF0ct5e0M6',1),(45,'Mariam Peña','mariammoranpena@gmail.com','$2a$10$45MMjiuG2zt58bjl4.9aZ..ysqGK5ryz8EqW3VFA33HPO1taW8IXS',1),(55,'Aquiles Baesa Pingota','cjbarrau@gmail.com','$2a$10$GrCXGnbZknNXwPz/abL1NO7E7HSLIM9ayjosjgYgdGP2PR8mIFng6',1),(65,'Elena García López','elenaygarcia@gmail.com','$2a$10$FsvUVMgjI4KqMj9P5MAv4eeIqQlFQq10hNLWsf8RYzBRcc.274.XS',1),(75,'Sergi Flags','teachersergiflags@gmail.com','$2a$10$WCvytdMgmkXiV.b.U00r2ePkcCtGCyz0jR25nOWp4Hk.tFwWhHXKq',1),(85,'Elver Gonsales','elver@gonsales.com','$2a$10$wrg57mwKz66q0DRdI6gom.RJcdyy7pcPhZV0JjJOGTX28WQdXxnIS',1),(95,'Alex Sanchez','jesalex.87.sanchez@gmail.com','$2a$10$noCuTe0/8Ndod9Wd0eREyupzyRi/7LfzEKAl7MOyf8j8MU2qvlCuq',1),(105,'mijal hasson','mijalhasson@gmail.com','$2a$10$8rCC7c.lH9lSmdOhylfkDeIqPS9HbBNSQGxgXpuIKR/qKdnlgSoS.',1),(115,'Elver Galarga','elver@gmail.com','$2a$10$0qQuIYdu6Bxhv/OKTCXhv.TFJTtnnCDTyKiuIfl8mO/w4KwJ/ixF.',1),(125,'Daniel cerrillo gonzalo','danielcerrillogonzalo@gmail.com','$2a$10$nyXG3P7Wa.FMbn4sltW.0etjxungFB92R1TJUBg6YqNg2ShN82EFe',1),(135,'Adrian luque','adrian199120@hotmail.com','$2a$10$xyYIFSef5xgHmxi0pwmWsOxy3Cexh04A4sCbVKa6C/jNcpRJASXGq',1),(145,'Gloria Solero','gloriast19@gmail.com','$2a$10$asmWkXxbsD9bZa76SMCYfeaCJmPILvmN6Yl/MwHJzE1aN5g3eZl9.',1),(155,'Antonio Jesús Morales','moralesdelpozo@gmail.com','$2a$10$A0F6kEjGugCDGIhmAGblcub9H008EGkSE.UZiwtvrqYBS2beYbN7G',1),(165,'Clara Sandino','clarasandinom@gmail.com','$2a$10$L8O/lYtytMb8s/o0.Wb3..z1KYEbhmwa/SmbO2.Kf.xe55/DLGEBy',1),(175,'Fran Gemelier','francisco.requena.g@hotmail.com','$2a$10$Z/DriuzBZTzROTnYPDvbZu2QC8pb.BxBZtvyb6N0mk2vH.9l37Hfe',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_challenge`
--

DROP TABLE IF EXISTS `user_challenge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_challenge` (
  `userId` int(11) NOT NULL,
  `challengeId` int(11) NOT NULL,
  `status` varchar(30) NOT NULL,
  PRIMARY KEY (`userId`,`challengeId`),
  KEY `challengeId` (`challengeId`),
  CONSTRAINT `FK_2a670b2efe9436c88cef7f15699` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_ca62482b3c020cd5055eaabf4cf` FOREIGN KEY (`challengeId`) REFERENCES `challenge` (`challengeId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_challenge`
--

LOCK TABLES `user_challenge` WRITE;
/*!40000 ALTER TABLE `user_challenge` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_challenge` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-01 17:51:31
