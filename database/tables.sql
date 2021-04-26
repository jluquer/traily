CREATE TABLE user
(
  userId INT NOT NULL,
  name VARCHAR(80) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(150) NOT NULL,
  type INT NOT NULL,
  PRIMARY KEY (userId)
);

CREATE TABLE activity
(
  activityId INT NOT NULL,
  activity VARCHAR(100) NOT NULL,
  PRIMARY KEY (activityId)
);

CREATE TABLE challenge
(
  challengeId INT NOT NULL,
  title VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  PRIMARY KEY (challengeId)
);

CREATE TABLE user_challenge
(
  userId INT NOT NULL,
  challengeId INT NOT NULL,
  status VARCHAR(30) NOT NULL,
  PRIMARY KEY (userId, challengeId),
  FOREIGN KEY (userId) REFERENCES user(userId),
  FOREIGN KEY (challengeId) REFERENCES challenge(challengeId)
);

CREATE TABLE challenge_comment
(
  challengeCommentId INT NOT NULL,
  comment TEXT NOT NULL,
  userId INT NOT NULL,
  challengeId INT NOT NULL,
  PRIMARY KEY (challengeCommentId),
  FOREIGN KEY (userId) REFERENCES user(userId),
  FOREIGN KEY (challengeId) REFERENCES challenge(challengeId),
  UNIQUE (userId, challengeId)
);

CREATE TABLE follow
(
  followId INT NOT NULL
  userId INT NOT NULL,
  followerUserId INT NOT NULL,
  PRIMARY KEY (followId),
  FOREIGN KEY (userId) REFERENCES user(userId),
  FOREIGN KEY (followerUserId) REFERENCES user(userId)
);

CREATE TABLE trail
(
  trailId INT NOT NULL,
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
  PRIMARY KEY (trailId),
  FOREIGN KEY (activityId) REFERENCES activity(activityId),
  FOREIGN KEY (userId) REFERENCES user(userId)
);

CREATE TABLE user_route
(
  userId INT NOT NULL,
  trailId INT NOT NULL,
  rating INT NOT NULL,
  review TEXT NOT NULL,
  PRIMARY KEY (userId, trailId),
  FOREIGN KEY (userId) REFERENCES user(userId),
  FOREIGN KEY (trailId) REFERENCES trail(trailId)
);

CREATE TABLE trail_comment
(
  userId INT NOT NULL,
  trailId INT NOT NULL,
  comment TEXT NOT NULL,
  trailCommentId INT NOT NULL,
  PRIMARY KEY (trailCommentId),
  FOREIGN KEY (userId) REFERENCES user(userId),
  FOREIGN KEY (trailId) REFERENCES trail(trailId),
  UNIQUE (userId, trailId)
);