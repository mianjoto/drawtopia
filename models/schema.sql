CREATE TABLE IF NOT EXISTS scribble (
    scribble_id INTEGER AUTO_INCREMENT NOT NULL,
    image MEDIUMBLOB NOT NULL,
    chatroom VARCHAR(255) NOT NULL,
    author_name VARCHAR(255) NOT NULL,
    time_posted DATETIME DEFAULT CURRENT_TIMESTAMP,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    PRIMARY KEY (scribble_id)
);

CREATE TABLE IF NOT EXISTS user (
    user_id INTEGER AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
);

ALTER TABLE scribble ADD COLUMN user_id INTEGER;
ALTER TABLE scribble ADD FOREIGN KEY (user_id) REFERENCES user(user_id);