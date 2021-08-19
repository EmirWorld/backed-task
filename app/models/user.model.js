module.exports = (sequelize, Sequelize) => {
    /*
    * Here we define our USER model and required fields
    * */
    const User = sequelize.define("user", {
        _id: {
            type: Sequelize.STRING,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true
        },
        firstName: {
            type: Sequelize.STRING,
            notEmpty: true,

        },
        lastName: {
            type: Sequelize.STRING,
            notEmpty: true,
        },
        email: {
            type: Sequelize.STRING,
            notEmpty: true,
        },
        phoneNumber: {
            type: Sequelize.STRING,
            notEmpty: true,
        }
    });

    return User;
};
