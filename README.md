# backed-task
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
