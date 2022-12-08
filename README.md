# <p align = "center"> Bluetube </p>

<p align="center">
   <img src="https://w0.peakpx.com/wallpaper/883/979/HD-wallpaper-youtube-dark-blue-logo-dark-blue-neon-lights-social-network-creative-dark-blue-abstract-background-youtube-logo-youtube.jpg" width="600"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Bárbara_Rech-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/barbararech/bluetube?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Description

A platform for streaming videos categorized with tags!

## :computer: Technologies
  - Node.js
  - Typescript
  - JWT
  - PostgreSQL
  - Layered Architecture

## 🏁 Running the application

Make sure you have the latest stable version of [Node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/) running locally.

First, clone this repository:

```
git clone https://github.com/barbararech/bluetube
```

Inside the folder, run the following command to install the dependencies.

```
npm install
```

Run the following command to install the dev dependencies.

```
npm install prisma ts-node typescrypt prettier nodemon eslint eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-prettier dotenv-cli @types/bcrypt @types/cors @types/express @types/jsonwebtoken @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

Create database

```
npx prisma migrate dev
```

Then, run

```
npm start
```

to open the project on localhost in your browser.

:stop_sign: Don't forget to set the **environment variables**!

