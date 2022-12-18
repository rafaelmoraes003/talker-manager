<h1 align="left">Talker Manager</h1>

###

<p align="left">Talker Manager Project, which sought to build an application for registration of talkers (speakers) in which it is possible to register, view, search, edit and delete information. For this, an API was developed for a CRUD (Create, Read, Update and Delete) of speakers (talkers) and endpoints with ExpressJS that read and write in a file using the fs module of Node.js.</p>

###

<h2 align="left">Technologies used</h2>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="50" width="62" alt="javascript logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" width="62" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="50" width="62" alt="express logo"  />
</div>

###

<h2 align="left">How to use the application</h2>

###

Clone the application using the `git clone` command. After that, enter the project folder using the `cd talker-manager` command and run the `npm install` command. After installation, use the `npm start` command and enter port `3000` in your browser.

###

<h2 align="left">Endpoints</h2>

###

<h2 align="left">Talker</h2>

| Method | Functionality | URL |
|---|---|---|
| `GET` | List all talkers | http://localhost:3001/talker |
| `GET` | List a talker whose name includes the query string  | http://localhost:3001/talker?q |
| `GET` | List a talker based on its id | http://localhost:3001/talker/:id |
| `POST` | Create a new talker | http://localhost:3001/talker |
| `DELETE` | Delete a talker based on its id | http://localhost:3001/talker/:id |
| `PUT` | Update the informations about a talker based on its id | http://localhost:3001/talker/:id |

###

<h2 align="left">Login</h2>

| Method | Functionality | URL |
|---|---|---|
| `POST` | Login and return an authentication token | http://localhost:3001/login |


<h4 align="left">Requires an object in the following format:</h4>

```JavaScript
{
  email: "username@email.com",
  password: 123456
}
```
