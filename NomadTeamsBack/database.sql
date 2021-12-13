DROP DATABASE nomadTeams;
CREATE DATABASE nomadTeams;

CREATE TABLE user(

    id          INT(11) AUTO_INCREMENT,
    nombre      VARCHAR(100),
    apellidos   VARCHAR(200),
    nickname    VARCHAR(100),
    email       VARCHAR(50),
    password    VARCHAR(255),

    created_at  DATE,
    updated_at  DATE,

    CONSTRAINT pk_users PRIMARY KEY(id)
)ENGINE=INNODB;

CREATE TABLE post(

    id          INT(11) AUTO_INCREMENT,
    tittle      VARCHAR(100),
    description VARCHAR(200),
    content     TEXT,
    user_id     INT(11),

    created_at  DATE,
    updated_at  DATE,

    CONSTRAINT pk_posts PRIMARY KEY(id),
    CONSTRAINT FK_POSTS_USERS FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE
)ENGINE=INNODB;

CREATE TABLE comment(
    id          INT(11) AUTO_INCREMENT,
    content     TEXT,
    user_id     INT(11),
    post_id     INT(255),

    created_at  DATE,
    updated_at  DATE,

    CONSTRAINT pk_comments PRIMARY KEY(id),
    CONSTRAINT FK_COMMENT_USERS FOREIGN KEY(user_id) REFERENCES user(id) ON DELETE CASCADE,
    CONSTRAINT FK_COMMENT_POST FOREIGN KEY(post_id) REFERENCES post(id) ON DELETE CASCADE
)ENGINE=INNODB;

CREATE TABLE FOLLOWER(
    id                  INT(11) AUTO_INCREMENT,
    user_id_main        INT(11),
    user_id_second      INT(11),
    
    created_at  DATE,
    updated_at  DATE,

    CONSTRAINT pk_followers  PRIMARY KEY(id),
    CONSTRAINT FK_FOLLOWER_USERS_MAIN FOREIGN KEY(user_id_main) REFERENCES user(id) ON DELETE CASCADE,
    CONSTRAINT FK_FOLLOWER_USERS_SECOND FOREIGN KEY(user_id_second) REFERENCES user(id) ON DELETE CASCADE
)ENGINE=INNODB;



