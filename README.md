<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Basic CRUD Sample with Nests and Mongoose

## Description

### Basic CRUD Sample with Nestjs and Mongoose

#### Content:

```bash
➜  nest-crud git:(master) ✗ nest info

 _   _             _      ___  _____  _____  _     _____
| \ | |           | |    |_  |/  ___|/  __ \| |   |_   _|
|  \| |  ___  ___ | |_     | |\ `--. | /  \/| |     | |
| . ` | / _ \/ __|| __|    | | `--. \| |    | |     | |
| |\  ||  __/\__ \| |_ /\__/ //\__/ /| \__/\| |_____| |_
\_| \_/ \___||___/ \__|\____/ \____/  \____/\_____/\___/


[System Information]
OS Version     : Linux 4.4
NodeJS Version : v10.16.3
YARN Version    : 1.17.3
[Nest Information]
platform-express version : 6.7.2
mongoose version         : 6.1.2
common version           : 6.7.2
core version             : 6.7.2
```

## Installation

Prepare the environment variables in your system:

```env
# .env
MONGO_URI='mongodb://localhost:27017/'
PORT=5000
```

You can simple mv the `example.env` to `.env`

```bash
$ npm install
```

or

```bash
$ yarn install # if using yarn
```

## Running the app

```bash
# development
$ npm run start
# or
$ yarn start # if using yarn

# watch mode
$ npm run start:dev
# or
$ yarn start:dev # if using yarn

# production mode
$ npm run start:prod
# or
$ yarn start:prod # if using yarn
```

## Test

Tests are not setup in this project yet.

## License

Nest is [MIT licensed](LICENSE).
