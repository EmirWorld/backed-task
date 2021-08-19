# backed-task
This task is meant to show your skill level and understanding of Typescript in a NodeJS server environment. You are free to use any Javascript framework, pattern, ORM or anything you feel comfortable working with. The code must be tracked in git. 

In this task I implemented CRUD for User and importing user using two JSON Arrays

## Modify app>confing>db.config.js
```
module.exports = {
    HOST: "localhost",
    USER: "your_user",
    PASSWORD: "your_password",
    DB: "your_db_name",
    dialect: "your_db_dialect",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
```


## Project setup
```
npm install
```
## Run Node server
```
node server.js
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
