DROP DATABASE IF EXISTS techblog_db;

CREATE DATABASE techblog_db;

USE techblog_db;

DROP TABLE IF EXISTS post_comment;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS user;

CREATE TABLE user (
    id INT NOT NULL,
    username VARCHAR(30),
    password VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE post (
    id INT NOT NULL
    title VARCHAR(30),
    body VARCHAR(300),
    user_id INT NOT NULL,
    FOREIGN KEY (user_id)
    REFERENCES user(id)
    ON DELETE SET NULL,
    PRIMARY KEY (id)
);

CREATE TABLE comment (
    id INT NOT NULL,
    body VARCHAR(300),
    user_id INT NOT NULL,
    FOREIGN KEY (user_id)
    REFERENCES user(id)
    ON DELETE SET NULL,
    PRIMARY KEY (id)
);

CREATE TABLE post_comment (
    id INT NOT NULL,
    post_id INT NOT NULL,
    FOREIGN KEY (post_id)
    REFERENCES post(id)
    ON DELETE SET NULL,
    comment_id INT NOT NULL,
    FOREIGN KEY (comment_id)
    REFERENCES comment(id)
    ON DELETE SET NULL,
    PRIMARY KEY (id)
);