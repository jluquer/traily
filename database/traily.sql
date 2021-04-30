-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 28, 2021 at 06:36 PM
-- Server version: 10.5.9-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `traily`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `activityId` int(11) NOT NULL,
  `activity` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `challenge`
--

CREATE TABLE `challenge` (
  `challengeId` int(11) NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `challenge_comment`
--

CREATE TABLE `challenge_comment` (
  `challengeCommentId` int(11) NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(11) NOT NULL,
  `challengeId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `follow`
--

CREATE TABLE `follow` (
  `followId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `followerUserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trail`
--

CREATE TABLE `trail` (
  `trailId` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trail_comment`
--

CREATE TABLE `trail_comment` (
  `trailCommentId` int(11) NOT NULL,
  `comment` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `userId` int(11) NOT NULL,
  `trailId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trail_review`
--

CREATE TABLE `trail_review` (
  `userId` int(11) NOT NULL,
  `trailId` int(11) NOT NULL,
  `rating` int(11) NOT NULL,
  `review` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(11) NOT NULL,
  `name` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `name`, `password`, `email`, `type`) VALUES
(1, 'Javier Luque Rodríguez', '$2a$10$HFAafvGex1OR8769uueYte9OaHSlxWzXDw6xafLQ6eYW/iliFtje6', 'javier.luque@iescampanillas.com', 0),
(4, 'Javier Luque Rodríguez', '$2a$10$lbllzgss62olIB3jg6q6bO2CLNDNMrKH1RCEUWXybKPSpBWwKVI.y', 'javier.lr96@gmail.com', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_challenge`
--

CREATE TABLE `user_challenge` (
  `userId` int(11) NOT NULL,
  `challengeId` int(11) NOT NULL,
  `status` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`activityId`);

--
-- Indexes for table `challenge`
--
ALTER TABLE `challenge`
  ADD PRIMARY KEY (`challengeId`);

--
-- Indexes for table `challenge_comment`
--
ALTER TABLE `challenge_comment`
  ADD PRIMARY KEY (`challengeCommentId`),
  ADD UNIQUE KEY `userId` (`userId`,`challengeId`),
  ADD KEY `challengeId` (`challengeId`);

--
-- Indexes for table `follow`
--
ALTER TABLE `follow`
  ADD PRIMARY KEY (`followId`),
  ADD KEY `followerUserId` (`followerUserId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `trail`
--
ALTER TABLE `trail`
  ADD PRIMARY KEY (`trailId`),
  ADD KEY `userId` (`userId`),
  ADD KEY `activityId` (`activityId`);

--
-- Indexes for table `trail_comment`
--
ALTER TABLE `trail_comment`
  ADD PRIMARY KEY (`trailCommentId`),
  ADD UNIQUE KEY `userId` (`userId`,`trailId`),
  ADD KEY `trailId` (`trailId`);

--
-- Indexes for table `trail_review`
--
ALTER TABLE `trail_review`
  ADD PRIMARY KEY (`userId`,`trailId`),
  ADD KEY `trailId` (`trailId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`);

--
-- Indexes for table `user_challenge`
--
ALTER TABLE `user_challenge`
  ADD PRIMARY KEY (`userId`,`challengeId`),
  ADD KEY `challengeId` (`challengeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
  MODIFY `activityId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `challenge`
--
ALTER TABLE `challenge`
  MODIFY `challengeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `challenge_comment`
--
ALTER TABLE `challenge_comment`
  MODIFY `challengeCommentId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `follow`
--
ALTER TABLE `follow`
  MODIFY `followId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `trail`
--
ALTER TABLE `trail`
  MODIFY `trailId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trail_comment`
--
ALTER TABLE `trail_comment`
  MODIFY `trailCommentId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `challenge_comment`
--
ALTER TABLE `challenge_comment`
  ADD CONSTRAINT `FK_5e720fc1f50ffbaa0034798418e` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`),
  ADD CONSTRAINT `FK_e47a4b401db89828dcc228c37fe` FOREIGN KEY (`challengeId`) REFERENCES `challenge` (`challengeId`);

--
-- Constraints for table `follow`
--
ALTER TABLE `follow`
  ADD CONSTRAINT `FK_673eb90803096b4300d2f547a4c` FOREIGN KEY (`followerUserId`) REFERENCES `user` (`userId`),
  ADD CONSTRAINT `FK_af9f90ce5e8f66f845ebbcc6f15` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);

--
-- Constraints for table `trail`
--
ALTER TABLE `trail`
  ADD CONSTRAINT `FK_05e0dc093a9b07c8eefcbaa99a4` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`),
  ADD CONSTRAINT `FK_7fab9b4cbbc2fe28b39d2907bdc` FOREIGN KEY (`activityId`) REFERENCES `activity` (`activityId`);

--
-- Constraints for table `trail_comment`
--
ALTER TABLE `trail_comment`
  ADD CONSTRAINT `FK_43cf56f9d69727791b1d163a7bd` FOREIGN KEY (`trailId`) REFERENCES `trail` (`trailId`),
  ADD CONSTRAINT `FK_64ec41964f2d44193eca15538a2` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`);

--
-- Constraints for table `trail_review`
--
ALTER TABLE `trail_review`
  ADD CONSTRAINT `FK_31a85325bd59bb5d4d506f565ef` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`),
  ADD CONSTRAINT `FK_58c0e2ba8b48348058c5a0fb53f` FOREIGN KEY (`trailId`) REFERENCES `trail` (`trailId`);

--
-- Constraints for table `user_challenge`
--
ALTER TABLE `user_challenge`
  ADD CONSTRAINT `FK_2a670b2efe9436c88cef7f15699` FOREIGN KEY (`userId`) REFERENCES `user` (`userId`),
  ADD CONSTRAINT `FK_ca62482b3c020cd5055eaabf4cf` FOREIGN KEY (`challengeId`) REFERENCES `challenge` (`challengeId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;