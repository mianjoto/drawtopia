# Welcome to Drawtopia :)
![](/screenshots/welcome-page.jpg)


## Install Drawtopia
To run and install Drawtopia's on your Windows or Mac device, follow these instructions:
1. Install the [requirements](#requirements)
2. Run `git clone https://github.com/mianjoto/drawtopia`
3. Open the cloned repository and run `npm install`
4. Initialize the database (refer to [Initializing the database](#initializing-the-database))
5. Set up the environment variables (refer to  [Setting up environment variables](#setting-up-environment-variables)) 
6. In the repository, run `npm run devStart`
7. Open `http://localhost:3000/` in your browser
8. Draw away! :)

## Requirements
Drawtopia requires the following applications to work:
1. Node.js v18.13.0 ([Download](https://nodejs.org/en))
2. MySQL Workbench v8.0.33 ([Download](https://dev.mysql.com/downloads/workbench/))

## Initializing the database
To initialize the database using MySQL, follow these instructions:
1. Install MySQL Workbench v8.0.33 ([Download](https://dev.mysql.com/downloads/workbench/))
2. Continue with installation with default settings
3. When prompted to enter a password for the `root` user, enter a simple password you'll remember, like `"abc123"`
4. Open MySQL Shell and run the following commands:
    ```bash
    \sql
    \connect localhost -u root
    # then enter your the password you entered in step 3
    CREATE DATABASE drawtopia;
    ```
5. Run `npm run databaseInit`
6. Make sure to set the appropriate database-related environment variables either locally in your shell or in a new `.env` file in the root directory. Refer to the [Setting up environment variables](#setting-up-environment-variables) section if you need guidance

## Setting up environment variables
**To set up environment variables, refer to the instructions in the [.env.sample file](/.env.sample).** This file provides a sample for the .env file required to run the database and server.
