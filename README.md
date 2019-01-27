### Features

- Organized file structure 
- Custom code scaffolding 
- Docker ready! 🚢

# mysql-express-seed

This is a NodeJS seed project utilizing the express framework and mySQL. The project's aim is to help boost the development when using these two services together. The project has all the nessecary modules required to initialize your simple API in seconds with code scaffolding.

## Requirements
Make sure you have NodeJS installed.
Download Link: https://nodejs.org/

## Initialization
#### Install Dependencies
```
$ npm install
```

#### Configuration
Initialize the configuration file by running the following command
```
$ yo config
```
This should initialize a JSON file in the `./src` directory. Add your database connection hostname, port, username and password.
There are two configuration for **Development 🔨** and **Production 🚀**. Make sure you configure them right.

***Note:*** `config.json` is git ignored by default.

## Running the project
#### Using conventional serve
```
$ npm start
```

#### Through Docker
