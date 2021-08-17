module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "408660",
    DB: "backed_task",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
