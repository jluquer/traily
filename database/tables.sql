CREATE TABLE IF NOT EXISTS user
(
  userId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(150) NOT NULL,
  type TINYINT NOT NULL
);

CREATE TABLE IF NOT EXISTS activity 
(
  activityId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  activity VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS challenge
(
  challengeId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS user_challenge
(
  userId INT NOT NULL,
  challengeId INT NOT NULL,
  status VARCHAR(30) NOT NULL,
  PRIMARY KEY (userId, challengeId),
  FOREIGN KEY (userId) REFERENCES user(userId),
  FOREIGN KEY (challengeId) REFERENCES challenge(challengeId)
);

CREATE TABLE IF NOT EXISTS challenge_comment
(
  challengeCommentId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  comment TEXT NOT NULL,
  userId INT NOT NULL,
  challengeId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES user(userId),
  FOREIGN KEY (challengeId) REFERENCES challenge(challengeId),
  UNIQUE (userId, challengeId)
);

CREATE TABLE IF NOT EXISTS follow
(
  followId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userId INT NOT NULL,
  followerUserId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES user(userId),
  FOREIGN KEY (followerUserId) REFERENCES user(userId)
);

CREATE TABLE IF NOT EXISTS trail
(
  trailId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  description TEXT,
  distance INT,
  elev_gain INT,
  name VARCHAR(100) NOT NULL,
  elev_max INT,
  elev_min INT,
  difficulty INT NOT NULL,
  trail_filepath VARCHAR(255),
  country VARCHAR(120) NOT NULL,
  province VARCHAR(120) NOT NULL,
  city VARCHAR(120) NOT NULL,
  activityId INT NOT NULL,
  userId INT NOT NULL,
  FOREIGN KEY (activityId) REFERENCES activity(activityId),
  FOREIGN KEY (userId) REFERENCES user(userId)
);

CREATE TABLE IF NOT EXISTS trail_review
(
  userId INT NOT NULL,
  trailId INT NOT NULL,
  rating INT NOT NULL,
  review TEXT NOT NULL,
  PRIMARY KEY (userId, trailId),
  FOREIGN KEY (userId) REFERENCES user(userId),
  FOREIGN KEY (trailId) REFERENCES trail(trailId)
);

CREATE TABLE IF NOT EXISTS trail_comment
(
  trailCommentId INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  comment TEXT NOT NULL,
  userId INT NOT NULL,
  trailId INT NOT NULL,
  FOREIGN KEY (userId) REFERENCES user(userId),
  FOREIGN KEY (trailId) REFERENCES trail(trailId),
  UNIQUE (userId, trailId)
);