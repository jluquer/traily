-- MariaDB dump 10.19  Distrib 10.5.10-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: traily
-- ------------------------------------------------------
-- Server version	10.5.10-MariaDB

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
  `activity` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`activityId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
INSERT INTO `activity` VALUES (1,'hike'),(2,'ride'),(3,'E-bike ride'),(4,'running'),(5,'trekking');
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
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`challengeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(11) NOT NULL,
  `challengeId` int(11) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  PRIMARY KEY (`challengeCommentId`),
  KEY `challengeId` (`challengeId`),
  KEY `userId` (`userId`),
  CONSTRAINT `FK_5e720fc1f50ffbaa0034798418e` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_e47a4b401db89828dcc228c37fe` FOREIGN KEY (`challengeId`) REFERENCES `challenge` (`challengeId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follow`
--

LOCK TABLES `follow` WRITE;
/*!40000 ALTER TABLE `follow` DISABLE KEYS */;
INSERT INTO `follow` VALUES (1,1,2),(2,2,3);
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
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `distance` int(11) DEFAULT NULL,
  `elev_gain` int(11) DEFAULT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `elev_max` int(11) DEFAULT NULL,
  `elev_min` int(11) DEFAULT NULL,
  `difficulty` int(11) NOT NULL,
  `trail_filepath` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `province` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `city` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activityId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  PRIMARY KEY (`trailId`),
  KEY `userId` (`userId`),
  KEY `activityId` (`activityId`),
  CONSTRAINT `FK_05e0dc093a9b07c8eefcbaa99a4` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_7fab9b4cbbc2fe28b39d2907bdc` FOREIGN KEY (`activityId`) REFERENCES `activity` (`activityId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trail`
--

LOCK TABLES `trail` WRITE;
/*!40000 ALTER TABLE `trail` DISABLE KEYS */;
INSERT INTO `trail` VALUES (1,'adfsasdf',1234,1234,'Pico del Cielo',NULL,NULL,2,'2b0b1693-277b-4820-a668-19e32ba3fdbd.gpx','Spain','Málaga','Alhaurín De La Torre',2,1,'2021-05-25 20:32:49.294087'),(2,'asdfsadfgasdfg',10,600,'Jabalcuza',NULL,NULL,2,'bc89d27d-7438-4be1-9819-e2e580c01be2.gpx','Spain','Málaga','Alhaurín De La Torre',1,1,'2021-05-26 18:46:20.788745'),(3,'asdfasdfadsfasdfasdf',20,1900,'Torrecilla',NULL,NULL,3,NULL,'Spain','Málaga','Ronda',1,2,'2021-05-26 18:47:16.258637');
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
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(11) NOT NULL,
  `trailId` int(11) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  PRIMARY KEY (`trailCommentId`),
  KEY `trailId` (`trailId`),
  KEY `userId` (`userId`),
  CONSTRAINT `FK_43cf56f9d69727791b1d163a7bd` FOREIGN KEY (`trailId`) REFERENCES `trail` (`trailId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_64ec41964f2d44193eca15538a2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trail_comment`
--

LOCK TABLES `trail_comment` WRITE;
/*!40000 ALTER TABLE `trail_comment` DISABLE KEYS */;
INSERT INTO `trail_comment` VALUES (1,'adsfasdfa',1,1,'2021-05-25 20:32:55.422552'),(4,'asdfasdfasd',2,1,'2021-05-25 20:42:20.000406'),(6,'hola hola',2,1,'2021-05-25 20:43:32.009821'),(7,'adsfadf',2,1,'2021-05-25 20:44:16.041725'),(8,'asdfadsf',2,1,'2021-05-25 20:46:31.035148'),(9,'asdfdasf',2,1,'2021-05-25 20:47:39.029249'),(10,'asdfasdfasdf',3,3,'2021-05-26 18:48:26.886939');
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
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `review` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`userId`,`trailId`),
  KEY `trailId` (`trailId`),
  CONSTRAINT `FK_31a85325bd59bb5d4d506f565ef` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_58c0e2ba8b48348058c5a0fb53f` FOREIGN KEY (`trailId`) REFERENCES `trail` (`trailId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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
  `name` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` tinyint(4) NOT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Javier Luque Rodríguez','javier.luque@iescampanillas.com','$2a$10$HCgIeErjrNdARvmALO6VU.NrIRF58HoSQOzmrdvfvUuLJ5pgIx8ze',1),(2,'Adrian Luque Rodriguez','adri@gmail.com','$2a$10$4zCY5bEzrMw/5C8eIum5Re0HrbVRuH23LRsZigy2AlV0xhuX45YLy',1),(3,'Fran Gutierrez Castro','guti@gmail.com','$2a$10$uN2mSlnyR/Qzenc/bIxH5OrT9Xis6gV1KoePkqPHYrD.e/ANNDPZK',1);
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
  `status` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`userId`,`challengeId`),
  KEY `challengeId` (`challengeId`),
  CONSTRAINT `FK_2a670b2efe9436c88cef7f15699` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_ca62482b3c020cd5055eaabf4cf` FOREIGN KEY (`challengeId`) REFERENCES `challenge` (`challengeId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
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

-- Dump completed on 2021-05-29 13:08:59
