# Drawtopia

## Requirements
To host Drawtopia's web server on your Windows computer, follow these instructions:
1. Run `git clone https://github.com/mianjoto/drawtopia`
2. Run `npm install`
3. Make sure to set the appropriate environment variables necessary to run the server. Refer to the [Setting up environment variables](#setting-up-environment-variables) section to learn how to set up env variables that are necessary to run the server
4. Run `npm run devStart`
5. Open `http://localhost:3000/` in your browser

## Setting up environment variables
**To set up environment variables, refer to the instructions in the [.env.sample file](/.env.sample).** This file provides a sample for the .env file required to run the database and server.

## Initializing the database
To initialize the database using MySQL, follow these instructions:
1. Install [MySQL Community Edition](https://dev.mysql.com/downloads/windows/installer/8.0.html)
2. Continue with installation with default settings
3. When prompted to enter a password for the `root` user, enter a simple password you'll remember, like "abc123"
4. Open MySQL Shell and run the following commands:
    ```bash
    \sql
    \connect localhost -u root
    # then enter your the password you entered in step 3
    CREATE DATABASE drawtopia;
    ```
5. Run `npm run databaseInit`
6. Make sure to set the appropriate database-related environment variables either locally in your shell or in a new `.env` file in the root directory. Refer to the [Setting up environment variables](#setting-up-environment-variables) section if you need guidance

